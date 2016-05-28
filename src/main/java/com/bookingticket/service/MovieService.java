package com.bookingticket.service;

import java.util.List;

import com.bookingticket.model.*;

public interface MovieService {

	List<Movie> getMovieList();
	
	Movie getMovie(String movieCode);
}
