import AppDispatcher from '../Dispatcher';
import {Action} from 'flux/utils';
import ActionType from '../ActionType';

var DraggableAction = {
	CLICKED: function(action){
		AppDispatcher.handleViewAction({
			actionType: ActionType.Draggable.CLICKED,
			style: action.style
		});
	},
	NON_CLICKED: function(action){
		AppDispatcher.handleViewAction({
			actionType: ActionType.Draggable.NON_CLICKED,
			style: action.style
		});
	}

}

module.exports = DraggableAction;
