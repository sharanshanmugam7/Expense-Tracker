package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ExpenseDetails")
public class expenseDetailsEntity {
	@Id
	private int userid;
	public expenseDetailsEntity(int userid, String username, String date, String price, String description) {
		super();
		this.userid = userid;
		this.username = username;
		this.date = date;
		this.price = price;
		this.description = description;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	private String username;
	private String date;
	private String price;
	private String description;
	public expenseDetailsEntity()
	{
		
	}
	

}
