import React, {Component} from 'react';
var AltContainer = require('alt/AltContainer');
import DraggableStore from '../stores/DraggableStore';
import Draggable from './Draggable';
import ListItem from './ListItem';


export default class List extends Component{
   constructor(){
      super();
      this.columnStyle = {'padding':'0', 'width':'300px', 'display': 'inline-block', 'float': 'left'};
      this.ulStyle = {'padding': '0'};
      this.listItems = [];
   }
   render(){
      return(
      <div className="Column" style={this.columnStyle}>
         <h2>{this.props.title}</h2>
         <ul style={this.ulStyle}>
            {this.listItems}
         </ul>
      </div>
      );
   }
   componentWillMount(){
      this.createChoices();
   }
   createChoices(){
      let choices = this.props.choices.filter((choice) => {
         return this.props.answers.indexOf(choice.id) > -1;
      });
      choices.forEach((choice, index) => {
			var componentId = index + choice.description;
         this.listItems.push(
				<AltContainer key={componentId} store={DraggableStore}>
					<Draggable key={componentId + "-draggable"}>
						<ListItem key={componentId} {...choice} id={componentId} />
					</Draggable>
				</AltContainer>
			);
      }
      );
   }
}
