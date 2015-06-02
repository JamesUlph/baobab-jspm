import React from 'react';

import {branch} from 'baobab-react/decorators';
import PropTypes from 'baobab-react/prop-types';

import actions from './actions';
import classnames from 'classnames';

@branch({
	cursors:{
		foo:['foo'],
		projects:['projects'],
		selectedProjectId:['selectedProjectId']
	},
	facets:{
		selectedProject:'selectedProject'
	}
})
class Projects extends React.Component {
	static contextTypes = {
		tree: PropTypes.baobab,
		cursors: PropTypes.cursors
	}
	constructor(props){
		super(props);

// Tree available through the context
    //this.context.tree.emit('customEvent');
		//
		this.renderProject=this.renderProject.bind(this);
	}

	handleClick(){
		this.context.cursors.foo.set('Jack');
	}

	renderProject(id){
		console.log(id,this.props.selectedProjectId);
		let project=this.props.projects[id];
		let cl=classnames({foo:id==this.props.selectedProjectId});
		console.log(cl);
		return (<li className={cl} onClick={actions.selectProject.bind(null,id)} key={id}>{project.title}</li>);
	}

	render(){
		//console.log(this.context.cursors.foo.get());
		
		return (
			<div>Some projects:
			{this.props.selectedProject}
			<button onClick={this.handleClick.bind(this)}>Update</button>
			{this.props.foo}
			{Object.keys(this.props.projects).map(this.renderProject)}
			</div>);
	}

}

export default Projects;