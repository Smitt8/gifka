import "./index.css";
import Api from "../components/api.js";
import {
  giphyConfig
} from "../utils/consts.js"

const api = new Api(giphyConfig);

api.loadTrending()
  .then(trends => {
    console.log(trends);
  })
  .catch(err => {
    console.log(err);
  })
