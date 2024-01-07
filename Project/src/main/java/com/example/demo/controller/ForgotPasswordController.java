package com.example.demo.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.ForgotPasswordEntity;
import com.example.demo.Repository.ForgotPasswordRepository;

@RestController
@RequestMapping("/reset")
public class ForgotPasswordController {
	@Autowired
	ForgotPasswordRepository fetchData;
	
	@GetMapping("/get")
	List<ForgotPasswordEntity>getUsers(){
		return fetchData.findAll();
	}
	@GetMapping("/get/{id}")
	Optional<ForgotPasswordEntity>getUserid(@PathVariable("id") int id){
		return fetchData.findById(id);
	}
	@PostMapping("/post")
	public ForgotPasswordEntity create(@RequestBody ForgotPasswordEntity d) {
		return fetchData.save(d);
	}
	@PutMapping("/put/{id}")
	public ForgotPasswordEntity update(@RequestBody ForgotPasswordEntity d, @PathVariable("id") int id) {
		return fetchData.save(d);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id")int id)
	{
		fetchData.deleteById(id);
	}
	
	
}