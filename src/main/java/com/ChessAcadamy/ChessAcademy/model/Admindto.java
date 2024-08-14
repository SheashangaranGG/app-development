package com.ChessAcadamy.ChessAcademy.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Admindto {
    private String name;
    private String email;
    private String password;
    private String bio;
    private String location;
    private String date;
}
