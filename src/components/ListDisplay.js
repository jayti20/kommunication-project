import React, { Component } from 'react'
import axios from 'axios'
import Table from './Table'
import UserSearched from './UserSearched'

export class ListDisplay extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             listOfData:[],
             typedName:"",
             
        }
    }
    searchName=event=>{
        this.setState({
            typedName:event.target.value,
           
        })
    }
  componentDidMount()
    {
        axios.get('https://reqres.in/api/users?page=2').then(res=>{
          console.log(res)
          this.setState({
              listOfData:res.data.data,
              showData:'true'
          })
        }).catch(err=>{
            console.log(err)
        })
    }
    render() {
        
           
        return (
            <div>
            <input type="text"  value={this.state.typedName} onChange={this.searchName}  placeholder="Search">
            </input>
               <div>List of users</div>
             
                {this.state.listOfData?<>
                    {this.state.listOfData.map((user,index)=><div key={user.id}>{user.first_name} email-id:{user.email}</div>
                   )}
                    </>:null}
               
                


                {this.state.listOfData && this.state.typedName?
                        (  <div>
                        {this.state.listOfData.map((item,index)=>{
                           
                       if(item.first_name.toLowerCase()===this.state.typedName.toLowerCase())
                       {
                        const arr={ele:[]}
                        arr.ele.push(item)
                        return  <UserSearched key={item.codes} value={arr.ele}></UserSearched> 
                       }
                         
                      
                         
                    })
                }
                </div>)
                    :null}
               </div>
        )
    }
}

export default ListDisplay
