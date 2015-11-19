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
	drag(id){
		this.dispatch(id);
	}
};

module.exports = alt.createActions(DraggableActions);
