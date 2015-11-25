import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Draggable from './components/Draggable';
var DraggableStore = require('./stores/DraggableStore');
import DraggableActions from './actions/DraggableActions';

// function getDraggables(){
// 	return DraggableStore.getState();
// }

export default class DraggableContainer extends Component{
	constructor(){
		super();
		DraggableStore.createDraggable(0);
	}
	render(){
		console.log(this.props.children);
		var draggableComponents = [];
		draggableComponents = React.Children.map(this.props.children, (child, i) => {
			return(
				<Draggable
				handleClick={this.handleMouseDown}
				key={i}
				id={i}
				handleDrag={this.handleDrag}
				>
				{child.props.children}
				</Draggable>
			);
		});
		return (
			<AltContainer store={DraggableStore}>
			{draggableComponents}
			</AltContainer>
		);
	}

	handleMouseDown(ev){
		console.log('clicked');
		DraggableActions.clicked(Number(ev.target.getAttribute('data-id')));
	}

	handleMouseUp(ev){
		DraggableActions.nonClicked(Number(ev.target.getAttribute('data-id')));
	}

	handleDrag(draggable){
		console.log('get here', draggable);
		DraggableActions.drag(draggable);
	}
}
