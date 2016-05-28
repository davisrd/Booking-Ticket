package com.bookingticket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/***********************************************************************
 * Module:  Seat.java
 * Author:  Faris
 * Purpose: Defines the Class Seat
 ***********************************************************************/

@Entity
@Table(name = "seat")
public class Seat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int seatId;

	@Column(name = "seat_number", unique = true, nullable = false)
	private String seatNumber;
   
	public Seat(){
		this.seatId = 0;
	}

	public Seat(String seatNumber) {
		this.seatNumber = seatNumber;
	}
	
	public int getSeatId() {
		return seatId;
	}
	
	public void setSeatId(int seatId) {
		this.seatId = seatId;
	}
	
	public String getSeatNumber() {
		return seatNumber;
	}
	
	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}
	   
}