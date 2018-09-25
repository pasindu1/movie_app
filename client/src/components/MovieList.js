import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
  



export default class MovieList extends Component {
    
    constructor(props){
        super(props);
        //console.log(props.movie_list1);
        this.state={
            movie_list:[],
            rating: 1
            
        }
       
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/getmovies')
        .then(response => {

            this.setState({
                movie_list:response.data
            })
        });
    }
    componentWillReceiveProps(){
        this.setState({
            movie_list:this.props.movie_list1
        })
    }
    onDelete(category_id){
        axios.delete('http://127.0.0.1:8000/api/getmovies/delete/'+category_id)
        .then((response)=>{

        })
    }

    render() {
        const { rating } = this.state;
       return (
        <div> <ul className="list-group">            
        {

            this.state.movie_list.map((movie)=>{
            return(
                <li className="list-group-item ">
                    {movie.title} {movie.year} film..    Rating {movie.rate}  
                    <br/>
                    <a href="" className="btn btn-primary" >View |</a>
                    <a href="" className="btn btn-danger" onClick={this.onDelete.bind(this,movie.id)}> Delete |</a>
                    <Link className="btn btn-success" to={`/getmovies/edit/${movie.id}`}> Edit</Link>
                    
                    <StarRatingComponent className="rate"
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                    />
                </li>
                )
            })
                
        } 
                </ul>
            </div>
        );

       
    }
}