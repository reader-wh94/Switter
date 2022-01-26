import { dbService } from "fbase";
import React from "react";

const Sweet = ({ sweetObj , isOwner}) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this sweet?");
    console.log(ok);
    if(ok) {
      await dbService.doc(`sweets/${sweetObj.id}`).delete();
    }
  }


  return (
    <div>
      <h4>{sweetObj.text}</h4>
      {isOwner && 
        <>
          <button onClick={onDeleteClick}>Delete Sweet</button>
          <button>Edit Sweet</button>
        </>
      }
    </div>
  );
}

export default Sweet;