import React, {Component} from 'react';

export default class ListItem extends Component {
   render(){
      return (
         <li className="ListItem" style={this.props.style}>
            <h2>{this.props.description}</h2>
         </li>
      );
   }
}
