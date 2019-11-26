import React, {Component} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Column from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class ApiComponent extends Component{
    constructor() {
        super();
        this.apiKey = '?apikey=62fd825f7cda72881097e65913c376c5';
        this.size = '/standard_fantastic';
        this.state = {
        series: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
    const response = await axios
        .get('http://gateway.marvel.com/v1/public/characters/1009165' + this.apiKey);

    const series = response.data.data.results[0].series.items;

    series.forEach((serie) => {
        this.getSerieThumbnail(serie);
    });
    }

    async getSerieThumbnail(serie) {
    const response = await axios.get(serie.resourceURI + this.apiKey)


    const serieInformation = response.data.data.results[0];
    console.log(serieInformation);
    const thumbnail = serieInformation.thumbnail;
    const title = serieInformation.title;
    const img = thumbnail.path + this.size + '.' + thumbnail.extension;
    console.log(img);


    this.setState({series: [...this.state.series, { img:img, title: title}]});
    } 
    render(){
        return(
            <Container>
                <Row>
                    <Column>
                        <h1>Comics Released from Marvel HeadQuaters</h1>
                        <div>
                            {this.state.series.map((serie, i) =>{
                                return <div>
                                    <div>
                                        <div>
                                        <img src={serie.img} alt="Error Loading Image"/>
                                        <div>
                                            <h3>{serie.title}</h3>      
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                })
                            }
                        </div>
                    </Column>
                </Row>
            </Container>
        );
    }
}