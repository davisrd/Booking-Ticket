package com.bookingticket.service;

import java.util.List;

import com.bookingticket.dao.*;
import com.bookingticket.model.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("MovieService")
@Transactional
public class MovieServiceImpl implements MovieService{
	
	@Autowired
	private MovieDao roomDao;
	
	public List<Movie> getMovieList()
	{
		return roomDao.getMovieList();
	}
	
	public Movie getMovie(String movieCode)
	{
		return roomDao.getMovie(movieCode);
	}
}
