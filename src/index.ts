//src for apis: https://github.com/public-apis/public-apis
import axios from 'axios';
import fs from 'fs';
import { urls } from './urls';

const writeSingleResponse = async (url: string, filename = 'resp'): Promise<void> => {
  const res = await axios.get(url);
  const data = res.data;
  const json = JSON.stringify(data, null, 4);
  fs.writeFileSync(`../responses/${filename}.json`, json);
};

/**
 * Unslash what you want to explore.
 * Internal comment structure : site, returns chords
 */
const callNwrite = (async (): Promise<void> => {
  writeSingleResponse(urls.songsterr, 'songsterr'); //https://www.songsterr.com/, only info on whether its available on the site
  writeSingleResponse(urls.discogs, 'discogs'); //https://www.discogs.com/, no chords
  writeSingleResponse(urls.lyricsovh, 'lyricsovh'); //https://lyrics.ovh/, no chords
  writeSingleResponse(urls.theaudiodb, 'theaudiodb'); //https://www.theaudiodb.com/, no chords
})();
