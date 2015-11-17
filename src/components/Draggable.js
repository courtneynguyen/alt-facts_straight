import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DraggableActions from '../actions/DraggableActions';

export default class Draggable extends Component{
	render(){
		return (
			<div onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} style={this.props.draggable.style}>
			{this.props.children}
			</div>
		);
	}

	handleMouseDown(event){
		DraggableActions.clicked();
	}

	handleMouseUp(syntheticMouseEvent){
		DraggableActions.nonClicked();
	}
}
