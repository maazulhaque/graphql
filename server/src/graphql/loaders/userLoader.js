import { getUser } from '../../helpers';
import DataLoader from 'dataloader';

const getUsers = async (files) => files.map(filename => getUser(filename))
export const userLoader = new DataLoader((files) => getUsers(files), { cache: false })
