import alt from '../alt';
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

class DraggableStore{
	constructor(){
		this.draggable = {};

		this.bindListeners({
		  clicked: DraggableActions.CLICKED,
		  nonClicked: DraggableActions.NON_CLICKED
		});

		this.exportPublicMethods({
		  getStyle: this.getStyle,
		  getDraggables: this.getDraggables
		});
	}

	nonClicked(id){
		this.draggable[id].clicked = false;
		this.draggable[id].dragging = false;
		this.draggable[id].style = this.getStyle(id);
	}

	clicked(id){
		this.draggable[id].clicked = true;
		this.draggable[id].style = this.getStyle(id);
	}

	getDraggables(){
		return draggable;
	}

	getStyle(id){
		var style = "";
		if(this.state){
			if(this.state.draggable && this.state.draggable[id].clicked){
				style = DraggableStyles.clicked;
			}
			else{
				style = DraggableStyles.nonClicked;
			}
		}
		else if(this.draggable){
			if(this.draggable[id].clicked){
				style = DraggableStyles.clicked;
			}
			else{
				style = DraggableStyles.nonClicked;
			}
		}
		return style;
	}
};

module.exports = alt.createStore(DraggableStore, 'DraggableStore');
