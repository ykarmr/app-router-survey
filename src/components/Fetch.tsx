"use client";

import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [state, setState] = useState<object | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await data.json();
      setState(json);
    })();
  }, []);

  return state;
};
export function Fetch() {
  const data = useFetch();

  if (!data) {
    return <div>loading</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}
