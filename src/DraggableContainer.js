import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Draggable from './components/Draggable';

export default class DraggableContainer extends Component{
	render(){
		console.log(this.props.children);
		var draggableComponents = [];
		draggableComponents = React.Children.map(this.props.children, (child, i) => {
			return(
				<Draggable key={i} id={i}>
				{child.props.children}
				</Draggable>
			);
		});
		return (
			<AltContainer>
				{draggableComponents}
			</AltContainer>
		);
	}
}
