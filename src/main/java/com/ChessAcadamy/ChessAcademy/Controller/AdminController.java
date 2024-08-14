package com.ChessAcadamy.ChessAcademy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import com.ChessAcadamy.ChessAcademy.Repository.AdminRepo;
import com.ChessAcadamy.ChessAcademy.Service.AdminService;
import com.ChessAcadamy.ChessAcademy.model.Admin;
import com.ChessAcadamy.ChessAcademy.model.Admindto;
import com.ChessAcadamy.ChessAcademy.model.Loginfile;

import jakarta.validation.Valid;

import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import com.nimbusds.jose.jwk.source.ImmutableSecret;

import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService ser;

    @Autowired
    private AdminRepo repository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Value("${security.jwt.issuer}")
    private String jwtIssuer;

    @Value("${security.jwt.secret-key}")
    private String jwtSecretKey;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Registration method
    @PostMapping("/postadmin")
    public ResponseEntity<?> postAdmin(@Valid @RequestBody Admindto registerDto, BindingResult result) {
        if (result.hasErrors()) {
            var errorsMap = new HashMap<String, String>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        if (repository.findByEmail(registerDto.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }

        Admin userModel = new Admin();
        userModel.setName(registerDto.getName());
        userModel.setEmail(registerDto.getEmail());
        userModel.setPassword(passwordEncoder.encode(registerDto.getPassword()));  // Encrypt the password
        userModel.setDate(registerDto.getDate());
        userModel.setBio(registerDto.getBio());
        userModel.setLocation(registerDto.getLocation());

        try {
            repository.save(userModel);

            String jwtToken = createJwtToken(userModel);
            var response = new HashMap<String, Object>();
            response.put("tokening", jwtToken);
            response.put("admin", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration");
        }
    }

    // Login method
    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@Valid @RequestBody Loginfile loginDto, BindingResult result) {
        if (result.hasErrors()) {
            var errorsMap = new HashMap<String, String>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        try {
            Admin userModel = repository.findByEmail(loginDto.getEmail());

            if (userModel == null || !passwordEncoder.matches(loginDto.getPassword(), userModel.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
            }

            String jwtToken = createJwtToken(userModel);
            var response = new HashMap<String, Object>();
            response.put("tokening", jwtToken);
            response.put("admin", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("An error occurred during login");
        }
    }

    // JWT token creation method
    private String createJwtToken(Admin userModel) {
        Instant now = Instant.now();

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer(jwtIssuer)
                .issuedAt(now)
                .expiresAt(now.plusSeconds(24 * 3600))  // 24 hours expiration
                .subject(userModel.getEmail())
                .build();

        var encoder = new NimbusJwtEncoder(new ImmutableSecret<>(jwtSecretKey.getBytes(StandardCharsets.UTF_8)));

        var params = JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(), claims);

        return encoder.encode(params).getTokenValue();
    }

    // Method to retrieve all admins
    @GetMapping("/admindata")
    public List<Admin> getAdmin() {
        return ser.getAdmin();
    }
}
