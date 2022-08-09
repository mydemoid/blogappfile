package project.mozanta;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "blog")
public class blog {
	
	@Id
    private String id;
   
    private String heading;
    
    private String time;
    
   

	public blog(String id, String heading, String time, String content) {
		super();
		this.id = id;
		this.heading = heading;
		this.time = time;
		this.content = content;
	}

	public blog() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getHeading() {
		return heading;
	}

	public void setHeading(String heading) {
		this.heading = heading;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	private String content;
    

}
