import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Marker } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYWxleGlzZ2xlejc4IiwiYSI6ImNrb2o5d2t5cjB0NmsydnE0b3plOHVyanUifQ.CwKwbpUrYACqnJRSD0sz1Q'; // Set your mapbox token here

export default class Mapa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 19.6129898,
                longitude: -99.3404154,
                zoom: 15,
                bearing: 0,
                pitch: 0
            }
        };
    }

    render() {
        return (
            <MapGL
                {...this.state.viewport}
                width="100%"
                height="50vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={viewport => this.setState({ viewport })}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Marker latitude={19.6129898} longitude={-99.3404154} offsetLeft={-20} offsetTop={-10}>
                    <div>
                        <img alt="" src="https://dragones.utfv.edu.mx/wp-content/uploads/2019/03/dragones-blanco.png" width="10%"/>
                    </div>
                </Marker>
            </MapGL>
        );
    }
}