export const hasRole = (user, allowedRoles = []) => {
  return allowedRoles.includes(user?.role);
};
