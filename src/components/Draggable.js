import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';

export default class Draggable extends Component{
	render(){
		return (
			<div onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)}>
			{this.props.children}
			</div>
		);
	}

	handleMouseDown(event){
		console.log('mouse down');
		DraggableActions.clicked();
		console.log(this);
	}

	handleMouseUp(syntheticMouseEvent){
		console.log('mouse up');
		DraggableActions.nonClicked();
		console.log(this);
	}
}
