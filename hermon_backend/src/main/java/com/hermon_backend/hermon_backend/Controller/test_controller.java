package com.hermon_backend.hermon_backend.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/api/health")

public class test_controller {
    @GetMapping

    public String Health(){
        return ("backend is running fine");
    };


}
