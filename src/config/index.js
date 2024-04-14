import rawConfig from "./config.json";

const mediaURL = "https://raw.githubusercontent.com/PRX-Kinodynamic/PRX-Kinodynamic.github.io/main/media/";

const updatedConfig = JSON.stringify(rawConfig)
  .replaceAll("%MEDIA_URL%", mediaURL);

export default JSON.parse(updatedConfig);
