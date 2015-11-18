import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';
import DraggableStore from '../stores/DraggableStore';

export default class Draggable extends Component{
	render(){
		var draggableComponents = [];
		draggableComponents = this.props.draggable.map((draggable, i) => {
			if(draggable.clicking){
				draggable.style = {backgroundColor: "pink"};
			}
			else{
				draggable.style = {backgroundColor: "gray"};
			}
			return(
				<div key={i} data-id={draggable.id}
				onMouseDownCapture={this.handleMouseDown.bind(this)}
				onMouseUpCapture={this.handleMouseUp.bind(this)}
				style={draggable.style}>
				{this.props.children} {draggable.id} clicking: {draggable.clicking + ""}
				</div>
			);
		});
		return (
			<div className="WelcomeTOHell">
			{draggableComponents}
			</div>
		);
	}

	handleMouseDown(ev){
		console.log('mouse down', Number(ev.target.getAttribute('data-id')));
		DraggableActions.clicked(Number(ev.target.getAttribute('data-id')));
	}

	handleMouseUp(ev){
		console.log('mouse up', Number(ev.target.getAttribute('data-id')));
		DraggableActions.nonClicked(Number(ev.target.getAttribute('data-id')));
	}
}
