import { useState } from "react";

export default function useSetState(initialState) {
  const [data, setData] = useState(initialState);

  function setState(value) {
    setData({ ...data, ...value });
  }

  return [data, setState];
}
