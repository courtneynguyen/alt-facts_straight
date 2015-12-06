import IdGenerator from '../IdGenerator.js';
import Answer from '../models/answer.js';

export default class AppStore{
	constructor(){
		this.answer = new Answer();
	}
}
