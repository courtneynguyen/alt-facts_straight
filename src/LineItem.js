import React, {Component} from 'react';
import DraggableContainer from './DraggableContainer';

export default class LineItem extends Component{
	constructor(){
		super();
		this.style = {};
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
			<div>
			<DraggableContainer key={"0.0"}>
			<LineItem key={"0.0.1"}/>
			</DraggableContainer>
			</div>
		)
	}
}
