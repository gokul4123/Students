package com.firstproj.studentsystem.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.firstproj.studentsystem.model.Student;
import com.firstproj.studentsystem.repository.StudentRepository;


@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student){
        return studentRepository.save(student);
    }
    
    @Override
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
}