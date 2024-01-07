package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="SignupDetails")
public class SignupEntity {
	@Id
	private int id;
	private int age,pincode;
	private String name,email,country;
	private long contact;
	public SignupEntity()
	{
		
	}
	public SignupEntity(int id, int age, int pincode, String name, String email, String country, long contact) {
		super();
		this.id = id;
		this.age = age;
		this.pincode = pincode;
		this.name = name;
		this.email = email;
		this.country = country;
		this.contact = contact;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	

}
