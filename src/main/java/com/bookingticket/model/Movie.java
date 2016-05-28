package com.bookingticket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/***********************************************************************
 * Module:  Movie.java
 * Author:  Faris
 * Purpose: Defines the Class Movie
 ***********************************************************************/

@Entity
@Table(name = "movie")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int movieId;

	@Column(name = "movie_title", nullable = false)
	private String movieTitle;

	@Column(name = "movie_year")
	private String movieYear;

	@Column(name = "movie_director")
	private String movieDirector;
   
	public Movie(){
		this.movieId = 0;
	}

	public Movie(String movieTitle, String movieYear, String movieDirector) {
		this.movieTitle = movieTitle;
		this.movieYear = movieYear;
		this.movieDirector = movieDirector;
	}
	
	public int getMovieId() {
		return movieId;
	}
	
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}
	
	public String getMovieTitle() {
		return movieTitle;
	}
	
	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}
	
	public String getMovieYear() {
		return movieYear;
	}
	
	public void setMovieYear(String movieYear) {
		this.movieYear = movieYear;
	}
	
	public String getMovieDirector() {
		return movieDirector;
	}
	
	public void setMovieDirector(String movieDirector) {
		this.movieDirector = movieDirector;
	}   

}