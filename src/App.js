import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

//style
import './App.css';

//components
import Header from './components/Header';
import Content from './components/Content';
import Search from './components/templates/Search';
import List from './components/Category';

export default class App extends Component {

  //pruebas para el servidor de api de themoviedb
  datosApi = {
    api : "https://api.themoviedb.org/3/movie/550?api_key=609c7ac502ba3219a3a8df32fcb6b6df",
    token : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDljN2FjNTAyYmEzMjE5YTNhOGRmMzJmY2I2YjZkZiIsInN1YiI6IjViNTdlYzcyMGUwYTI2NzNjYTA0NWQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lR-FaMVEWzAlv3T9cHVJyBJ-yyfyRjWyQOUGktIluk0",
    claveApi : "609c7ac502ba3219a3a8df32fcb6b6df"
  }

  state = {
        searchTerm: "",
        searchUrl:  ""
    }


   handleKeyUp = ({key}) => {
        if(key === 'Enter' && this.state.searchTerm !== ""){
            let  searchUrl =  `search/multi?query=${this.state.searchTerm}&api_key=609c7ac502ba3219a3a8df32fcb6b6df`;
            this.setState({
                searchUrl
            })
        }
    }

     handleChange = (event) => {
        const searchTerm = event.target.value;
        this.setState({
            searchTerm
        });
    }
     constructor (props){
        super(props);
    }

  render() {
    return (
                <div className="App">
                    <Header />
                    <div id="search" className="Search">
                        <Search
                            onChange={this.handleChange}
                            onKeyUp={this.handleKeyUp}
                            value={this.state.searchTerm}
                        />
                    </div>
                    
                    <List searchUrl={this.state.searchUrl}/>
                </div>
    );
  }

}
