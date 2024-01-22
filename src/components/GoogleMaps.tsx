"use client";

import { useLoadScript, GoogleMap, Marker, type Libraries  } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo } from "react";

type GoogleMapsProps = {
  longitude: number,
  latitude: number
}

export const GoogleMaps: NextPage<GoogleMapsProps> = ({ longitude, latitude }) => {
  const libraries: Libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA5Abai4kFDx1P1ZvK5EQg9d24cCqVXOT0" as string,
    libraries: libraries,
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

