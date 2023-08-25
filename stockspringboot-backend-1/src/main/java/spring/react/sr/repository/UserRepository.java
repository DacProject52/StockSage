package spring.react.sr.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.react.sr.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

//	Optional<User> findById(String uid);

}
