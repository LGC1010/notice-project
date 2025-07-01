package com.example.board;

import com.example.board.domain.Post;
import com.example.board.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BoardApplication {

    public static void main(String[] args) {
        SpringApplication.run(BoardApplication.class, args);
    }

    @Bean
    public CommandLineRunner test(PostRepository postRepository) {
        return args -> {
            postRepository.save(new Post("테스트 제목", "이것은 내용입니다", "홍길동"));
        };
    }
}
