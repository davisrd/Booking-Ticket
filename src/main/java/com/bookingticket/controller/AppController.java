package com.bookingticket.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriComponentsBuilder;

import com.bookingticket.model.*;
import com.bookingticket.service.*;

@Controller
@RequestMapping("/")
public class AppController {
	@Autowired
	MovieService movieService;
	
	
	@Autowired
	MessageSource messageSource;

	@RequestMapping(method = RequestMethod.GET)
	public String getIndexPage() {
		return "redirect:/app/index.html";
	}
	
	//-------------------Retrieve All Movie--------------------------------------------------------
    
    @RequestMapping(value = "/movie", method = RequestMethod.GET)
    public ResponseEntity<List<Movie>> getAllMovie() {
        List<Movie> movies = movieService.getMovieList();
        if(movies.isEmpty()){
            return new ResponseEntity<List<Movie>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<Movie>>(movies, HttpStatus.OK);
    }
}

    

