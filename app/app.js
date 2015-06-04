import React from 'react';
import Projects from './projects';
import {root} from 'baobab-react/decorators';

import tree from './tree';
import Calendar from './calendar';

@root(tree)
class App extends React.Component {
	constructor(){
		super();


	}

	render(){
		return (<div>
<Calendar offset={2} />
<Calendar />
<Projects />
<Projects />
<Projects />

			</div>);
	}
}

export default App;