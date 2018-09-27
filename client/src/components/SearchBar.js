import React, { Component } from 'react';
import axios from 'axios';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state={
            year:"year",
            genre:"cate_name",
            title:"title",
            search_val:'',
            selectedValue:'',
            
        }
        this.updateVal = this.updateVal.bind(this);
    }

    // updateVal(event){
        
    // }
    setValue(event){
        this.setState({
            selectedValue:event.target.value    
        })
    }

    updateVal(event){
        //console.log('props', this.props);
        event.preventDefault();
        this.setState({
            search_val:event.target.value
        },()=>{
        axios.get('http://127.0.0.1:8000/api/searchmovies', {
            params: {
            selectedValue:this.state.selectedValue,
            search_val1:this.state.search_val
            }
        })
        .then((response) => {
            //console.log('props 2', this.props);
            this.props.updateList(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        }); 
    })




    }

    

    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <select onChange={(event) => {this.setValue(event)}} className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                            <option selected>Search By</option>
                            <option value={this.state.year}>Year</option>
                            <option value={this.state.genre}>Genre</option>
                            <option value={this.state.title}>Title</option>
                        </select>
                        
                    </div>
                    <input type="text" onChange={(event)=> this.updateVal(event)} value={this.state.search_val} className="form-control" aria-label="Text input with dropdown button" />
                </div>
            </div>
        );
    }
}