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
	@Column(name="NAME")
	private String name;
	@Column(name="CONTACT")
	private String contact;
	@Column(name="EMAIL")
	private String email ;
	@Column(name="PASSWORD")
	private String password;
	
	public User() {
		
	}

	public User(String name, String contact, String email, String password) {
		super();
		this.name = name;
		this.contact = contact;
		this.email = email;
		this.password = password;
	}

	public String getUID() {
		return uid;
	}

	public void setUID(String uID) {
		uid = uID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
	
	
	
}
