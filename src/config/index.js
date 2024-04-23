import rawConfig from "./config.json";

const mediaURL = "https://raw.githubusercontent.com/PRX-Kinodynamic/PRX-Kinodynamic.github.io/main/media/";
const localMediaURL = "";

const updatedConfig = JSON.stringify(rawConfig)
  .replaceAll("%MEDIA_URL%", mediaURL)
  .replaceAll("%LOCAL_MEDIA_URL%", localMediaURL);

export default JSON.parse(updatedConfig);
