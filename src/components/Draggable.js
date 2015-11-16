import React, {Component} from 'react';
import AppDispatcher from '../Dispatcher'
import DraggableAction from '../actions/DraggableAction';
import DraggableStore from '../stores/DraggableStore';

export default class Draggable extends Component{
	constructor(){
		super();
		this.style = DraggableStore.getStyle();
	}

	render(){
		return (
			<div onClick={this.handleClick} style={this.style}>
			{this.props.children}
			</div>
		);
	}

	handleClick(event){
		DraggableAction.clickToDrag('clickToDrag');
	}

}
