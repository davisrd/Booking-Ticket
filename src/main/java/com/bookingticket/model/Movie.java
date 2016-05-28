package com.bookingticket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="MOVIE")
public class Movie {
	
	@Id
	@Column (name = "MOVIE_CODE")
	@Size (min = 9 , max = 9)
	private String movieCode;
	
	@Column (name = "MOVIE_NAME")
	@Size (min = 10 , max = 50)
	private String movieName;
	
	

	public Movie() {
		
	}



	public Movie(String movieCode, String movieName) {
		super();
		this.movieCode = movieCode;
		this.movieName = movieName;
	}



	public String getMovieCode() {
		return movieCode;
	}



	public void setMovieCode(String movieCode) {
		this.movieCode = movieCode;
	}



	public String getMovieName() {
		return movieName;
	}



	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	
	
	
	
	

}
