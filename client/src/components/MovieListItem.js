import React, { Component } from 'react';
// import StarRatingComponent from 'react-star-rating-component';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import Rating from 'react-rating';
import axios from 'axios';
import _ from 'lodash';

export default class MovieListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            movie_list:[],
            selectedMovie:[]
        }
    }


    onDelete(category_id){
    axios.delete('http://127.0.0.1:8000/api/getmovies/delete/'+category_id)
    .then((response)=>{

        })
    }

    updaterate(event,id){
        //console.log(event);
        const val = event
        axios.put('http://127.0.0.1:8000/api/getrates',{
            params: {
                movie_id:id,
                rateVal :event
            }
        })
        .then(response => {
            this.setState({

            })
        });

    }

    render() {
        
        return (
        <div> 
            <ul className="list-group">            
                {

                    this.props.movie_list1.map((movie,i)=>{
                    return(
                        <li className="list1 list-group-item bg-light text-dark">
                            {movie.title} {movie.year} film.. This is a {movie.desc}  IDMB Rating : {_.round(movie.rate,2)}  
                            <br/>
                            <a href="" className="btn btn-primary mt-4" >View</a>
                            <a href="" className="btn btn-danger mt-4" onClick={this.onDelete.bind(this,movie.id)}> Delete</a>
                            <Link className="btn btn-success mt-4" to={`/getmovies/edit/${movie.id}`}>Edit</Link>
                            
                            <Rating  className="rate" initialRating={movie.rate} fractions={1} onClick={(event)=>{this.updaterate(event, movie.id)}}/>
                        </li>
                        )
                    })
                        
                } 
            </ul>
        </div>
        );
    }
}