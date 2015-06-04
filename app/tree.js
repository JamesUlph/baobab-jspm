import Baobab from 'baobab';
import state from './state';

import selectedProjectFacet from './selectedProjectFacet';
import selectedLocationFacet from './selectedLocationFacet';

let tree=new Baobab(state,{
	facets:{
		selectedProject: selectedProjectFacet,
		selectedLocation: selectedLocationFacet
	}
});

export default tree;