import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UserDashBoard = () => {
  //   const user = useAuthState(auth);
  //

  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  if (error) {
    return (
      <div>
        <p>Error From user: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-success text-center"> Welcome {user?.email}</h1>
      <h2 className="text-danger text-center">{user?.displayName}</h2>
    </div>
  );
};

export default UserDashBoard;
