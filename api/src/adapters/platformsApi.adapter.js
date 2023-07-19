import axios from "axios"
const { API_KEY } = process.env;

function PlatformApi() {
    axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(({data, status}) => {})
}

export default PlatformApi