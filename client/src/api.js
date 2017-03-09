import content from "../data/content.json"

const getContentApi = function(language = 'es') {
    return content.filter(obj => obj.lang === language)[0];
  }
export default getContentApi;