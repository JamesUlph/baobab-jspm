import Baobab from 'baobab';
import state from './state';

import selectedProjectFacet from './selectedProjectFacet';

let tree=new Baobab(state,{
	facets:{
		selectedProject: selectedProjectFacet
	}
});

export default tree;