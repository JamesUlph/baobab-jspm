import tree from './tree';
import uid from 'gen-uid';

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
		

		let guid=uid.v4();

		c.set(guid,[{desc:'Item '+guid}]);
		
		console.log(c);
	}

};

export default actions;