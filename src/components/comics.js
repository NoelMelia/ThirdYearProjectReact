import React from 'react';
import ComicItem from './comicItem';

class Comics extends React.Component{

    render(){
        return this.props.myComics.map((comic)=>{
            //console.log({movie});
            return <ComicItem key={comic._id} comic={comic} 
            ReloadDataMethod={this.props.ReloadDataMethod}></ComicItem>
        });
    }
}
export default Comics;