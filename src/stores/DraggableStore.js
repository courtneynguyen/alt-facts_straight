var alt = require('../alt');
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

class DraggableStore{
	constructor(){
		this.draggable = [];

		this.bindListeners({
		  clicked: DraggableActions.CLICKED,
		  nonClicked: DraggableActions.NON_CLICKED,
		  createDraggable: DraggableActions.CREATE_DRAGGABLE,
		  createFakeDraggables: DraggableActions.CREATE_FAKE
		});
	}

	nonClicked(id){
		this.draggable[id].clicking = false;
		this.draggable[id].dragging = false;
	}

	clicked(id){
		this.draggable[id].clicking = true;
	}

	createDraggable(id){
		this.draggable.push({
			id: id,
			clicking: false,
			dragging: false
		});
	}

	createFakeDraggables(){
		this.draggable = [
			{id:0, clicking: false, dragging: false},
			{id:1, clicking: false, dragging: false},
			{id:2, clicking: false, dragging: false}
		];
	}
};

module.exports = alt.createStore(DraggableStore, 'DraggableStore');
