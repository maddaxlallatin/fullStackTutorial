package io.github.tarasCookbook.tarasCookbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TarasCookbookApplication {

	public static void main(String[] args) {
		SpringApplication.run(TarasCookbookApplication.class, args);
	}

}
