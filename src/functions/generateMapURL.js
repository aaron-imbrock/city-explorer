const generateCityMapURL = function(KEY,lat, lon, zoom=18, size='300x300', format) {
    return `https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${lat},${lon}&zoom=${zoom}&${size}`
}


https://maps.locationiq.com/v3/staticmap?key=<YOUR_ACCESS_TOKEN>&center=<latitude>,<longitude>&zoom=<zoom>&size=<width>x<height>&format=<format>&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>'>