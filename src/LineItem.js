import React, {Component} from 'react';
import DraggableContainer from './DraggableContainer';

export default class LineItem extends Component{
	constructor(){
		super();
		this.style = {
			"fontFamily": "sans-serif"
		};
	}
	render(){
		return(
			<span style={this.style}>Hello World!</span>
		)
	}
}

export default class MainSection extends Component{
	render(){
		return(
			<div style={this.style}>
			<DraggableContainer key={"0.0"}>
				<LineItem key={"0.0.1"}>Hi Everyone</LineItem>
			</DraggableContainer>
			</div>
		)
	}
}
