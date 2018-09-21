import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state={
            year:"year",
            genre:"genre",
            title:"title",
            search_val:'',
            selectedValue:''
        }
    }

    // updateVal(event){
        
    // }
    setValue(event){
        this.setState({
            selectedValue:event.target.value,
            
        })
    }

    updateVal(event){
        this.setState({
            search_val:event.target.value
        })          

        axios.get(`http://127.0.0.1:8000/api/searchmovies/${this.state.search_val}`)
        .then(response=>{
            
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