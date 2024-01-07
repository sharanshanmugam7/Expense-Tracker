package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.expenseDetailsEntity;

public interface expenseDetailsRepository extends JpaRepository<expenseDetailsEntity,Integer>{

}