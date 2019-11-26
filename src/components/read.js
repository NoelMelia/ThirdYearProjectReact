import React from 'react'
import Comics from './comics';
import axios from 'axios';
import '../App.css';

class Read extends React.Component{
    constructor(){
        super();
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }
    state = {
        comics: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/comics')
        .then((response)=>{
            this.setState({comics: response.data.comics})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/comics')
        .then((response)=>{
            this.setState({comics: response.data.comics})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    render(){
        return(
            
            <div>
                <h1>Comic Books</h1>
                <Comics myComics={this.state.comics} ReloadDataMethod={this.ReloadDataMethod}></Comics>
            </div>
            
        );
    }
}
export default Read;