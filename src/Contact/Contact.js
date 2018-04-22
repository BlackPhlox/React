import React, { Component } from 'react';
import validateEmail from './validateEmail.js';
import './Contact.css';

class Contact extends Component{
    render() {
        return(
        <div>
            <div className="spacer" />
            <ContactBox />
            
        </div>
        )
    }
}

class ContactBox extends Component{
    constructor(props) {
      super(props);
      this.state = {
            name: '',
            email: '',
            msg: '',
            btn: false
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(e){
        const target = e.target;
        const elment_name = target.name;
        const value = target.value;
        
        this.setState({
            [elment_name]: value
        });
        
        if(
            this.state.name.length > 0 &&
            validateEmail(this.state.email) &&
            this.state.msg.length > 0
        )
        {
            this.setState({btn: true}); 
        } else {
            this.setState({btn: false});
        }
    }
    
    handleSubmit(e){    
        if(this.state.btn){
            alert(
                "Hi " +
                 this.state.name +
                ", thank you for your message. You wrote: “" +
                this.state.msg + 
                "“. We will get back to you as soon as possible via your e-mail: " +    this.state.email
            );
            this.setState({name: "",email:"",msg:"",btn:false});
        }    
    }
    
    render(){
        return(
            <div className="sub-form">
              <h1>Contact us!</h1>
              <div>
                <div>
                  <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange}/>
                </div>
                  <input name="email" placeholder="E-mail" value={this.state.email} onChange={this.handleInputChange}/>
              </div>
                  <textarea name="msg" placeholder="Write you questions here."  value={this.state.msg} onChange={this.handleInputChange}/>
              <div>
                <button disabled={!this.state.btn} onClick={this.handleSubmit}>Send</button> 
              </div>
            </div>
        )
    }
}

export default Contact;