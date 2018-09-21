import React, { Component } from 'react';//component is a property in that class
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import Header  from './components/Header';

import Home from'./components/Home';
import AddMovie from './components/AddMovie';
import Edit from './components/Edit';

export default class App extends Component {



    render() {
        return ( 
            
            <Router>  
            <div className="container">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create_movie">Insert New</Link>
                            </li>                         
                            </ul>

                        </div>
                    </nav>
                    {/* <Route exact path="/" component={}/> */}
                     <Route exact path="/create_movie" component={AddMovie}/>
                      
                </div>       
                <Route exact path="/" component={Home}/>
                <Route exact path="/create_new" component={AddMovie}/>
                <Route exact path="/getmovies/edit/:id" component={Edit}/>
            </div> 
            </Router>             
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));

