package com.ChessAcadamy.ChessAcademy.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ChessAcadamy.ChessAcademy.Repository.AdminRepo;
import com.ChessAcadamy.ChessAcademy.model.Admin;

@Service
public class AdminService {

    @Autowired
    private AdminRepo repo;

    public List<Admin> getAdmin() {
        return repo.findAll();
    }

    public Admin postAdmin(Admin det) {
       return repo.save(det);
    }
}
