package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Option {
    @RequestMapping("/option")
    String option() {
        return "option";
    }
}
