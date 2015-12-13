import Immutable from 'immutable';
import boxBoundaryChecking from './boxBoundaryChecking.js';

export default class DragAndDropManager{
	constructor(){
		this.draggables = [];
		this.dropTargets = [];
	}

	registerDraggable(model){
		this.draggables.push(model);
	}

	registerDropTarget(model){
		this.dropTargets.push(model);
	}

	draggableIsOverDropTarget(draggable){
		draggable.dropTargets.forEach((dropTarget) => {
			var draggableDimensions = {
				width: draggable.width,
				height: draggable.height,
				x: draggable.currentPosition.x,
				y: draggable.currentPosition.y
			};
			var isOverTarget = boxBoundaryChecking(draggableDimensions, dropTarget);
			if(isOverTarget){
				return true;
			}
		});
		return false;
	}
}
