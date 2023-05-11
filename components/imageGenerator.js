import { get } from 'axios';

// Google Image Generator function
const apiKey = 'AIzaSyBWDFmAF4Bx7PpSvccF_ebRe2kBWGqj11c';
const customSearchEngineID = '366ab8c111ef24e80';

async function fetchImageLink(query) {
  try {
    const response = await get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: apiKey,
        cx: customSearchEngineID,
        q: query,
        searchType: 'image',
        imgSize: 'medium',
        num: 1,
      },
    });

    if (response.data.items && response.data.items.length > 0) {
      const imageUrl = response.data.items[0].link;
      console.log('Image URL:', imageUrl);
      return imageUrl;
    } else {
      console.log('No images found for the given query.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
}

export default fetchImageLink