import { Platform } from "../models/index.js";
import platformApi from "../adapters/platformsApi.adapter.js";

function platform(req, res){
    Platform.
    res.json({msg: "ruta platforms"})
}
export default platform;