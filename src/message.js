import React, { Component } from 'react';

class Message extends Component {
	
	constructor(props){
		super(props);
		
		this.state = {
			message: props.message
		};
		
	}
	
	  render() {
		  return(
			<div   >
				<div  role="alert">
					<div className="alert alert-secondary" role="alert">
						<div className="row justify-content-between">
							<div className="col">
								<span className="badge badge-secondary">{this.state.message.name}</span>
							</div>	
							<div className="col">
								<span className="badge badge-secondary">{this.state.message.time}</span>
							</div>
						</div>
						{this.state.message.text}
					</div>		
				</div>	
			</div>	
				  );
	  }
	
};

export default Message;