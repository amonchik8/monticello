import Glide from "@glidejs/glide";

const installMap = () => {
  const mymap = L.map("mapid").setView([40.6636, -73.8895], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(mymap);
  const myIcon = L.icon({
    iconUrl: 'marker.png',
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
  const marker = L.marker([40.6765, -73.9055], {icon: myIcon}).addTo(mymap);
};

document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    autoplay: 4000,
    breakpoints: {
      1279: {
        perView: 2,
      },
      1023: {
        perView: 1
      },
    }
  }).mount();
  new Glide(".header-glide", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 4000,
  }).mount();

  installMap();
});