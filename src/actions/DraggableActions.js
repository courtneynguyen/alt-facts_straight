import alt from '../alt';

class DraggableActions {
	clicked(){
		this.dispatch();
	}
	nonClicked(){
		this.dispatch();
	}
};

module.exports = alt.createActions(DraggableActions);
