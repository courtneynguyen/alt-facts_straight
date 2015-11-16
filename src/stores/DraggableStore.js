import alt from '../alt';
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';

class DraggableStore{
	constructor(){
		this.draggable = {
			clicked: false,
			dragging: false,
			style: DraggableStyles.nonClicked
		};

		this.bindListeners({
		  clicked: DraggableActions.CLICKED,
		  nonClicked: DraggableActions.NON_CLICKED
		});

		this.exportPublicMethods({
		  getStyle: this.getStyle
		});
	}

	nonClicked(){
		this.draggable.clicked = false;
		this.draggable.dragging = false;
		this.getStyle();
	}

	clicked(){
		this.draggable.clicked = true;
		this.getStyle();
	}

	getStyle(){
		if(this.state){
			if(this.state.draggable && this.state.draggable.clicked){
				this.state.draggable.style = DraggableStyles.clicked;
			}
			else{
				this.state.draggable.style = DraggableStyles.nonClicked;
			}
		}
		else if(this.draggable){
			if(this.draggable.clicked){
				this.draggable.style = DraggableStyles.clicked;
			}
			else{
				this.draggable.style = DraggableStyles.nonClicked;
			}
		}
	}
};

module.exports = alt.createStore(DraggableStore, 'DraggableStore');
