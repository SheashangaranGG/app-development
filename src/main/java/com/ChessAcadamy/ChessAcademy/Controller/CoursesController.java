package com.ChessAcadamy.ChessAcademy.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ChessAcadamy.ChessAcademy.Repository.CoursesRepo;
import com.ChessAcadamy.ChessAcademy.Service.Coursesservice;
import com.ChessAcadamy.ChessAcademy.model.Courses;

@RestController
// @CrossOrigin(origins = "http://localhost:3000") 
@RequestMapping("/courses")
public class CoursesController {
    @Autowired
    Coursesservice ser;

    @Autowired
    CoursesRepo repo;

    @PostMapping(path = "/insertCourses")
    public List<Courses> saveCoursesData(@RequestBody List<Courses> details) {
        return ser.saveCoursesData(details);
    }

    @GetMapping(path = "/getCoursesdata")
    public List<Courses> getCoursesData() {
        return ser.gCoursesDetails();
    }
   @DeleteMapping(path = "/deletecourses")
    public ResponseEntity<?> deleteCoursesDetails(@RequestParam Long id) {
    if (repo.existsById(id)) {
        ser.gdeleCoursesDetails(id);
        return ResponseEntity.ok(repo.findAll());
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Course with ID " + id + " not found");
    }
}


    @PatchMapping("/addmentor")
    public Courses patchCourses(@RequestParam Long Courses_id,@RequestParam Long Mentor_id )
    {
        return ser.patchingCourses(Courses_id,Mentor_id);
    }

    @PatchMapping("/editcoursedetails")
    public Courses patchCoursedet(@RequestParam Long Couses_id,@RequestBody Courses courses)
    {
        return ser.patchCourseDetails(Couses_id, courses);
    }

}
