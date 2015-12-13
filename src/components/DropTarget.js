import React, {Component} from 'react';

export default class DropTarget extends Component{
	constructor(){
		super();
		this.mouseIsOverTarget = false;
		this.style = {};

		this.handleHoverOverDropTarget = this.handleHoverOverDropTarget.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.content = [];
	}
	componentDidMount(){

		if(this.props.registerDropTarget){
			this.registerDropTarget(this.props.registerDropTarget);
		}
	}
	render(){
		let style = this.style;
		if(this.props.style){
			style = Object.assign({}, this.style, this.props.style);
		}
		var listItems = this.content.map((item) => {
			return (<li>{item}</li>);
		});

		return (
			<div
			style={style}
			onMouseOver={this.handleHoverOverDropTarget}
			onMouseOut={this.handleMouseLeave}>
				<ul>
				{listItems}
				</ul>
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

	setContent(content){
		this.content.push(content);
		this.setState({content: this.content});
	}
}
