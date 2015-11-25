var alt = require('../alt');

class DraggableActions {
	clicked(id){
		this.dispatch(id);
	}
	nonClicked(id){
		this.dispatch(id);
	}
	createDraggable(id){
		this.dispatch(id);
	}
	createFake(){
		this.dispatch();
	}
	drag(draggable){
		this.dispatch(draggable);
	}
};

module.exports = alt.createActions(DraggableActions);
