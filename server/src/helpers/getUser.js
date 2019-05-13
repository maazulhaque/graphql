import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);
import uuid62 from 'uuid62';


export default async function getUser(id) {
  //uuid62 returns a base62 id of 22 characters always
  if (id.length == 22){
    id = uuid62.decode(id)
  }
  let data = await readFile(`./data/users/${id}.json`, 'utf8');
  data = JSON.parse(data);
  data.id = uuid62.encode(data.id)
  return data;
}
