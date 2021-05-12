import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers:{
            Authorization: 'Client-ID _NYIF14yi0hxueU27zz0EFj1nuTMk-Cns1vV09plxS8'
        }
    });
}

    render(){
        return (
            <div className="ui container" style={{marginTop: '100px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
            );
    }   
}

export default App;