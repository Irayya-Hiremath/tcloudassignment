
import * as React from "react";
import { Link } from "react-router-dom";
import "./UserList.css"

import FlatList from 'flatlist-react';

class UserList extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        users:[],
        sortBy: 'first_name'
      }
      
    }
    
  
    componentDidMount() 
    {
      fetch('https://reqres.in/api/users').then((resp)=>{
        resp.json().then((result)=>{
          console.warn(result) 
          this.setState({users:result.data}) 
        })
      })
      // axios.get('https://reqres.in/api/user').then((result) => {
      //   console.log('API Response', result.data.data);
      //   this.setState({  
      //     users: result.data.data
      //   })
      // }).catch((error) => {
      //     console.log('API Error', error);
      // })
    }

    renderPerson = (person, idx) => {
      return (
        //
        <div className="display" key={person.id}>        
        <Link to={{pathname: '/user-details',state: {
          id: person.id
        }}}>
          <img className="profile-pic" key={person.avatar} alt={person.first_name} src={person.avatar}  />
        </Link>
          <p><strong> {person.first_name} {person.last_name} </strong></p>          
          </div>
      );
    }
    
    render(){
      const {users, sortBy} = this.state;
      return (
        <div className="App">
          <h1 className="heading">Users Profile</h1>
          <div className="flex">
            <select  onChange={(value) => {
              this.setState({
                sortBy: value.target.value
              })
              console.log('Value', value.target.value);
            }}>
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
            </select>
          <FlatList
          list={users}  
          renderItem={this.renderPerson}
          renderWhenEmpty={() => <div>List is empty!</div>}
          sortBy={sortBy}
          />
          </div>
        </div>
      );
    }
  }
  
  export default UserList;