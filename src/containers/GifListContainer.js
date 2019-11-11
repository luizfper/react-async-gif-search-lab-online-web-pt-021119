import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{

	state = {
		gifs: []
	}

	render(){
		return (
			<div className='container'>
				<GifList gifs={this.state.gifs}/>
				<GifSearch onSubmit={query => this.handleSubmit(query)}/>
			</div>
		)
	}

	handleSubmit = query => {
		fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
		.then (response => response.json())
		.then (data => this.setState({gifs: data.data}))
	}
}

