import React, { Component } from 'react';
import './UserDetailsComponent.css'


class UserDetailsComponent extends Component{
    constructor(props){
        super(props);
        this.state={
          users: {}
        }
    }

    componentDidMount() {

        console.log('User Details Props', this.props);
        const {location} = this.props;

        console.log('Location', location);

        const {state} = location;

        console.log('Location State',state);
        
    fetch('https://reqres.in/api/users/' + state.id).then((resp)=>{
        resp.json().then((result)=>{
          console.log(result) 
          this.setState({users:result.data}) 
        })
      })
    }

    render(){
      const {users} = this.state;
        return(

          <div className="user">
            {console.log('User', users)}

            {users ? <div className="single-user">
                        <p><strong> {users.first_name} {users.last_name} </strong></p>          
                        <img  key={users.avatar} alt={users.avatar} src={users.avatar}  />
                        <p><strong> ID : {users.id} </strong></p>
                        <p><strong> Email : {users.email} </strong></p>          
                      </div>
            : 
            null}
          </div>)
    }
}

export default UserDetailsComponent;