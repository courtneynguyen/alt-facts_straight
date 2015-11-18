import AltContainer from 'alt-container';
import React, {Component} from 'react';
import Draggable from './components/Draggable';
import DraggableStore from './stores/DraggableStore';
import DraggableActions from './actions/DraggableActions';

function getDraggables(){
	return DraggableStore.getState();
}

export default class DraggableContainer extends Component{

	render(){
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
