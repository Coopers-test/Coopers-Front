import { useMediaQuery } from "react-responsive";

import Graphism from "../../assets/Graphism_left.svg";
import BoxList from "../BoxList";
import { SectionList } from "./styles";

const TodoSection = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <SectionList>
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
        />
        <BoxList
          title="Done"
          subtitle="Congratulations!"
          subtitleSecond="You have done x tasks."
          setColor="var(--light-green)"
          checked={true}
        />
      </div>
    </SectionList>
  );
};

export default TodoSection;
