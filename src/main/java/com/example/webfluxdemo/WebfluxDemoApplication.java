package com.example.webfluxdemo;

import com.example.webfluxdemo.model.Tweet;
import com.example.webfluxdemo.repository.TweetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

import java.util.Date;

/**
 * Created by arm 06/02/2018
 *
 */

@SpringBootApplication
@Configuration
@EnableReactiveMongoRepositories
public class WebfluxDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebfluxDemoApplication.class, args);
	}

	@Bean
	CommandLineRunner initData(TweetRepository tweetRepository) {
		return (p) -> {
			tweetRepository.deleteAll().block();
			tweetRepository.save(new Tweet("1", "Tweet from Michael Jordan", new Date())).block();
			tweetRepository.save(new Tweet("2", "Tweet from Trump", new Date())).block();
			tweetRepository.save(new Tweet("3", "Tweet from Cristiano Ronaldo", new Date())).block();
			tweetRepository.save(new Tweet("4", "Tweet from Angela Merkel", new Date())).block();
			tweetRepository.save(new Tweet("5", "Tweet from Rajoy", new Date())).block();
			tweetRepository.save(new Tweet("6", "Tweet from Lionel Messi", new Date())).block();
			tweetRepository.save(new Tweet("7", "Tweet from Tom Brady", new Date())).block();
			tweetRepository.save(new Tweet("8", "Tweet from Will Smith", new Date())).block();
		};
	}
}
