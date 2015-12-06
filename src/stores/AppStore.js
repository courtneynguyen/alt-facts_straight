import alt from '../alt';
import Immutable from 'immutable';
import IdGenerator from '../IdGenerator.js';
import Answer from '../models/answer.js';
import DragDropManger from '../DragDropManager';

const _dragDropManager = new DragDropManger();

class AppStore{
	constructor(){
		this.answer = new Answer(1, 'cat');
		this.registerDroppable = _dragDropManager.registerDroppable;
		this.dropTargets = Immutable.List([1]);
	}
}

module.exports = alt.createStore(AppStore, 'AppStore');
