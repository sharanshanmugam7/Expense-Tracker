package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.SignupEntity;

public interface SignUpRepository extends JpaRepository<SignupEntity,Integer>{

}