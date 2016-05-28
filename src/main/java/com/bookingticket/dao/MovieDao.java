package com.bookingticket.dao;

import java.util.List;

import com.bookingticket.model.Movie;

public interface MovieDao {

	List<Movie> getMovieList();
	
	Movie getMovie(String movieCode);
}
