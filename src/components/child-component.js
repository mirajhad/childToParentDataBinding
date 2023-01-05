import React, { useState } from "react";
export function Child(props) {
  const [data, setData] = useState("hiii");
  function dataHandle() {
    props.dataSend(data);
  }
  return (
    <div>
      <button onClick={dataHandle}>click</button>
    </div>
  );
}
