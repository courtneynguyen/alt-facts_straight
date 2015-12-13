import React, {Component} from 'react';

export default class DropTarget extends Component{
	constructor(){
		super();
		this.mouseIsOverTarget = false;
		this.style = {};

		this.handleHoverOverDropTarget = this.handleHoverOverDropTarget.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.content = '';
	}
	componentDidMount(){
		if(this.props.children.props.style.width){
		this.width = this.props.children.props.style.width;
		}
		else{
			throw 'Specify width inside style';
		}

		if(this.props.children.props.style.height){
			this.height = this.props.children.props.style.height;
		}
		else{
			throw 'Specify height inside style';
		}

		if(this.props.registerDropTarget){
			this.registerDropTarget(this.props.registerDropTarget);
		}
	}
	render(){
		let style = this.style;
		if(this.props.style){
			style = Object.assign({}, this.style, this.props.style);
		}

		return (
			<div
			style={style}
			onMouseOver={this.handleHoverOverDropTarget}
			onMouseOut={this.handleMouseLeave}>
				{this.content}
			</div>
		);
	}
	handleHoverOverDropTarget(e){
		if(this.props.handleMouseMove){
			this.props.handleMouseMove(e);
		}
		else{
			throw Error('missing handleHoverOverDropTarget prop on DropTarget');
		}
	}
	handleMouseLeave(e){
		if(this.props.handleMouseLeave){
			this.props.handleMouseLeave(e);
		}
		else{
			throw Error('missing handleHoverOverDropTarget prop on DropTarget');
		}
	}
	registerDropTarget(func){
		func(this);
	}
}
