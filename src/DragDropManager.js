import Immutable from 'immutable';
import boxBoundaryChecking from './boxBoundaryChecking.js';

export default class DragAndDropManager{
	constructor(){
		this.draggables = [];
		this.dropTargets = [];
		this.hoveredDropTarget = null;
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
			draggable.isOverTarget = boxBoundaryChecking(draggableDimensions, dropTarget);
			if(draggable.isOverTarget){
				this.hoveredDropTarget = dropTarget;
			}
		});
		return draggable.isOverTarget;
	}

	getDropTargetBeingHovered(){
		return this.hoveredDropTarget;
	}

	releaseDraggableOnDropTarget(draggable, dropTarget){
		if(draggable.isOverTarget){
			var y = dropTarget.getRef();
			y.setContent(draggable.props.children.props.children);
		}
	}
}
