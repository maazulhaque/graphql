import { setUser } from '../../../helpers';
import fs from 'fs';

export default async function User(root, { user }, { ctx }, info) {
    await setUser(user);
    return true;
  }

  // Completed: 1 this throws a unfriendly (and potentially unsafe) error if a non-existnant user ID is entered.
  // how can we check for a non-existing user id and throw a more friendly error.

  // Completed: 2 why is this update overwriting existing user data? Need to fix this so that just data input is
  // updated rather than overwritting all the data.




// }
