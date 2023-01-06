import { Child } from "./child";
export function Parent() {
  function handleData(data) {
    console.log(data);
  }
  return (
    <>
      <Child cb={handleData} />
    </>
  );
}
