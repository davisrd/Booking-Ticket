package com.bookingticket.model;
/***********************************************************************
 * Module:  Schedule.java
 * Author:  Faris
 * Purpose: Defines the Class Schedule
 ***********************************************************************/

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "schedule")
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int scheduleId;

	@Column(name = "schedule_date", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date scheduleDate;

	@Column(name = "studio_number", nullable = false)
	private int studioNumber;
   
	@ManyToOne
	@JoinColumn(name = "movieId")
	private Movie movie;

	public Schedule(){
		this.scheduleId = 0;
	}

	public Schedule(Date scheduleDate, int studioNumber, Movie movie) {
		this.scheduleDate = scheduleDate;
		this.studioNumber = studioNumber;
		this.movie = movie;
	}
	
	public int getScheduleId() {
		return scheduleId;
	}
	
	public void setScheduleId(int scheduleId) {
		this.scheduleId = scheduleId;
	}
	
	@JsonFormat(pattern="dd-MM-yyyy")
	public Date getScheduleDate() {
		return scheduleDate;
	}
	
	public void setScheduleDate(Date scheduleDate) {
		this.scheduleDate = scheduleDate;
	}
	
	public int getStudioNumber() {
		return studioNumber;
	}
	
	public void setStudioNumber(int studioNumber) {
		this.studioNumber = studioNumber;
	}
	
	public Movie getMovie() {
		return movie;
	}
	
	public void setMovie(Movie movie) {
		this.movie = movie;
	}

}