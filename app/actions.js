import tree from './tree';

let actions={

	selectProject(id){
		tree.set('selectedProjectId',id);
		//tree.commit();
	},

	selectLocation(id){
		
		tree.set('selectedLocationId',id);
	}

};

export default actions;