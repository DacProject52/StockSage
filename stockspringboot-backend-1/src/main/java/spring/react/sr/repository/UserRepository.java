package spring.react.sr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import spring.react.sr.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
