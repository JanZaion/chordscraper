//src for apis: https://github.com/public-apis/public-apis
import axios from 'axios';
import fs from 'fs';
import { urls } from './urls';

// const songsterr: string = 'https://www.songsterr.com/a/ra/songs.json?pattern=Marley';

const writeSingleResponse = async (url: string, querry: string, filename = 'resp'): Promise<void> => {
  const res = await axios.get(`${url}?${querry}`);
  const data = res.data;
  const json = JSON.stringify(data, null, 4);
  fs.writeFileSync(`./responses/${filename}.json`, json);
};

writeSingleResponse(urls.songsterr, 'pattern=Marley', 'songsterr');
