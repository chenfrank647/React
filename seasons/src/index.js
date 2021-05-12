import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ''};   
    }
    
    //React mandates render method for each component
    render(){   
        if(this.state.errorMessage){
            return <div>Error: {this.state.errorMessage} </div>
        } 
        else if(this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        else {
            return <div>Loading...</div>
        }
        
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //call setState when we update it
                this.setState({lat: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }
    componentDidUpdate(){
        console.log('Updated')
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);