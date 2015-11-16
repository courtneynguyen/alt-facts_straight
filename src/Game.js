import React, {Component} from 'react';
import DraggableStore from './stores/DraggableStore';
import List from './components/List';

export default class Game extends Component{
   constructor(){
      super();
      this.columns = [];
		this.bodyStyle={'fontFamily':'sans-serif'};
   }
   render(){
      return(
         <div className='Game' style={this.bodyStyle}>
            <h1>{this.props.title}</h1>
            {this.renderColumns()}
         </div>
      );
   }
   renderColumns(){
      this.props.columns.forEach((column, index) =>{
			var id = this.props.key +"."+ index;
         this.columns.push(<List key={id} id={index} choices={this.props.choices} {...column} />);
      });
      return this.columns;
   }
}
