import React from "react";

interface user {
  userid?: string;
  role?: string;
}
interface auth {
  token?: string;
  user?: user;
}
interface UserContext {
  auth?: auth;
  setRole: any;
}

let initContext: UserContext = {
  auth: {},
  setRole: (C: auth) => {},
};

export const Usercontext = React.createContext(initContext);
