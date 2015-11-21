import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';
import DraggableStore from '../stores/DraggableStore';
import DraggableStyles from '../styles/Draggable';

export default class Draggable extends Component{
	render(){
		var draggableComponents = [];
		draggableComponents = this.props.draggable.map((draggable, i) => {
			if(draggable.clicking){
				draggable.style = DraggableStyles.Clicking;
			}
			else{
				draggable.style = DraggableStyles.Normal;
			}
			return(
				<div key={i} data-id={draggable.id}
				onMouseDownCapture={this.handleMouseDown.bind(this)}
				// onMouseUpCapture={this.handleMouseUp.bind(this)}
				// onDrag={this.handleDrag.bind(this)}
				style={draggable.style}>
				{this.props.children} {draggable.id} clicking: {draggable.clicking + ""}
				</div>
			);
		});
		return (
			<div className="Draggable">
			{draggableComponents}
			</div>
		);
	}

	handleMouseDown(ev){
		DraggableActions.clicked(Number(ev.target.getAttribute('data-id')));
	}

	handleMouseUp(ev){
		DraggableActions.nonClicked(Number(ev.target.getAttribute('data-id')));
	}

	handleDrag(ev){
		DraggableActions.drag(Number(ev.target.getAttribute('data-id')));
	}
}
