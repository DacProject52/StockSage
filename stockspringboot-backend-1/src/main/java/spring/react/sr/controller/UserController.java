package spring.react.sr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.react.sr.model.User;
import spring.react.sr.repository.UserRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v4/")
public class UserController {
	@Autowired
	public UserRepository userRepository;
	
	//now implement getall method
	@GetMapping("/user")
	public List<User> getAllEmployees(){
		return userRepository.findAll();   
	}
	

}