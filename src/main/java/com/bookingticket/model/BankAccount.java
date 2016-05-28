package com.bookingticket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/***********************************************************************
 * Module:  BankAccount.java
 * Author:  Faris
 * Purpose: Defines the Class BankAccount
 ***********************************************************************/

@Entity
@Table(name="bank_account")
public class BankAccount {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "account_id")
	private int accountId;
	
	@Column(name = "account_balance", nullable = false)
	private long accountBalance;
	
	public BankAccount(){
		this.accountId = 0;
	}

	public BankAccount(long accountBalance) {	
		this.accountBalance = accountBalance;
	}

	public int getAccountId() {
		return accountId;
	}
	
	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}
	
	public long getAccountBalance() {
		return accountBalance;
	}
	
	public void setAccountBalance(long accountBalance) {
		this.accountBalance = accountBalance;
	}   
	
}