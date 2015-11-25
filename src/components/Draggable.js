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
		this.handleDrag = this.handleDrag.bind(this);
	}
	render(){
		let style = {
			"left": this.nextPosition.x,
			"top": this.nextPosition.y
		};
		var draggableClone = React.Children.map((child) => {
			return (React.cloneElement(child, {
				key: this.props.id,
				onClick: this.handleClick,
				onDrag: this.handleDrag,
				style: Object.assign(this.style, style),
				onMouseUp: this.handleMouseUp,
				"data-id": this.props.id,
			}, this.props.children));
		});

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

	handleDrag(ev){
		console.log('dragging', ev);
		this.props.handleDrag({
			id: Number(ev.target.getAttribute('data-id')),
			nextPosition: this.nextPosition
		});
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
