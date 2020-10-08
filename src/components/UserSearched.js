import React, { Component } from 'react'

class UserSearched extends Component {
   
    render() {
        console.log(this.props)
        return (
            
            <span className="pr-2 ">
              {this.props.value.map((item,index)=><span key={index}>{item.first_name} {item.email}</span>)}
            </span>
           
        )
    }
}

export default UserSearched
