import fs from 'fs';
import util from 'util';
const writeFile = util.promisify(fs.writeFile);
const fileExists = util.promisify(fs.existsSync);
import { getUser } from './';

export default async function setUser(user) {
  try{
    fs.accessSync(`./data/users/${user.id}.json`, fs.F_OK)
    let currentUser = await getUser(user.id)
    const newUser = Object.assign(currentUser, user);
    return writeFile(`./data/users/${newUser.id}.json`, JSON.stringify(newUser));
  }catch(e){
    throw new Error(`Couldn’t find user with id ${user.id}`);
  }

}

