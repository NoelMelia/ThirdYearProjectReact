import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css';

class Update extends React.Component {
  constructor(props) {
    super(props);
    //creating a new object to hold new details
    this.state = {
      Title: '',
      Year: '',
      Poster: '',
      _id: ''
    };
    //Binding
    this.editSubmit = this.editSubmit.bind(this);
    this.editComicTitleChange = this.editComicTitleChange.bind(this);
    this.editComicYearChange = this.editComicYearChange.bind(this);
    this.editComicPosterChange = this.editComicPosterChange.bind(this);
  }
 //The method gets the id number of object and returns the object id with other details   
  componentDidMount(){
    alert(this.props.match.params.id);
    axios.get('http://localhost:4000/api/comics/'+this.props.match.params.id)
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
//Changes the edit title details and stores it
  editComicTitleChange(e) {
    this.setState({ Title: e.target.value });
  }
//Changes the edit year details and stores it
  editComicYearChange(e) {
    this.setState({ Year: e.target.value });
  }
//Changes the edit image details and stores it
  editComicPosterChange(e) {
    this.setState({ Poster: e.target.value });
  }
// Once submit is clicked then the new details are pushed and replaced with new ones entered    
  editSubmit(e) {
    alert(this.state.Title + " ," + this.state.Year
      + " ," + this.state.Poster);
    e.preventDefault();
    //Creating the new comic
    const newComic = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }
    //Putting it into the object
    axios.put('http://localhost:4000/api/comics/'+this.state._id, newComic)
      .then()
      .catch();
      

  }
  render(){
    return(
      <Container>
        <Row>
          <Column>
            <div>
              <h1>Edit Details of Comic</h1>
              <form onSubmit={this.editSubmit}>
                <div >
                  <label>Comic Title</label>
                  <input
                  type='text'
                  className='form-control'
                  value={this.state.Title}
                  onChange={this.editComicTitleChange}>
                  </input>
                </div>
                <div className='form-group'>
                  <label>Comic Year</label>
                  <input
                  type='text'
                  className='form-control'
                  value={this.state.Year}
                  onChange={this.editComicYearChange}
                  ></input>
                </div>
                <div className='form-group'>
                  <label>Comic Poster Url</label>
                  <textarea
                  row='3'
                  className='form-control'
                  value={this.state.Poster}
                  onChange={this.editComicPosterChange}
                  ></textarea>
                </div>
                <div>
                  <input
                  type="submit"
                  value="Edit Comic">
                  </input>
                </div>
              </form>
            </div>
          </Column>
        </Row>
      </Container>
    )
  }
}
export default Update;