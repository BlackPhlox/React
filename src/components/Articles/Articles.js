import React, { Component } from 'react';
import './Articles.css';

//Skabelse af artikler, kan indsættes 
//indhold før og efter artikelsen tekst
class ArticleRight extends Component{
    render(){
        return(
            <div>
            <div className="spacer" />
                <article className="content-box-right">
                    <div className="inner-box-right">
                        <a href={this.props.link}>{this.props.linkHeader}</a>
                        <h1>{this.props.header}</h1>
                            <p>
                              {this.props.body}
                            </p>
                            {this.props.after}
                    </div>
                    {this.props.after2}
                </article>
            </div>
        )
    }
}

class ArticleLeft extends Component{
    render(){
        return(
            <div>
            <div className="spacer" />
                <article className="content-box-left">
                {this.props.before}
                    <div className="inner-box-left">
                        <a href={this.props.link}>{this.props.linkHeader}</a>
                        <h1>{this.props.header}</h1>
                            <p>
                              {this.props.body}
                            </p>
                            {this.props.after}
                    </div>
                </article>
            </div>
        )
    }
}

export {ArticleLeft, ArticleRight};