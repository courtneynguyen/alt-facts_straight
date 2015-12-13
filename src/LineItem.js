import React, {Component} from 'react';
import Draggable from './components/Draggable';
import DropTarget from './components/DropTarget';
import AppStore from './stores/AppStore';
import AltContainer from 'alt-container';
import IdGenerator from './IdGenerator';
import DropTargetModel from './models/DropTarget';
import DragDropManager from './DragDropManager';

const dragDropManager = new DragDropManager();
const dropTarget = new DropTargetModel(100, 200, 250, 400, 250);

export default class LineItem extends Component{
	render(){
		return(
			<span>Hello World!</span>
		);
	}
}

export default class MainSection extends Component{
	constructor(){
		super();
		this.componentId = IdGenerator.generateId();
		var x = IdGenerator.generateId();
		this.style = {
			"fontFamily": "sans-serif",
			"width": "300",
			"height": "60",
			"cursor": "default",
			"backgroundColor": "pink",
			"zIndex": "5"
		};
		this.dropTargetStyle = {
			"position": "absolute",
			"backgroundColor": "rgb(200, 230, 255)",
			"width": dropTarget.getDimensions().width,
			"height": dropTarget.getDimensions().height,
			"left": dropTarget.getCurrentPosition().x,
			"top": dropTarget.getCurrentPosition().y,
			"zIndex": "1"
		};

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	render(){
		return(
			<div>
				{this.renderDroppables()}
			</div>
		);
	}

	componentDidMount(){
		dropTarget.setRef(this.refs.dropTargetReference);
	}

	renderDroppables(){

		return (
			<div>
				<Draggable
				key={"0.0"}
				componentId={IdGenerator.generateId()}
				dropTargets={[dropTarget]}
				manager={dragDropManager}
				width={300}
				height={60}>
					<LineItem key={"0.0.1"} style={this.style} width={500} height={500}>Cats</LineItem>
				</Draggable>
				<DropTarget
				handleMouseMove={this.handleMouseMove}
				handleMouseLeave={this.handleMouseLeave}
				componentId={100}
				manager={dragDropManager}
				style={this.dropTargetStyle}
				ref="dropTargetReference"/>
			</div>
		);
	}

	handleMouseMove(){
		Object.assign(this.dropTargetStyle,{
			"backgroundColor": "rgb(10, 230, 255)",
		});
		this.setState({
			dropTargetStyle: this.dropTargetStyle
		});
	}
	handleMouseLeave(){
		Object.assign(this.dropTargetStyle,{
			"backgroundColor": "rgb(200, 230, 255)",
		});
		this.setState({
			dropTargetStyle: this.dropTargetStyle
		});
	}
}
