import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Graphism from "../../assets/Graphism_left.svg";
import { useListContext } from "../../context/ListContext";
import BoxList from "../BoxList";
import { SectionList } from "./styles";

const TodoSection = () => {
  const { tasksDone } = useListContext();
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  const myRef = useRef(null);

  return (
    <SectionList id="to--list">
      <div className="blank--div"></div>
      <div className="title--list--container">
        <h2>To-do List</h2>
        <p>
          Drag and drop to set your main priorities, check when done and create
          what's new.
        </p>
      </div>

      <div className="container--box--list">
        {isDesktop && (
          <img src={Graphism} alt="Triangles to decorate the page" />
        )}
        <BoxList
          title="To-do"
          subtitle="Take a breath."
          subtitleSecond="Start doing."
          setColor="var(--orange)"
          checked={false}
        />
        <BoxList
          title="Done"
          subtitle="Congratulations!"
          subtitleSecond={`You have done ${tasksDone.length} ${
            tasksDone.length === 1 ? "task" : "tasks"
          }.`}
          setColor="var(--light-green)"
          checked={true}
        />
      </div>
    </SectionList>
  );
};

export default TodoSection;
