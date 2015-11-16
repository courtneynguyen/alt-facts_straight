import AppDispatcher from '../Dispatcher';
import DraggableActions from '../actions/DraggableActions';
import DraggableStyles from '../styles/Draggable';
import {EventEmitter} from 'fbemitter';

export default class DraggableStore{
	constructor(){
		this.draggable = {
			clicked: false,
			dragging: false,
			style: DraggableStyles.nonClicked
		};
	}

  // // Add change listener
  // addChangeListener: function(callback) {
  //   this.on('change', callback);
  // },
  //
  // // Remove change listener
  // removeChangeListener: function(callback) {
  //   this.removeListener('change', callback);
  // }

});
