package com.example.demo.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="LoginDetails")
public class LoginEntity {
	@Id
	private int id;
	private String email;
	private String password;
	public LoginEntity()
	{
		
	}
	public LoginEntity(int id, String email, String password) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
