import React from 'react';

class MyModal extends React.Component {
	
	constructor(props){
		super(props);
		
		this.hideDialog=this.hideDialog.bind(this);
		
		this.state={showing:this.props.showing};
	}
	
	hideDialog(){
		console.log('hide');
		this.setState({showing:false});
	}
	
	show(){
		this.setState({showing:true});
	}
	
	render(){
		
		if (!this.state.showing) return null;
		
		var st={
			position:'absolute',
			backgroundColor:'rgba(0,0,0,0.8)',			
			top:0,
			left:0,
			width:'100%',
			height:'100%'};
			
		var inner={
			position:'relative',
			marginLeft:'50%'
			
		};
		
		return (<div style={st}><div style={inner}>{this.props.children}
		
		<button onClick={this.hideDialog}>Hide</button></div>
		
		</div>)
	}
	
}

export default MyModal;