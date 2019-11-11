import React from 'react'

export default class GitSearch extends React.Component{
	state = {
		search: []
	}
	render(){
		
		return(
			<div>
				<form onSubmit={event =>this.handleSubmit(event)}>
					<input onChange={this.handleChange} searchtype='text' value={this.state.search}/>
					<button type='submit'>Find Gifs</button>
				</form>
			</div>
		)
	}

	handleSubmit = event =>{
		event.preventDefault()
		this.props.onSubmit(this.state.search)
	}

	handleChange = event => {
		this.setState({search: event.target.value})
	}

}