import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Draggable from './components/Draggable';
import DraggableStore from './stores/DraggableStore';
import DraggableActions from './actions/DraggableActions';

function getDraggables(){
	return DraggableStore.getState();
}

export default class DraggableContainer extends Component{
	componentDidMount(){
		DraggableActions.createFake();
	}
	render(){
		var draggableComponents = [];
		draggableComponents = this.props.draggable.map((draggable, i) => {
			if(draggable.clicking){
				draggable.style = DraggableStyles.Clicking;
			}
			else{
				draggable.style = DraggableStyles.Normal;
			}
			return (
				<div>
					<AltContainer store={DraggableStore}>
						<Draggable>
						{this.props.children}
						</Draggable>
					</AltContainer>
				</div>
			);
		}
	}

	handleMouseDown(ev){
		DraggableActions.clicked(Number(ev.target.getAttribute('data-id')));
	}

	handleMouseUp(ev){
		DraggableActions.nonClicked(Number(ev.target.getAttribute('data-id')));
	}

	handleDrag(ev){
		DraggableActions.drag(Number(ev.target.getAttribute('data-id')));
	}
