"use client";

import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";

const GoogleMaps: NextPage = ({ longitude, latitude }: any) => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: latitude, lng: longitude }), []);

  const locations = [
    {
      name: "Marker 1",
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
    },
    // Możesz dodać więcej lokalizacji, jeśli chcesz pokazać więcej pinezek
  ];

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA5Abai4kFDx1P1ZvK5EQg9d24cCqVXOT0" as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center my-10">
      <div className="w-full h-[400px] p-6 rounded-lg bg-gray-100 border">
        <GoogleMap
          options={mapOptions}
          zoom={16}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          onLoad={() => console.log("Map Component Loaded...")}
        >
          <Marker position={mapCenter} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMaps;
