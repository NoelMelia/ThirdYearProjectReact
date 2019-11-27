import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../App.css';
class ComicItem extends React.Component{

  constructor(){
    super();
    this.DeleteComic = this.DeleteComic.bind(this);
  }
  //Deleting the object by using the id and finding it and also reloading the page
  DeleteComic(e){
    alert("Deleted");
    console.log("delete clicked");
    axios.delete("http://localhost:4000/api/comics/"+this.props.comic._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();
  }

    render(){
        return(
          <Container>
            <Row>
                <Column>
                    <div  >
                    <div >
                      <div >
                        <img  src={this.props.comic.poster} alt="Error Loading Image" width='200px'/>
                        <div >
                          <h3 className="card-title">{this.props.comic.title}</h3>   
                          <p className="card-text">Year Released: {this.props.comic.year}</p>
                        </div>
                        {/*Updating and deleting buttons*/ }
                        <Link to={"/update/" + this.props.comic._id} className="btn btn-primary">Update</Link>
                        <Button variant="danger" onClick={this.DeleteComic}>Delete</Button>
                      </div>
                    </div>
                  </div>
                </Column>
            </Row>
          </Container>
        )
    }
}
export default ComicItem;