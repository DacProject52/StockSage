package spring.react.sr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spring.react.sr.exception.ResourceNotFoundException;
import spring.react.sr.model.User;
import spring.react.sr.repository.UserRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/a5/user")
public class UserController {
	@Autowired
	public UserRepository userRepository;
	
	//now implement getall method
	@GetMapping
	public List<User> getAllEmployees(){
		return userRepository.findAll();   
	}
	
	
	//build create user
	@PostMapping
	public User createUser(@RequestBody User user) {
		System.out.println(user.getFirstname());
		return  userRepository.save(user);
	}
	
	
	//build get Employee Method by id
//	@GetMapping("{uid}")
//	public ResponseEntity<User> getUserById(@PathVariable String uid){
//		User user=userRepository.findById(uid).orElseThrow(()-> new ResourceNotFoundException("Employee does not exist with uid"+ uid));
//	    
//		return ResponseEntity.ok(user);
//	
//	}
	

}