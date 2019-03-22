import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const { latitude, longitude } = this.props;

    new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: latitude, lng: longitude },
      zoom: 8
    });
  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id="map" />
    );
  }
}

export default Map;