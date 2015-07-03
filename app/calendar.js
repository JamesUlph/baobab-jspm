import React from 'react';

import classNames from 'classnames';


class Calendar extends React.Component {

	constructor(props){
		super(props);

		this.state={
			year:2015,
			month:0,
			offset:this.props.offset ? this.props.offset : 1
		};
		
		this.days=[];
		this.weeks=[];
		this.heading=[];

		this.monthName=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		this.dayOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		this.monthDays=[31,28,31,30,31,30,31,31,30,30,30,31]

		let i=0;

		let q=i%7;

		this.renderWeek=this.renderWeek.bind(this);
		this.renderHeading=this.renderHeading.bind(this);
		this.calculate=this.calculate.bind(this);
		this.renderDay=this.renderDay.bind(this);

		this.renderWeek2=this.renderWeek2.bind(this);
		this.renderDay2=this.renderDay2.bind(this);

	}

	calculate(){
		
		var d=new Date(this.state.year,this.state.month);		

		let y=this.state.year;
		this.monthDays[1]= !(y % 4) && (y % 100) || !(y % 400)==true ? 29 : 28;

		this.heading=[];
		this.weeks=[];

		let offset=this.state.offset; // start of week offset (0=sun)
		let mth=d.getMonth();
		let yr=d.getFullYear();
		let days=this.monthDays[mth];

		let prevmth = mth==0 ? 11 : mth-1;

		//console.log('prev ',prevmth);

		let day=1-((d.getDay()-offset));

		if (day>1) day-=7;

		for (let p=0; p<7; p++){
			let q=(p+offset)%7;
			this.heading.push(this.dayOfWeek[q]);

		}

		//console.log(this.heading);
		for (let w=0; w<6; w++){

			var dy=[];


			// gen a week
			for (let p=0;p<7;p++){
				let q=(p+offset)%7;		

				if (day>0 && day <= days){
					dy.push({title:this.dayOfWeek[q],
						day:day,
						year:yr,
						current:true,
						month:mth,
						dow:q==0 | q==6});
				}
				else {
					if (day<=0) {
						dy.push({year:mth-1==-1 ? yr-1 : yr,month:(mth-1)==-1 ? 11 : mth-1,title:this.dayOfWeek[q],day:this.monthDays[prevmth]+day,current:false});
					}
					else {
						dy.push({year:mth+1==12 ? yr+1 : yr,month:(mth+1)==12 ? 0 : mth+1,title:this.dayOfWeek[q],day:day-this.monthDays[mth],current:false});
					}
				}
				day++;
			}

			this.weeks.push(dy);
			if (day>days) break;
		}
	}

	dayClick(x){
		console.log('day',x);

	}

	renderDay(item,index){
		if (item==undefined) return;
		
		var tt=this.dayClick;
		var cl=classNames({'cellTitle':true,'current':!item.current,'weekend':item.dow});
		var cl2=classNames({'cellBody':true,'current':!item.current});
		//return (<td className={cl}><div className={cl}>{item.title}</div><div className={cl2}>{item.day==-1 ? '' : item.day}</div></td>);
		return (<td onClick={tt.bind(null,item)} className={cl}><div className={cl2}>{item.day==-1 ? '' : item.day}</div></td>);
	}

	renderWeek(item,index){
		if (item==undefined) return;

		var t=item.map(this.renderDay);
		return (<tr>{t}</tr>);
	}

	renderWeek2(item,index){
		if (item==undefined) return;

		var t=item.map(this.renderDay2);
		return (<div className="week">{t}</div>);
	}

	renderDay2(item,index){
		return (<span className="day">{item.day}</span>);
	}

	renderHeading(){

		var t=this.heading.map((i,x)=>{
			return <td>{i}</td>;
		});
		
		return <tr className="titlerow">{t}</tr>;
	}

	addMonth(){
		
		this.setState(function(previousState, currentProps) {
			var p=(previousState.month+1)%12;
			return {month: p};
		});	
	}

	addYear(){
		this.setState(function(previousState, currentProps) {
			var p=previousState.year+1;
			return {year: p};
		});		
	}

	addOffset(){
		this.setState(function(previousState, currentProps) {
			var p=(previousState.offset+1)%7;
			return {offset: p};
		});
	}

	render(){
		this.calculate();
		
		var dy=this.renderDay();

		return(
			<div>
			<span onClick={this.addMonth.bind(this)}> {this.monthName[this.state.month]} </span>
			<span onClick={this.addYear.bind(this)}>{this.state.year}</span>
			<span onClick={this.addOffset.bind(this)}>Offset {this.state.offset}</span>
			<table className="mycal"><tbody>{this.renderHeading()}{this.weeks.map(this.renderWeek)}</tbody></table>
			
			<div className="calendar">
			{this.weeks.map(this.renderWeek2)}
			</div>
			</div>
			);
	}
};

export default Calendar;

