var alt = require('../alt');
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

var _mousePos = {};
var _body = document.getElementsByTagName("body")[0];
class DraggableStore{
	constructor(){
		this.draggable = [];

		this.bindListeners({
		  clicked: DraggableActions.CLICKED,
		  nonClicked: DraggableActions.NON_CLICKED,
		  createDraggable: DraggableActions.CREATE_DRAGGABLE,
		  createFakeDraggables: DraggableActions.CREATE_FAKE,
		  dragging: DraggableActions.DRAG
		});

	}

	nonClicked(id){
		this.draggable[id].clicking = false;
		this.draggable[id].dragging = false;
		_body.removeEventListener("mousemove", this.setMousePosition, false);
	}

	clicked(id){
		this.draggable[id].clicking = true;
	}

	dragging(id){
		this.draggable[id].dragging = true;
		_body.addEventListener("mousemove", this.setMousePosition, false);
		DraggableStyles.Clicking["top"] = _mousePos.y + "px";
		DraggableStyles.Clicking["left"] = _mousePos.x + "px";
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

	setMousePosition(ev){
		_mousePos.x = ev.clientX;
		_mousePos.y = ev.clientY;
	}
};

module.exports = alt.createStore(DraggableStore, 'DraggableStore');
