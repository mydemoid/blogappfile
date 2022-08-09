package project.mozanta;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class usercontroller {
	

	
	@Autowired
	private userrepo userrepo;
	@Autowired
	private blogrepo blogrepo;
	
	@PostMapping("/create")
	public void createuser(@RequestBody user user) {
		
		userrepo.insert(user);
	}
	
//	@PostMapping("/delete/(id)")
//    public void deletestudent(@PathVariable String id) {
//		studentrepo.deleteById(id);
//		
//	}

      @GetMapping("/list")
    public  int listuser() {
    	//find and return number of elements in database for user idnumber
	     List<user> data=userrepo.findAll(); 
	     int num=data.size();
    	return num;
    }	
      
      
      @PostMapping("/createblog")
  	public void createblog(@RequestBody blog blog) {
  		
  		blogrepo.insert(blog);
  	}
      
      @PostMapping("/checklogin")
      public void checklogin(@RequestBody login login) {
    	 
    	        String mail=login.getMail();
    	        String pw=login.getPw();
//    		System.out.println(	mail);
//    		System.out.println(	pw);
    	    	String value="incial";
    		List<user> data=userrepo.findAll();
    		for(int i=0;i<data.size();i++){
    			user a=data.get(i);
    			boolean b=Objects.equals(a.getEmail(),mail);
    			boolean c=Objects.equals(a.getPw(),pw);
    			boolean e=true;
    			if(b==e && c==e) {value="true";}
    			else {value="false";}
//    			if(a.getEmail()==mail) {
//    				if(a.getPw()==pw) {
//    					value="passed";
//    				}
//    				else {value="failed";}
//    			}
//    			else {value="failed";}
    			
//    		    System.out.println(a.getEmail());
//    		    System.out.println(a.getPw());
    			
    		} 
    		System.out.println(value);
//    		return value;
//    		
    	}
      
//      @GetMapping("/value")
//      public  String sendvalue() {
//      	//find and return number of elements in database for user idnumber
//  	    System.out.println(value);
//      	return value;
//      }	
      
      
      
      
      
      
      
      

}
