
const generateCityMapURL = (cityData, KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY, zoom = 4, size = '600x600', format = 'png', icon='large-red-cutout') => {
    return `https://maps.locationiq.com/v3/staticmap?key=${KEY}&center=${cityData.lat},${cityData.lon}&zoom=${zoom}&size=${size}&markers=icon:${icon}|${cityData.lat},${cityData.lon}&format=${format}`
}

export default generateCityMapURL;