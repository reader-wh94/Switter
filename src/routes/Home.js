import React from "react";
import { useState } from "react/cjs/react.development";

const Home = () => {
  const [sweet, setSweet] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setSweet(value);
  };

  return (
    <div>
    <form>
      <input type="text" onChange={onChange} placeholder="What's on your mind?" maxLength={120} />
      <input type="submit" value="Sweet" />
    </form>
  </div>

  );
}

export default Home;