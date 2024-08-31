package com.firstproj.studentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.firstproj.studentsystem.model.Student;


@Repository
public interface StudentRepository extends JpaRepository<Student, String>{

}