const allRoles = {
  user: ['GET_CATEGORY','GET_PRODUCTS'],
  admin: ['MANAGE_ALL_CATEGORIES','GET_USERS', 'GET_PRODUCTS','MANAGE_USERS','MANAGE_ALL_PRODUCTS','GET_CATEGORY','EDIT_SELF_CATEGORY'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
