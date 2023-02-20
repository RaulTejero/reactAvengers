import { useEffect } from "react";

export const List = ({ list }) => {
  useEffect(() => {
    console.log(list);
  }, []);
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
