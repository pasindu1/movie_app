import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


export default class Home extends Component {
    render() {
        return (
            <div>
               <SearchBar/> 
               <MovieList/>
            </div>
        );
    }
}