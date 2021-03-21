import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
    static defaultProps = {
        center: {
            lat: 24.92,
            lng: 89.94
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    // bootstrapURLKeys={`{ key: AIzaSyDP59z8GeEAecMW6HXXI8UQz08kaJfO3wg }`}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={24.927307}
                        lng={89.947877}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Gmap;