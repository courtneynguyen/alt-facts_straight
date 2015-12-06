import Immutable from 'immutable';
export default class DragAndDropManager{
	constructor(){
		this.model = Immutable.Map();
		this.model = Immutable.set({key: "1", value: "test"});
	}
	connectDropToDropTarget(droppable, dropTarget){

	}
}
