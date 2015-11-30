import React, {Component} from 'react';
import Draggable from './components/Draggable';
import DropTarget from './components/DropTarget';

export default class LineItem extends Component{
	render(){
		return(
			<span>Hello World!</span>
		)
	}
}

export default class MainSection extends Component{
	constructor(){
		super();
		this.style = {
			"fontFamily": "sans-serif",
			"width": "300",
			"height": "60",
			"cursor": "default",
			"backgroundColor": "pink",
			"zIndex": "5"
		};
		this.dropTargetStyle = {
			"position": "absolute",
			"backgroundColor": "rgb(200, 230, 255)",
			"width": "500",
			"height": "500",
			"top": "500",
			"left": "500",
			"zIndex": "1"
		};

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	render(){
		return(
			<div>
				<Draggable key={"0.0"}>
					<LineItem key={"0.0.1"} style={this.style}>Cats</LineItem>
				</Draggable>
				<DropTarget style={this.dropTargetStyle} handleMouseMove={this.handleMouseMove} handleMouseLeave={this.handleMouseLeave}>
					Drop here
				</DropTarget>
			</div>
		)
	}
	handleMouseMove(){
		this.dropTargetStyle = {
			"position": "absolute",
			"backgroundColor": "rgb(10, 230, 255)",
			"width": "500",
			"height": "500",
			"top": "500",
			"left": "500",
			"zIndex": "1"
		};
		this.setState({
			dropTargetStyle: this.dropTargetStyle
		});
	}
	handleMouseLeave(){
		this.dropTargetStyle = {
			"position": "absolute",
			"backgroundColor": "rgb(200, 230, 255)",
			"width": "500",
			"height": "500",
			"top": "500",
			"left": "500",
			"zIndex": "1"
		};
		this.setState({
			dropTargetStyle: this.dropTargetStyle
		});
	}
}
