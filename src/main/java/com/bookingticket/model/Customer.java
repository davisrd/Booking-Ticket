package com.bookingticket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/***********************************************************************
 * Module:  Customer.java
 * Author:  Faris
 * Purpose: Defines the Class Customer
 ***********************************************************************/

@Entity
@Table(name="customer")
public class Customer {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customer_id")
	private int customerId;
	
	@Column(name = "customer_name", nullable = false)
	private String customerName;

	@Column(name = "customer_email", nullable = false)
	private String customerEmail;

	@Column(name = "customer_password", nullable = false)
	private String customerPassword;
   
	@ManyToOne
	@JoinColumn(name = "account_id")
	private BankAccount account;
   
	/*Default Constructor*/
	public Customer(){
		this.customerId = 0;
	}
	
	public Customer(String customerName, String customerEmail, String customerPassword, BankAccount account) {
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerPassword = customerPassword;
		this.account = account;
	}
	
	public int getCustomerId() {
		return customerId;
	}
	
	public void setCustomerId(int customerId) {
	   this.customerId = customerId;
	}
	
	public String getCustomerName() {
	   return customerName;
	}
	
	public void setCustomerName(String customerName) {
	   this.customerName = customerName;
	}
	
	public String getCustomerEmail() {
	   return customerEmail;
	}
	
	public void setCustomerEmail(String customerEmail) {
	   this.customerEmail = customerEmail;
	}
	
	public String getCustomerPassword() {
	   return customerPassword;
	}
	
	public void setCustomerPassword(String customerPassword) {
	   this.customerPassword = customerPassword;
	}
	
	public BankAccount getAccount() {
	   return account;
	}
	
	public void setAccount(BankAccount account) {
	   this.account = account;
	}
      
}