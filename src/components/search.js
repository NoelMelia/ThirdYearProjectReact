import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Comics from './comics';


class Search extends React.Component {
    constructor(){
        super();
        this.SearchComic = this.SearchComic.bind(this);
        this.handleComic = this.handleComic.bind(this);
        this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
        
    }
    state = {
        comics: [],
        search: ''
    };

    ReloadDataMethod(){
        axios.get('http://localhost:4000/api/comics/')
        .then((response)=>{
            this.setState({comics:response.data.comics})
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    
    SearchComic(e){
        axios.get("http://localhost:4000/api/comics/")
        .then((response)=>{
            this.setState({comics: response.data.comics})
            //console.log(response.data.comics);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    handleComic(e) {
        this.setState({ search: e.target.value });
        //console.log(g);
    }
    
    render() {
        return (
            <div>
                <div>
                    <h1>Search Comic Books</h1>
                    <input type="text" placeholder="Search"
                    value={this.search} onChange={this.handleComic}/> 
                    <Button  onClick={this.SearchComic} >Search</Button> 
                </div>
                <div>
                    {this.state.comics.title === this.search ?(
                        //if the data exists tried to get this working when the search just to print out the comic
                        <div>
                            <Comics myComics={this.state.comics} ReloadDataMethod={this.ReloadDataMethod}></Comics>
                        </div> 
                    ):(
                        <div></div>
                    )}
                </div>
            </div> 
        );
    }
}
export default Search;