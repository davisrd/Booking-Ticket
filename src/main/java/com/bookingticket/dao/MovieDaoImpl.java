package com.bookingticket.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;

import com.bookingticket.model.*;


@Repository("MovieDao")
public class MovieDaoImpl extends AbstractDao<Integer, Movie> implements MovieDao{

	@SuppressWarnings("unchecked")
	public List<Movie> getMovieList()
	{
		Criteria criteria = createEntityCriteria();
		return (List<Movie>) criteria.list();
	}
	
	public Movie getMovie(String movieCode)
	{
		return getByKey(movieCode);
	}
}
