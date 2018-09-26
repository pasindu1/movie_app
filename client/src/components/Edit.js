import React, { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            title:'',
            desc:'',
            year:'',
            genre:0,
            categories:[],
            moviedetail:[]
              
        };
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

        componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/getmovies/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                title:response.data.title,
                desc:response.data.desc,
                year:response.data.year,
                
                });
            });

        axios.get('http://127.0.0.1:8000/api/getCategory')
        .then(response => {
            this.setState({
                categories:response.data
            })
        });
        }

    storedata(event){
        event.preventDefault();
        const moviedetails = {
            title: this.state.title,
            desc: this.state.desc,
            year:this.state.year,
            genre:this.state.genre
        }

        axios.put('http://127.0.0.1:8000/api/getmovies/update/'+this.props.match.params.id,moviedetails)
        .then(response=>{
            
        })
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
                <option value="Choose the genre" >Chose the Genre</option>
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
            <button  type="submit" className="btn btn-primary">Update</button>
            </form>

            </div>
        );

    }
}