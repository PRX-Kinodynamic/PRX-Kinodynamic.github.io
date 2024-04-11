import rawConfig from "./config.json";

// const mediaURL = "https://raw.githubusercontent.com/sumanth-tangirala/personal-webpage/main/media";
// const docsURL = `https://docs.google.com/viewer?url=${mediaURL}`;

const updatedText = JSON.stringify(rawConfig)
  // .replaceAll("%MEDIA_URL%", mediaURL)
  // .replaceAll("%DOCS_URL%", docsURL);

export default JSON.parse(updatedText);
