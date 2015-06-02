let selectedProjectFacet={
cursors:{
	id:['selectedProjectId'],
	projects:['projects']},
	 get(state){
	 	
	 	console.log(state.projects[state.id]);
	 	return state.projects[state.id];
	 }
}

export default selectedProjectFacet;