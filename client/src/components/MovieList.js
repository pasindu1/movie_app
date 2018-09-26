import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';

import MovieListItem from './MovieListItem';  



export default class MovieList extends Component {    
    constructor(props){
        super(props);
        //console.log(props.movie_list1);
        this.state={
            movie_list:[],   
        }     
    }


    componentWillReceiveProps(){
        this.setState({
            movie_list:this.props.movie_list1
        },()=>{
            //console.log(this.state.movie_list);
        });
    }


    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/getmovies')
        .then(response => {

            this.setState({
                movie_list:response.data
            })
        });
    }




    render() {
       
       return (
           <MovieListItem movie_list1={this.state.movie_list} />
        );

       
    }
}