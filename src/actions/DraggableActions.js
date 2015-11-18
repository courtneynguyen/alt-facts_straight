import alt from '../alt';

class DraggableActions {
	clicked(id){
		this.dispatch(id);
	}
	nonClicked(id){
		this.dispatch(id);
	}
};

module.exports = alt.createActions(DraggableActions);
