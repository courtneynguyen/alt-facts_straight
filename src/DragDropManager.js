import Immutable from 'immutable';
export default class DragAndDropManager{
	constructor(){
		this.model = Immutable.Map();
	}
	connectDropToDropTarget(droppable, dropTarget){

	}

	getDropTargetConnector(id){
		return this.model.get(id, null);
	}

	registerDroppable(x){
		console.log("got here", x);
	}
}
