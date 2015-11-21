import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';
import DraggableStore from '../stores/DraggableStore';
import DraggableStyles from '../styles/Draggable';

export default class Draggable extends Component{
	render(){
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


}
