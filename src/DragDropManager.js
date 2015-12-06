import Immutable from 'immutable';
export default class DragAndDropManager{
	constructor(){
		this.model = {};
		this.model.droppables = {};

		this.registerDroppable = this.registerDroppable.bind(this);
	}
	connectDropToDropTarget(droppable, dropTarget){

	}

	getDropTargetConnector(id){
		return this.model.get(id, null);
	}

	registerDroppable(x){
		this.model.droppables[x.componentId] =
		{
			width: x.width,
			height: x.height,
			currentPosition: x.currentPosition,
			componentId: x.componentId,
			dropTargetIds: x.dropTargetIds
		};
	}
	registerDropTarget(x){
		console.log(x);
		this.model.dropTargets[x.componentId] =
		{
			width: x.width,
			height: x.height,
			currentPosition: x.currentPosition,
			componentId: x.componentId
		};
		console.log(this.model.dropTargets);
	}
	checkBoundaries(droppableId){
		let droppable = this.model.droppables[droppableId];
		let dropTargets = this.model.droppables[droppableId].dropTargets;
	}
}
