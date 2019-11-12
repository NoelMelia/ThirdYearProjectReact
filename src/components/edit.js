import React from 'react';
import axios from 'axios';

class Edit extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          Title: '',
          Year: '',
          Poster: '',
          _id: ''
        };
    
        this.editSubmit = this.editSubmit.bind(this);
        this.editMovieTitleChange = this.editMovieTitleChange.bind(this);
        this.editMovieYearChange = this.editMovieYearChange.bind(this);
        this.editMoviePosterChange = this.editMoviePosterChange.bind(this);
      }
    
      componentDidMount(){
          alert(this.props.match.params.id);
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.title,
                Year:response.data.year,
                Poster:response.data.poster,
                _id:response.data._id
            })
            
        })
        .catch()
      }

      editMovieTitleChange(e) {
        this.setState({ Title: e.target.value });
      }
    
      editMovieYearChange(e) {
        this.setState({ Year: e.target.value });
      }
    
      editMoviePosterChange(e) {
        this.setState({ Poster: e.target.value });
      }
    
      editSubmit(e) {
        alert(this.state.Title + " ," + this.state.Year
          + " ," + this.state.Poster);
        e.preventDefault();
    
        const newMovie = {
          title: this.state.Title,
          year: this.state.Year,
          poster: this.state.Poster
        }
   
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then()
        .catch();
          
    
      }
    render(){
        return(
            <div>
                <h1>Hello from Edit component</h1>
                <form onSubmit={this.editSubmit}>
                <div className='form-group'>
                    <label>Movie Title</label>
                    <input
                    type='text'
                    className='form-control'
                    value={this.state.Title}
                    onChange={this.editMovieTitleChange}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Movie Year</label>
                    <input
                    type='text'
                    className='form-control'
                    value={this.state.Year}
                    onChange={this.editMovieYearChange}
                    ></input>
                </div>
                <div className='form-group'>
                    <label>Movie Poster Url</label>
                    <textarea
                    row='3'
                    className='form-control'
                    value={this.state.Poster}
                    onChange={this.editMoviePosterChange}
                    ></textarea>
                </div>
                <div>
                    <input
                    type="submit"
                    value="Edit Movie">
                    </input>
                </div>
            </form>
        </div>
        )
    }
 

}
export default Edit;