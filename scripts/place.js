const windChill = document.querySelector('#windChill');
const wind = 6;
const tempature = 62;

function calculateWindChill(temp, wind) {
    if (wind < 3 || temp > 50) {
        return "Na"
    }
    const chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16));
    return Math.round(chill);
}

windChill.innerHTML = calculateWindChill(tempature, wind);