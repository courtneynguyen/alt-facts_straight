import React, {Component} from 'react';
import DraggableContainer from './DraggableContainer';

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
			"cursor": "pointer",
			"backgroundColor": "pink"
		};
	}
	render(){
		return(
			<DraggableContainer key={"0.0"}>
				<LineItem key={"0.0.1"} style={this.style}>Hi Everyone</LineItem>
			</DraggableContainer>
		)
	}
}
