import React from 'react';
import Projects from './projects';
import {root} from 'baobab-react/decorators';

import tree from './tree';

@root(tree)
class App extends React.Component {
	constructor(){
		super();


	}

	render(){
		return (<div>Hello world!
<Projects />
<Projects />
<Projects />

			</div>);
	}
}

export default App;