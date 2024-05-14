// authCallbacks.js
export const signInCallback = async (user, account, metadata) => {
  // Handle sign-in logic here
  console.log("User signed in:", user);
  // You can perform additional logic here
};

export const signOutCallback = async (user, account, metadata) => {
  // Handle sign-out logic here
  console.log("User signed out:", user);
  // You can perform additional logic here
};
