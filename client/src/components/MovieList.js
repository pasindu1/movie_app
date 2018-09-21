import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';



export default class MovieList extends Component {
    
    constructor(){
        super();
        this.state={
            movie_list:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/getmovies')
        .then(response => {
            this.setState({
                movie_list:response.data
            })
        });
    }

    onDelete(category_id){
        axios.delete('http://127.0.0.1:8000/api/getmovies/delete/'+category_id)
        .then((response)=>{

        })
    }

    render() {
        return (
            <div> <ul className="list-group">
            {
                this.state.movie_list.map((movie)=>{
                    return(
                        <li className="list-group-item ">
                    {movie.title} {movie.year} film..    Rating {movie.rate}  
                    <br/>
                    <a href="" >View |</a>
                    <a href="" onClick={this.onDelete.bind(this,movie.id)}> Delete |</a>
                    <Link to={`/getmovies/edit/${movie.id}`}> Edit</Link>
                </li>
                    )
                })
                
            } 
                </ul>
            </div>
        );
    }
}