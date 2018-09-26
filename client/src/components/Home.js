import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }
    
    updateMovies(result){
        this.setState({
            movies:result
        });        
    };


    render() {
        return (
            <div>
               <SearchBar updateList={(result)=>{this.updateMovies(result)}}/> 
               <MovieList movie_list1={this.state.movies} />
               
            </div>
        );
    }
}