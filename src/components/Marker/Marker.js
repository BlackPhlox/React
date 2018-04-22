import React, { Component } from 'react';
export class Marker extends Component{
    render(){
        return(
            <svg width="20" height="30" viewBox="10 0 100 100">
                <path d="M0 0 L100 50 L0 100 Z">
                </path>
            </svg>
        )
    }
}
