export default class DropTarget{
	constructor(id, x, y, width, height){
		this.id = id;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.ref = null;
	}

	getCurrentPosition(){
		return {x: this.x, y: this.y};
	}
	getDimensions(){
		return {width: this.width, height: this.height};
	}
	getId(){
		return this.id;
	}
	setRef(ref){
		this.ref = ref;
	}
	getRef(){
		return this.ref;
	}
}
