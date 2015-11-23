 import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

var body = document.getElementsByTagName("body")[0];

export default class Draggable extends Component{
	constructor(){
		super();
		this.style={
			"position": "absolute",
			"width": "300px",
			"backgroundColor": "pink",
			"left": this.nextPosition.x
		}
		this.handleClick = this.handleClick.bind(this);
	}
	render(){
		var draggableClone =
		React.cloneElement(React.createElement("div", {
			key: this.props.id,
			onClick: this.handleClick,
			style: this.style,
			onMouseUp: this.handleMouseUp,
			"data-id": this.props.id
		}, this.props.children));
			return (
				<div>
					{draggableClone}
				</div>
		);
	}
	setMousePosition(ev){
		this.nextPosition.x = ev.clientX;
		this.nextPosition.y = ev.clientY;
	}

	handleClick(ev){
		body.addEventListener("mousemove", this.setMousePosition.bind(this), false);
		this.props.handleClick(ev);
	}

	handleMouseUp(ev){
		// body.removeEventListener("mousemove", this.setMousePosition(), false);
	}
};

Draggable.prototype.nextPosition = {x: 0, y: 0};
Draggable.prototype.originPosition = {x: 0, y: 0};
