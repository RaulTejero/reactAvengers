import { List } from "./List";
import { Title } from "./Title";

export const Main = ({title ="Titulo",  list }) => {
  return (
    <div>
      <Title value={title}/>
      <List list={list}></List>
    </div>
  );
};
