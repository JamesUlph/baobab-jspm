let state={
	foo:'bar',
	locations:{
		'':{desc:'Select item'},
		'0':{desc:'Felixstowe'},
		'1':{desc:'Woodbridge'},
		'2':{desc:'Harwich'}
	},
	projects:{ 
		'0':{title:'TEST1'},
		'1':{title:'TEST2'},
		'2':{title:'PHV-SVCLIVE'},
		'3':{title:'PHV-FP1'},
		'4':{title:'PHV-EX1'},
		'5':{title:'PH-ESX1'},
		'6':{title:'PH-ESX2'},
		'7':{title:'PH-ESX3',meta:'Some meta data'},
		'8':{title:'TEST3',meta:'Data 2'}
	},
	selectedProjectId:null,
	selectedLocationId:null,
	title:'test title'
}

export default state;