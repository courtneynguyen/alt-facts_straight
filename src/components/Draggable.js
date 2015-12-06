import React, {Component} from 'react';
import DraggableStyles from '../styles/Draggable';
import LineItem from '../LineItem';
import Immutable from 'immutable';
import DragDropManager from '../DragDropManager';

export default class Draggable extends Component{
	constructor(){
		super();

		this.style = {
			"position": "absolute",
			"left": 0,
			"top": 0
		};

		var html = document.getElementsByTagName('html')[0];
		html.addEventListener('mousemove', this.setMousePosition.bind(this), false);

		this.currentPosition = {x: 0, y: 0};
		this.clicked = false;
		this.dragging = false;

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.width = 0;
		this.height = 0;
	}

	componentDidMount(){
		this.width = this.props.children.props.style.width;
		this.height = this.props.children.props.style.height;
		
		if(this.props.registerDroppable && this.props.dropTargets){
			this.registerDroppable(this.props.dropTargets);
		}
	}

	render(){
		let style = {
			"left": this.currentPosition.x,
			"top": this.currentPosition.y
		};
		var draggableClone = React.Children.map(this.props.children, (child) => {
			var childStyle = child.props.style || '';
			return React.createElement('div',
			{
				style: Object.assign({}, this.style, style, childStyle),
				key: this.props.id,
				onMouseDown: this.handleMouseDown,
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
		this.localNextPosition.x = (ev.clientX);
		this.localNextPosition.y = (ev.clientY);
		console.log("clientX: " + ev.clientX + ", clientY: "+ ev.clientY);

		if(this.props.children.props.style){
			this.localNextPosition.x -= (this.width / 2);
			this.localNextPosition.y -= (this.height / 2);
		}
		else{
			this.localNextPosition.x -= 10;
			this.localNextPosition.y -= 10;
		}

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
		this.dragging = true;
		if(this.props.handleMouseDown){
			this.props.handleMouseDown(ev);
		}
	}

	handleMouseUp(ev){
		this.clicked = false;
		if(this.props.handleMouseUp){
			this.props.handleMouseUp(ev);
		}
	}
	registerDroppable(dropTargets){
		this.props.registerDroppable(this, dropTargets);
	}
}

Draggable.prototype.localNextPosition = {x: 0, y: 0};
Draggable.prototype.localOriginPosition = {x: 0, y: 0};
