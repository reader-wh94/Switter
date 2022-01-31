import React, { useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  }

  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if(userObj.displayName !== newDisplayName) {
      const response = await userObj.updateProfile({
        displayName: newDisplayName,
      });
    }
  }

  return(
    <>
    <form onSubmit={onSubmit}>
      <input tpye="text" onChange={onChange} placeholder="Display name" value={newDisplayName} />
      <input type="submit" value="Update Profile" />
    </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
}
export default Profile;