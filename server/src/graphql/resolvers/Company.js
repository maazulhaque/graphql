import { getUsers } from '../../helpers';
import Query from './Query';

const allUsers =  getUsers()
export default {
  employees: async (root, args, { ctx }, info) => {
    let employees = [];
    let users = await allUsers
    employees =users.filter((user=> user.company && (user.company === root.id)))
    return employees;
  }
};
