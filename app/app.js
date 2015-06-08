import React from 'react';
import Projects from './projects';
import {root} from 'baobab-react/decorators';

import tree from './tree';
import Calendar from './calendar';
import Baobab from 'baobab';
@root(tree)
class App extends React.Component {
	constructor(){
		super();


	}

	render(){
		return (<div>
<Calendar offset={2} />
<Projects />

			</div>);
	}
}

export default App;