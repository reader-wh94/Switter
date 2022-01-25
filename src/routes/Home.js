import React, { useEffect, useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [sweet, setSweet] = useState("");
  const [sweets, setSweets] = useState([]);
  
  const getSweets = async() => {
    const dbSweets = await dbService.collection("sweets").get();
    
    dbSweets.forEach((document) => {
      const sweetObject = {
        ...document.data(),
        id: document.id,
      };
      setSweets((prev) => [sweetObject, ...prev]);
    });
  };

  useEffect(() => {
   getSweets();
  }, []);

  const onSubmit = async(event) => {
    event.preventDefault();
    await dbService.collection("sweets").add({
       sweet: sweet,
       createdAt: Date.now(),
    });
    setSweet("");
  };
  
  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setSweet(value);
  };
  console.log(sweets);

  return (
    <div>
    <form onSubmit={onSubmit}>
      <input type="text" onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
      <input type="submit" value="Sweet" />
    </form>
    <div>
      {sweets.map((sweet) =>
        <div key={sweet.id}>
          <h4>{sweet.sweet}</h4>
        </div>
      )}
    </div>
  </div>

  );
}

export default Home;