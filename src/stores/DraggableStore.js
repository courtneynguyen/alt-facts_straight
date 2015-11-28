var alt = require('../alt');
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

var _mousePos = {};
var _body = document.getElementsByTagName("body")[0];

class DraggableStore{
	constructor(){
		this.draggable = {};
		this.bindListeners({
		  clicked: DraggableActions.CLICKED,
		  nonClicked: DraggableActions.NON_CLICKED,
		  createDraggable: DraggableActions.CREATE_DRAGGABLE,
		  createFakeDraggables: DraggableActions.CREATE_FAKE,
		  dragging: DraggableActions.DRAG
		});
		this.exportPublicMethods({
			createDraggable: this.createDraggable
		});
	}

	nonClicked(id){
		this.draggable[id].clicking = false;
		this.draggable[id].dragging = false;
	}

	clicked(id){
		this.draggable[id].clicking = true;
	}

	dragging(draggable){
		var state = Object.assign({}, this);
		state.draggable[draggable.id].dragging = true;
		state.draggable[draggable.id].nextPosition = draggable.nextPosition;
		state.draggable[draggable.id].style =
		Object.assign(state.draggable[draggable.id].style,
			{"top": draggable.nextPosition.y, "left": draggable.nextPosition.x}
		);
	}

	createDraggable(id){
		var state = this.getState();
		state.draggable[id] = {
			id: id,
			clicking: false,
			dragging: false,
			pos: {x: 0, y: 0},
			originPosition: {x: 0, y: 0},
			nextPosition: {x: 0, y: 0},
			style: {}
		}
	}

	createFakeDraggables(){
		this.draggable = [
			{id:0, clicking: false, dragging: false},
			{id:1, clicking: false, dragging: false},
			{id:2, clicking: false, dragging: false}
		];
	}

	trackMouseForDropTarget(ev){
		_mousePos.x = ev.clientX;
		_mousePos.y = ev.clientY;
	}
};

module.exports = alt.createStore(DraggableStore, 'DraggableStore');
