package com.hermon_backend_1.hermon_backend_1.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")

public class healthController {

    @GetMapping

    public String health(){
        return("testing 123");
    }

}
