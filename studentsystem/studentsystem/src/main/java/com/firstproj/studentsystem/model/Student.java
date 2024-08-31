package com.firstproj.studentsystem.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    private String name;
    private String address;




    @Column(nullable = false)
    private String usn;
   

   
    public String getUSN(){
        return usn;
    }

    public void setUSN(String usn){
        this.usn=usn;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public String getAddress(){
        return address;
    }

    public void setAddress(String address){
        this.address=address;
    }


}