package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.ForgotPasswordEntity;

public interface ForgotPasswordRepository extends JpaRepository<ForgotPasswordEntity,Integer>{

}