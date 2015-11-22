import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

export default class Draggable extends Component{
	render(){
			return (
			<div key={this.props.draggable.id} data-id={this.props.draggable.id} onClick={this.props.handleClick}>
				{this.props.children} {this.props.draggable.id} clicking: false
			</div>
		);
	}

	handleClick(){
		this.props.handleClick();
	}
}
