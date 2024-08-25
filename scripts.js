function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: -6.274478, lng: 106.744805 }, // Pusat peta
    });

    // Titik 1
    const marker1 = new google.maps.Marker({
        position: { lat: -6.274478, lng: 106.744805 },
        map: map,
        title: "Titik 1"
    });

    // Titik 2
    const marker2 = new google.maps.Marker({
        position: { lat: 7.754576, lng: 110.378531 },
        map: map,
        title: "Titik 2"
    });
}

function goToLocation(lat, lng) {
    var location = new google.maps.LatLng(lat, lng);
    map.setZoom(15); // Zoom ke lokasi
    map.setCenter(location); // Pusatkan peta ke lokasi
  }
  
// Inisialisasi peta saat halaman dimuat
window.onload = initMap;
