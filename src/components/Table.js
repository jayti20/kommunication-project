
import React, { Component } from 'react'



class Table extends Component {
   
    render() {
        console.log(this.props)
        return (
          
         <table>
              {this.props.value.map((item,index)=><td key={index}>{this.props.value}</td>)}
         </table>
           
        )
    }
}

export default Table


