package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentServiceImplementation implements StudentService{
	
	@Autowired
	private StudentRepository studentRespository;
	
	
	@Override
	public Student saveStudent(Student student) {
		return studentRespository.save(student);
	}


	@Override
	public List<Student> getAllStudents() {
		return studentRespository.findAll();
	}
	
	
}
