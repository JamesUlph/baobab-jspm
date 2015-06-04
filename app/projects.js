import React from 'react';

import {branch} from 'baobab-react/decorators';
import PropTypes from 'baobab-react/prop-types';

import actions from './actions';
import classnames from 'classnames';

@branch({
	cursors:{
		foo:['foo'],
		projects:['projects'],
		locations:['locations'],
		selectedProjectId:['selectedProjectId'],
		selectedLocationId:['selectedLocationId']
	},
	facets:{
		selectedProject:'selectedProject',
		selectedLocation:'selectedLocation'
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
		this.renderLocation=this.renderLocation.bind(this);
		this.updateLocation=this.updateLocation.bind(this);
	}

	handleClick(){
		this.context.cursors.foo.set('Jack');
	}

	renderProject(id){
		//console.log(id,this.props.selectedProjectId);
		let project=this.props.projects[id];
		let cl=classnames({foo:id==this.props.selectedProjectId});
		
		return (<li className={cl} onClick={actions.selectProject.bind(null,id)} key={id}>{project.title}</li>);
	}

	renderLocation(id){
		return (<option value={id}>{this.props.locations[id]}</option>);
	}

	updateLocation(id){
		console.log(id.target.value);
		actions.selectLocation(id.target.value);

	}

	typedChange(x){
	this.context.cursors.foo.set(x.target.value);
	}

	render(){
		//console.log(this.context.tree);
		
		return (
			<div>Some projects:
			{this.props.selectedProject}
			{this.props.selectedLocation}

			<input type="text" value={this.props.foo} onChange={this.typedChange.bind(this)} />
			Location=
			{this.props.selectedLocationId}
			<button onClick={this.handleClick.bind(this)}>Update</button>
			{this.props.foo}

			<select value={this.props.selectedLocationId} onChange={this.updateLocation}>{Object.keys(this.props.locations).map(this.renderLocation)}</select>
			
			{Object.keys(this.props.projects).map(this.renderProject)}
			</div>);
	}

}

export default Projects;