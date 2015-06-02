import tree from './tree';

let actions={

	selectProject(id){
		tree.set('selectedProjectId',id);
		tree.commit();
	}

};

export default actions;