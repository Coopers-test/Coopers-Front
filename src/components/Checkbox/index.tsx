import { useListContext } from "../../context/ListContext";
import { IListItem } from "../BoxList/ItemList";
import { CheckboxWrapper } from "./styles";

const Checkbox = ({ task, setColor, checked }: IListItem) => {
  const { updateStatusTask, deleteTask } = useListContext();

  const onChange = () => {
    task.status === "todo"
      ? updateStatusTask(task.id, "done")
      : updateStatusTask(task.id, "todo");
  };

  return (
    <CheckboxWrapper setColor={setColor}>
      <label htmlFor="checkbox">
        <input type="checkbox" checked={checked} onChange={() => onChange()} />
        <div className="description--delete">
          {task.description}
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
