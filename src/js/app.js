import Glide from "@glidejs/glide";

const installMap = () => {
  if (window.matchMedia("(min-width: 400px)").matches) {
    /* the viewport is at least 400 pixels wide */
  } else {
    /* the viewport is less than 400 pixels wide */
  }
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
    iconUrl: './assets/images/marker.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

const circle = L.circle([40.6800, -73.9005], {
      color: 'white',
      fillColor: '#fff',
      fillOpacity: 0.8,
      radius: 500
  }).addTo(mymap);

  const marker = L.marker([40.6800, -73.9005]/* , {icon: myIcon} */).addTo(mymap);
};

document.addEventListener("DOMContentLoaded", () => {
  new Glide(".glide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    gap: 30,
    autoplay: 4000,
    breakpoints: {
      1280: {
        perView: 2
      },
      1024: {
        perView: 1
      }
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