import React, {Component} from 'react';
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';
import LineItem from '../LineItem';

var timer = null;

export default class Draggable extends Component{
	constructor(){
		super();

		this.style={
			"position": "absolute",
			"width": "300px",
			"backgroundColor": "pink",
			"left": 0,
			"top": 0
		};

		var body = document.getElementsByTagName("html")[0];
		body.addEventListener("mousemove", this.setMousePosition.bind(this), false);

		this.currentPosition = {x: 0, y: 0};
		this.nextPosition = {x: 0, y: 0};
		this.clicked = false;
		this.dragging = false;

		this.handleMouseDown = this.handleMouseDown.bind(this);
	}

	render(){
		let style = {
			"left": this.currentPosition.x,
			"top": this.currentPosition.y
		};
		var draggableClone = React.Children.map(this.props.children, (child) => {
			return React.createElement('div',
			{
				style: Object.assign({}, this.style, style),
				key: this.props.id,
				onMouseDown: this.handleMouseDown,
				onMouseMove: this.handleMouseMove,
				onMouseUp: this.handleMouseUp
			}, this.props.children);
		});

		return (
			<div>
				{draggableClone}
			</div>
		);
	}

	setMousePosition(ev){
		this.localNextPosition.x = ev.clientX;
		this.localNextPosition.y = ev.clientY;

		if(this.clicked){
			this.dragging = true;
			this.currentPosition = this.localNextPosition;
			this.setState({
				currentPosition: this.localNextPosition
			});
		}
	}

	handleMouseDown(ev){
		this.clicked = true;
		this.props.handleMouseDown(ev);
	}

	handleMouseUp(ev){
		// this.originPosition = this.nextPosition;
	}
};

Draggable.prototype.localNextPosition = {x: 0, y: 0};
Draggable.prototype.localOriginPosition = {x: 0, y: 0};
