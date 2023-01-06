import { useState } from "react";
export default function Child(props) {
  const [data, sendData] = useState("hii");
  function dataReceive() {
    props.cb(data);
  }
  return (
    <>
      <button onClick={dataReceive}>click</button>
    </>
  );
}
