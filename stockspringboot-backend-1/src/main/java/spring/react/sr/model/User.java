package spring.react.sr.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "USERINFO")
public class User {
	@Id
	private String uid;
	@Column(name="FRISTNAME")
	private String firstname;
	@Column(name="LASTNAME")
	private String lastname;
	@Column(name="CONTACT")
	private String contact;
	@Column(name="EMAIL")
	private String email ;
	@Column(name="PASSWORD")
	private String password;
	@Column(name="CONFIRMPASSWORD")
	private String confirmpassword;
	
	
	public User() {
		
	}


	public User(String firstname, String lastname, String contact, String email, String password,
			String confirmpassword) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}


	public String getUid() {
		return uid;
	}


	public void setUid(String uid) {
		this.uid = uid;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
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


	public String getConfirmpassword() {
		return confirmpassword;
	}


	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	
	

	

}
