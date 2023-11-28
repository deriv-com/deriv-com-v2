import React from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import 'leaflet/dist/leaflet.css';
import { Popup, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { markers } from './data';
import { createClusterCustomIcon } from './cluster-custom-icon';
import { customIcon } from './landmark-icon';

const LocationMap: React.FC = () => {
  return (
    <MapContainer
      className="h-[700px]"
      center={[15.3985665, 48.0895]}
      zoom={3}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker, index) => (
          <Marker position={marker.geocode} key={index} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default LocationMap;
