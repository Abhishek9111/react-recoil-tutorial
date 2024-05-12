import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { useMemo } from "react";
import { countAtom, evenSelector } from "./store/atoms/count";
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRenderer />
    </div>
  );
}
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);
  // if (count % 2 == 0) {
  //   return <div>It is even</div>;
  // }
  // const isEven = useMemo(() => {
  //   return count % 2 == 0;
  // }, [count]);
  return <div>{isEven ? "It is even" : "It is odd"} </div>;
}
function Buttons() {
  // const [count,setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
