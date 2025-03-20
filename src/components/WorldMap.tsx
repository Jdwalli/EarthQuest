import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Feature, FeatureCollection } from "geojson";
import mapDataRaw from "../data/countries.json";
import { Layer, LeafletMouseEvent } from "leaflet"; 


const mapData: FeatureCollection = mapDataRaw as FeatureCollection;

console.log(mapData);

const WorldMap: React.FC = () => {
  // Ensure onEachCountry is correctly typed
  const onEachCountry = (country: Feature, layer: Layer) => {
    const name = country.properties?.ADMIN as string; 
    console.log(name);
    
    layer.bindPopup(name);

    layer.on({
      click: (event: LeafletMouseEvent) => {
        event.target.setStyle({
          color: "green",
          fillColor: "yellow",
          fillOpacity: 0.1
        });
      }
    });
  };

  return (
    <MapContainer style={{ height: "100vh", width: "100%" }} zoom={2} center={[20, 0]}>
      {/* Base map layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* GeoJSON Layer */}
      <GeoJSON data={mapData} onEachFeature={onEachCountry} />
    </MapContainer>
  );
};

export default WorldMap;
