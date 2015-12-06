import DragDropManger from "../DragDropManger";

export default class Droppable{
	constructor(){
		this.position = {x: 0, y: 0};
		this.width = 0;
		this.height = 0;
		this.isOverDropTarget = false;
	}

	isOverDropTarget(){
		return this.isOverDropTarget;
	}
}
