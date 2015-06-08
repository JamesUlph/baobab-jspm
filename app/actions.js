import tree from './tree';

let actions={

	selectProject(id){
		tree.set('selectedProjectId',id);
		//tree.commit();
	},

	selectLocation(id){
		
		tree.set('selectedLocationId',id);
	},

	addLocation(){
		var c=tree.select('locations');//
		var l=c.get();
		console.log(l);
		
		c.set('9',[{desc:'Item added to tree'}]);
		
		console.log(c);
	}

};

export default actions;