package project.mozanta;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userrepo extends MongoRepository<user, String>{

}
