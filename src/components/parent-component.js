import React from "react";
import { Child } from "./child-component";
export function Parent() {
  function dataSet(data) {
    console.log(data);
  }
  return <Child dataSend={dataSet} />;
}
