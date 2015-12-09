'use strict';

export default function(){
	let model = {};
	return {
		registerDroppable: function(x){
			model.droppables[x.componentId] =
			{
				width: x.width,
				height: x.height,
				currentPosition: x.currentPosition,
				componentId: x.componentId,
				dropTargetIds: x.dropTargetIds
			};
		},
		registerDropTarget: function(x){
			console.log(x);
			model.dropTargets[x.componentId] =
			{
				width: x.width,
				height: x.height,
				currentPosition: x.currentPosition,
				componentId: x.componentId
			};
			console.log(this.model.dropTargets);
		}
	};
}
