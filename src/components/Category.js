import React, { Component } from 'react'

//style
import "./css/Category.css"

//content
import Item from "./Item";


export default class Category extends Component {
	state = {
    data: [],
    mounted: false
	}

	loadContent = () => {
    //https://api.themoviedb.org/3/movie/550?api_key=609c7ac502ba3219a3a8df32fcb6b6df
    let searchUrl = "550";
    if(this.props.url !== undefined){
      searchUrl = this.props.url;
    }
    const requestUrl =`https://api.themoviedb.org/3/movie/${searchUrl}?api_key=609c7ac502ba3219a3a8df32fcb6b6df`;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => this.setState({data}))
      .catch(err => console.log("There has been error"))
  }

  componentWillReceiveProps({url}) {
    if(url !== this.props.url && url !== ''){
      this.setState({
        url,
        mounted: true
      }, this.loadContent)   
    }
  }

  componentDidMount(){
    if(this.props.url !== '') {
      this.loadContent()
      this.setState({
        mounted: true
      })
    }
  }

	render() {
	    let titleList = '';
        const results = this.state.data.production_companies;
        if(results){
	        titleList = results.map((title, i) => {
            console.log(title);
                let component = <div key={title.id}></div>
                if(i < 10){
                  let name = (!title.name) ? title.original_title : title.name;
                  const backDrop = `http://image.tmdb.org/t/p/original${title.logo_path}`;
                  component = (
                    <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop}/>
                  )
                }
                return component
              })
        }

		return(
			<div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titleList}
          </div>
        </div>
      </div>
		)
	}
}