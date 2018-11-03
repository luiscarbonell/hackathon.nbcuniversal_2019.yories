/**
 * This component helps create an interactive Google Map Background
 *
 * CHECK: https://www.npmjs.com/package/google-maps-react
 */
import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initial Center of Map
      position: {
        lat: 25.7617,
        lng: -80.1918
      },
      
      // Initial Markers on Map
      markers: [
        {
          name: "Ingraham Building",
          title: "#hackathon #miami",
          position: {
            lat: 25.7737859,
            lng: -80.1899627
          }
        },
        {
          name: "Monarc at Met 3",
          title: "#hackathon #entrepreneur",
          position: {
            lat: 25.7721236,
            lng: -80.1894522
          }
        }
      ]
    };
  }

  /**
   * CHECK: https://www.npmjs.com/package/google-maps-react#onclick
   */
  onMarkerClick(props, map, event) {
    console.log("Latitude: ", event.latLng.lat());
    console.log("Longitude: ", event.latLng.lng());
  }

  render() {
    let markers = this.state.markers.map(marker => {
      return (
        <Marker
          key={`marker_${marker.name}`}
          name={marker.name}
          position={marker.position}
          title={marker.title}
          onClick={this.onMarkerClick}
        />
      );
    });

    return (
      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{
          lat: this.state.position.lat,
          lng: this.state.position.lng
        }}
        style={{ width: "600px", height: "400px" }}
      >
        {markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA8BwpKOR2N1Orq_yrBYG9Isy2Vm3aKd-k"
})(MapContainer);
