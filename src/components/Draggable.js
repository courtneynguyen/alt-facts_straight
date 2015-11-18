import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DraggableActions from '../actions/DraggableActions';

export default class Draggable extends Component{
	render(){
		return (
			<div onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} style={this.props.draggable.style}>
			{this.props.children}
			</div>
		);
	}

	handleMouseDown(event){
		console.log('mouse down');
		console.log(this);
		DraggableActions.clicked(this.props.id);
	}

	handleMouseUp(syntheticMouseEvent){
		console.log('mouse up');
		console.log(this);
		DraggableActions.nonClicked(this.props.id);
	}
}
