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

		var body = document.getElementsByTagName("body")[0];
		body.addEventListener("mousemove", this.setMousePosition.bind(this), false);

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.onMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.callMouseMove = this.callMouseMove.bind(this);
	}

	render(){
		let style = {
			"left": this.props.draggable[this.props.id].nextPosition.x,
			"top": this.props.draggable[this.props.id].nextPosition.y
		};
		var draggableClone = React.Children.map(this.props.children, (child) => {
			return React.createElement('div',
			{
				style: Object.assign({}, this.style, style),
				key: this.props.id,
				onMouseDown: this.handleMouseDown,
				onMouseMove: this.handleMouseMove,
				onMouseUp: this.handleMouseUp,
				"data-id": this.props.id
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
	}

	handleMouseMove(ev){
		if(this.props.draggable[this.props.id].clicking){
			timer = setInterval(this.callMouseMove, 600, ev);
		}
	}

	callMouseMove(ev){
		var position = this.localNextPosition;
		this.props.handleDrag({
			id: Number(ev.target.getAttribute('data-id')),
			nextPosition: position
		});
	}

	handleMouseDown(ev){
		this.props.handleMouseDown(ev);
	}

	handleMouseUp(ev){
		// this.originPosition = this.nextPosition;
	}
};

Draggable.prototype.localNextPosition = {x: 0, y: 0};
Draggable.prototype.localOriginPosition = {x: 0, y: 0};
