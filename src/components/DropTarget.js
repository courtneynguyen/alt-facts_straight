import React, {Component} from 'react';

export default class DropTarget extends Component{
	constructor(){
		super();
		this.mouseIsOverTarget = false;
		this.style = {};
		this.content = [];
		this.wrapper = "";
	}
	componentWillMount(){
		this.wrapper = this.props.wrapper || 'div';
		this.innerDropTarget = this.props.innerDropTarget || {};
		this.innerDropTarget.ele = this.innerDropTarget.ele || 'div';
		this.innerDropTarget.options = this.innerDropTarget.options || '';
	}

	render(){
		let style = this.style;
		if(this.props.style){
			style = Object.assign({}, this.style, this.props.style);
		}
		var listItems = this.content.map((item) => {
			return React.createElement(this.innerDropTarget.ele, this.innerDropTarget.options, item);
		});

		var dropTargetElement = React.createElement(this.wrapper, {
			style: style
		}, this.props.title);

		return dropTargetElement;
	}

	setContent(content){
		this.content.push(content);
		this.setState({content: this.content});
	}

	draggableHoveringOverDropTarget(){
		if(this.props.handleDraggableHoveringOverDropTarget){
			this.props.handleDraggableHoveringOverDropTarget(this);
		}
	}

	setHoverStyle(style){
		this.hoveredStyle = style;
	}
}
