import React, { Component } from 'react';
import {ArticleLeft, ArticleRight} from '../components/Components';
import './Partners.css';

class Partners extends Component{
    constructor(){
        super();
        this.state = {
            universities:[],
            status: 0
        }
    }
    
    componentDidMount() {
        fetch('https://syst-api.azurewebsites.net/universities')
        .then(response => response.json())
        .then(json => {
            json.forEach((universities)=>{
                if(universities.name !== ("IT University of Copenhagen")){
                    this.setState(prevState => ({
                            universities: [...prevState.universities, universities]
                    }));
                }
            })
        })
        .then(()=> this.setState({status: 0}))
        .catch(error => {
            console.log(error);
            this.setState({status: -1})
        });
    }
    
render() {
    if(this.state.status < 0){
        return <ArticleRight header="Could not connect to server" />
    }
    
    return (
        <div>
            {
                this.state.universities.map(function(uni,index){
                if(index % 2 === 0){
                    return(
                        <ArticleRight linkHeader={uni.name} link={uni.web_pages} key={index} />
                    )
                } else {
                    return(
                        <ArticleLeft linkHeader={uni.name} link={uni.web_pages} key={index} />
                    )
                }
                
            })
            }
        </div>
    );
  }
}

export default Partners;