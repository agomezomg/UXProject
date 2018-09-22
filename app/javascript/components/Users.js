import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AllUsers extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        users: []
      };
      this.submitUser = this.submitUser.bind(this)
      this.addNewUser = this.addNewUser.bind(this)
    }
    
    submitUser(usernaming,pass,useremail){
      let resp = JSON.stringify({user:{username:usernaming,password:pass,email:useremail}})
      fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: resp,
        }).then((response) => {return response.json()})
        .then((user)=>{
          console.log(user);
          this.addNewUser(user);
        })
    }
  
    addNewUser(user){
      this.setState({
        user: this.state.users.concat(user)
      })
    }
   
    componentDidMount(){
      fetch('/users.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ users: data }) });
    }
  
    render(){
        var users = this.state.users.map((user) => {
         return(
          <div key={user.id}>
           <h1>{user.username}</h1>
           <p>{user.password}</p>
          </div>
         )
        });
        let username ="tufik";
        let pass="banana";
        let email="tufik@gmail.com"
        return(
            <div>
             {users}
            </div>
        )
    }
  }

  
export default AllUsers;