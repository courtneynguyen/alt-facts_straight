var alt = require('../alt');
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

class DraggableStore{
	constructor(){
		this.click = false;
		this.dragging = false;

		this.bindListeners({
		  clicked: DraggableActions.CLICKED,
		  nonClicked: DraggableActions.NON_CLICKED
		});
	}

	nonClicked(){
		this.click = false;
		this.dragging = false;
	}

	clicked(){
		this.click = true;
	}
};

module.exports = alt.createStore(DraggableStore, 'DraggableStore');
