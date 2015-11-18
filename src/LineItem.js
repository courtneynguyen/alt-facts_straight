import React, {Component} from 'react';
import DraggableContainer from './DraggableContainer';

export default class LineItem extends Component{
	constructor(){
		super();
		this.style = {
			backgroundColor: "gray"
		};
	}
	render(){
		return(
			<div style={this.style}>Hello World!</div>
		)
	}
}

export default class MainSection extends Component{
	render(){
		return(
			<div>
			<DraggableContainer key={"0.0"}><LineItem key={"0.0.1"}/></DraggableContainer>
			<DraggableContainer key={"0.1"}><LineItem key={"0.1.1"}/></DraggableContainer>
			<DraggableContainer key={"0.2"}><LineItem key={"0.2.1"}/></DraggableContainer>
			</div>
		)
	}
}
