import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';

export default class Draggable extends Component{
	constructor(){
		super();
	}

	render(){
		return (
			<div onMouseDown={this.handleMouseDown} onMouseUp={this.handleMouseUp} style={this.props.draggable.style}>
			{this.props.children}
			</div>
		);
	}

	handleMouseDown(event){
		console.log('mouse down');
		DraggableActions.clicked();
	}

	handleMouseUp(syntheticMouseEvent){
		console.log('unclicked?');
		DraggableActions.nonClicked();
	}
}
