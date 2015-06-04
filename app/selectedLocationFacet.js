let selectedLocationFacet={
cursors:{
	id:['selectedLocationId'],
	locations:['locations']},
	 get(state){
	 	console.log('location get');
	 	if (state.id==null) return null;
	 	console.log(state.locations[state.id]);

	 	return state.locations[state.id].desc;
	 }
}

export default selectedLocationFacet;