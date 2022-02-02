import React, { useState } from "react";
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
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
      refreshUser();
    }
  }
  
  return(
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input 
          type="text" 
          autoFocus 
          onChange={onChange} 
          placeholder="Display name" 
          value={newDisplayName} 
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>
        <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
          Log Out
        </span>
    </div>
  );
}
export default Profile;