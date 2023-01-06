import { Child } from "./child";
export default function Parent() {
  function handleData(data) {
    console.log(data);
  }
  return (
    <>
      <Child cb={handleData} />
    </>
  );
}
