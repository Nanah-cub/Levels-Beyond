package com.notetaker;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Arrays;

@SpringBootApplication
@EnableJpaRepositories
public class NoteTakerApplication {

    public static void main(String[] args) {
        SpringApplication.run(NoteTakerApplication.class, args);
    }



}
