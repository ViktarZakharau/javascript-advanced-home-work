function getCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        'latitude': position.coords.latitude,
        'longitude': position.coords.longitude
      });
    });
  });
}

getCoordinates()
  .then((coord) => {
    console.log(coord.latitude);
    console.log(coord.longitude);
  })
  .catch((err) => console.error(err));
