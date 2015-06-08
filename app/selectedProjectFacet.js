let selectedProjectFacet={
cursors:{
	id:['selectedProjectId'],
	projects:['projects']},
	 get(state){

	 	if (state.projects.length==0) {
	 		return null;
	 	};
	 	if (state.id==null) return null;


	 	

	 	
	 	return state.projects[state.id].title;
	 }
}

export default selectedProjectFacet;