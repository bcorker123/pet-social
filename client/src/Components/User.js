import React from "react";

function User({ user }) {
  return <div>{user.username ? user.username : "Not Logged In"}</div>;
}

export default User;
