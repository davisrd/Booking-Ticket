package com.bookingticket.model;
/***********************************************************************
 * Module:  Booking.java
 * Author:  Faris
 * Purpose: Defines the Class Booking
 ***********************************************************************/

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "booking_id")
	private int bookingId;

	@Column(name = "booking_date", nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	private Date bookingDate;
   
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;

	@Column(name = "price", nullable = false)
	private long price;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "booking_seat", joinColumns = { 
			@JoinColumn(name = "booking_id", nullable = false, updatable = false) }, 
			inverseJoinColumns = { @JoinColumn(name = "seat_id", 
					nullable = false, updatable = false) })
	private Set<Seat> seats = new HashSet<Seat>(0);

	@ManyToOne
	@JoinColumn(name = "schedule_id")
	private Schedule schedule;

	public Booking(){
		this.bookingId = 0;
	}

	public Booking(Date bookingDate, Customer customer, long price, Set<Seat> seats, Schedule schedule) {
		this.bookingDate = bookingDate;
		this.customer = customer;
		this.seats = seats;
		this.schedule = schedule;
		this.price = price;
	}
	
	public int getBookingId() {
		return bookingId;
	}
	
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	
	@JsonFormat(pattern="dd-MM-yyyy hh:mm:ss")
	public Date getBookingDate() {
		return bookingDate;
	}
	
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}
	
	public Customer getCustomer() {
		return customer;
	}
	
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	public java.util.Set<Seat> getSeats() {
		return seats;
	}
	
	public void setSeats(java.util.Set<Seat> seats) {
		this.seats = seats;
	}
	
	public Schedule getSchedule() {
		return schedule;
	}
	
	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}	

}