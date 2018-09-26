import React, { Component } from 'react';
import axios from 'axios';

export default class AddMovie extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            desc:'',
            year:'',
            genre:'',
            categories:[],
              
        };
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/getCategory')
        .then(response => {
            this.setState({
                categories:response.data
            })
        });
    }

    settitle(event){
        this.setState({
           title: event.target.value,
           
        });
    }
    setdesc(event){
        this.setState({
           desc: event.target.value
        });
    }
    setyear(event){
        this.setState({
           year: event.target.value
        });
    }
    setgenre(event){
        this.setState({
           genre: event.target.value
        });
    }
    // setimage(){
    //     this.setState({
    //        image: event.target.value
    //     });
    // }

    storedata(event){
        console.log('printing state',this.state);
        event.preventDefault();    
        const movie_details={
            title: this.state.title,
            desc: this.state.desc,
            year:this.state.year,
            genre:this.state.genre

        }

        console.log('data', movie_details);

        axios.post('http://127.0.0.1:8000/api/moviestore', movie_details)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            console.log("123123");
        });
    }


 
       setgenre(event){
           console.log('selected event',)
           this.setState({
               genre:event.target.value,
           });
       }


    render() {
        return (
            <div>
            <form method="post" onSubmit={this.storedata.bind(this)}>
            
            <div className="form-group">
                <label >Title:</label>
                <input value={this.state.title} onChange={(event) => this.settitle(event)} type="text" className="form-control" id="title" />
            </div>
            <div className="form-group">
                <label >Description:</label>
                <input value={this.state.desc} onChange={(event) => this.setdesc(event)} type="text" className="form-control" id="description" />
            </div>
            <div className="form-group">
                <label >Year:</label>
                <input value={this.state.year} onChange={(event) => this.setyear(event)} type="text" className="form-control" id="year" />
            </div>

            
            <label className="mr-sm-2" >Genre</label>
            <select  onChange={(event)=>{this.setgenre(event)}}   className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
                
                {
                    this.state.categories.map((category,i) => {
                        return(
                            <option key={i} value={category.id}>{category.cate_name}</option>        
                        )
                    })
                }

            </select>
            <br/>
  
            {/* <div className="form-group">
                <label >Upload image:</label>
                <input value={this.state.image} type="file" className="form-control" id="image" />
            </div> */}
            <br/>
                <button  type="submit" className="btn btn-primary">Submit</button>
            </form>

            </div>
        );
    }
}