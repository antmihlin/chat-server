import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import logo from './logo.svg';
import './App.css';
import Message from './message.js';

class App extends Component {
	/*
	 * TODO
	 * Get navigator name
	 * input message
	 * display messages with time
	 * trigger sending event
	 * sort by time
	 * 
	 * Extend
	 * search by text
	 * 
	 * my 
	 */
	
	constructor(props){
		super(props);
		
		this.state = {
			messages: [],
			currentMessage:{},
			response: false,
			endpoint: "http://127.0.0.1:4001"
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	componentDidMount() {
		const { endpoint } = this.state;
		const socket = socketIOClient(endpoint);
		socket.on("FromAPI", data => this.setState({ response: data }));


	}
	
	handleClick(){
		let messages = this.state.messages;
		
		messages.push(this.state.currentMessage);
		this.setState({messages:messages});
		console.log(messages);
	}
	
	handleInputChange(event){
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		
		const userName = 'Bob';
		
		let date = Date.now();
						
		this.setState( { currentMessage: { text:value, time:date, name:userName } },()=>{
			
		} );
		
	}
	
  render() {
	  
	let messages = this.state.messages;
	
	let elements = [];

	for(let m in messages){
		elements.push(<Message key={m} index={m} message={messages[m]} />	);

	}

	  
    return (
      <div className="App">
        <header className="App-header">
				
				<div className="chat container-fluid">
				
					<div className="chat__messages row align-items-end">
							<div className="">
								{elements}
							</div>
					</div>
					<div className="chat__input">
						<div className="input-group mb-3">
						  <input type="text" className="form-control" onChange={this.handleInputChange} placeholder="message" aria-label="message" aria-describedby="send-btn"/>
						  <div className="input-group-append">
							<button className="btn btn-outline-secondary" type="button" id="send-btn" onClick={()=> this.handleClick() }>Button</button>
						  </div>
						</div>
					</div>
				</div>
        </header>
      </div>
    );
  }
}

export default App;
