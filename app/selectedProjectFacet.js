let selectedProjectFacet={
cursors:{
	id:['selectedProjectId'],
	projects:['projects']},
	 get(state){

	 	if (state.projects.length==0) {
	 		console.log('facet get 0 length');
	 		return null;
	 	};
	 	if (state.id==null) return null;


	 	console.log('facet get title');

	 	
	 	return state.projects[state.id].title;
	 }
}

export default selectedProjectFacet;