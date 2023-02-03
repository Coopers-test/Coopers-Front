import { GrSend } from "react-icons/gr";

import { useListContext } from "../../context/ListContext";
import { Button } from "../Button/styles";
import ItemList from "./ItemList";
import { BoxListContainer } from "./styles";

interface IListProps {
  title: string;
  subtitle: string;
  subtitleSecond?: string;
  setColor: string;
  checked?: boolean;
}

const BoxList = ({
  title,
  subtitle,
  subtitleSecond,
  setColor,
  checked,
}: IListProps) => {
  const {
    tasksToDo,
    tasksDone,
    createTask,
    newTask,
    setNewTask,
    deleteAllTasks,
  } = useListContext();

  return (
    <BoxListContainer setColor={setColor}>
      <div className="list--center">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {subtitleSecond && <p>{subtitleSecond}</p>}
      </div>
      <div className="box--list--items">
        {checked === true
          ? tasksDone?.map((task, index) => (
              <ItemList
                key={index}
                task={task}
                setColor={setColor}
                checked={checked}
              />
            ))
          : tasksToDo?.map((task, index) => (
              <ItemList
                key={index}
                task={task}
                setColor={setColor}
                checked={checked}
              />
            ))}
      </div>
      {checked === false && (
        <div className="input--newTask">
          <input
            placeholder="Write your task here..."
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit" onClick={() => createTask(newTask)}>
            <GrSend />
          </button>
        </div>
      )}
      <div className="list--center">
        <Button
          backgroundColor="var(--black)"
          borderRadius="10px"
          color="var(--white)"
          colorHover="var(--gray)"
          fontSize="24px"
          fontWeight="600"
          height="64px"
          width="300px"
          onClick={() =>
            checked === false
              ? deleteAllTasks(tasksToDo)
              : deleteAllTasks(tasksDone)
          }
        >
          erase all
        </Button>
      </div>
    </BoxListContainer>
  );
};

export default BoxList;
