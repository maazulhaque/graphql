import fs from 'fs';
import util from 'util';
import  {userLoader} from '../graphql/loaders';
import { getUser } from '../helpers';

const readDir = util.promisify(fs.readdir);


export default async function getUsers(name) {
  const files = await readDir('./data/users');
  const users = userLoader.loadMany(files.filter(filename => filename.includes('.json')).map(filename => filename.replace('.json', '')))
  if (name) {
    let temp = await users
    return temp.filter(user => user.name === name)
  }
  return users;
}
