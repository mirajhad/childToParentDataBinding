import { useState } from "react";
export default function Child(props) {
  const [data, sendData] = useState("hii");
  function sendData() {
    props.cb(data);
  }
  return (
    <>
      <button onClick={sendData}>click</button>
    </>
  );
}
