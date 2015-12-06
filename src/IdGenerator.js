let _id = 0;
export default class IdGenerator{
	static generateId() {
		return _id++;
	}
}
