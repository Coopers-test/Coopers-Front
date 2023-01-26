import { useMediaQuery } from "react-responsive";
import { SectionList } from "./styles";

const TodoSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

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
      {/* Aqui vai o outro componente */}
    </SectionList>
  );
};

export default TodoSection;
