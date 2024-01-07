package com.example.demo.controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.expenseDetailsEntity;
import com.example.demo.Repository.expenseDetailsRepository;

@CrossOrigin
@RestController
@RequestMapping("/expense")
public class expenseDetailsController {
	@Autowired
	expenseDetailsRepository fetchData;
	
	@GetMapping("/get")
	List<expenseDetailsEntity>getExpenses(){
		return fetchData.findAll();
	}
	@GetMapping("/get/{id}")
	Optional<expenseDetailsEntity>getUserid(@PathVariable("id") int id){
		return fetchData.findById(id);
	}
	@PostMapping("/post")
	public expenseDetailsEntity create(@RequestBody expenseDetailsEntity d) {
		return fetchData.save(d);
	}
	@PutMapping("/put/{id}")
	public expenseDetailsEntity update(@RequestBody expenseDetailsEntity d, @PathVariable("id") int id) {
		return fetchData.save(d);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id")int id)
	{
		fetchData.deleteById(id);
	}
	
	
	
}