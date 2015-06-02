let selectedProjectFacet={
cursors:{
	id:['selectedProjectId'],
	projects:['projects']},
	 get(state){
	 	if (state.id==null) return null;
	 	console.log(state.projects[state.id]);

	 	return state.projects[state.id].title;
	 }
}

export default selectedProjectFacet;