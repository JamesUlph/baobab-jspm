let state={
	foo:'bar',
	locations:{
		'0':{desc:'Felixstowe'},
		'1':{desc:'Woodbridge'},
		'2':{desc:'Harwich'}
	},
	projects:{ 
		'0':{title:'test'},
		'1':{title:'bob'},
		'2':{title:'PHV-SVCLIVE'},
		'3':{title:'PHV-FP1'},
		'4':{title:'PHV-EX1'},
		'5':{title:'PH-ESX1'},
		'6':{title:'PH-ESX2'},
		'7':{title:'PH-ESX3',meta:'Some meta data'}
},
selectedProjectId:null,
selectedLocationId:null
}

export default state;