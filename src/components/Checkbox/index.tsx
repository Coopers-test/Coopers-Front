import { useListContext } from "../../context/ListContext";
import { IListItem } from "../BoxList/ItemList";
import { CheckboxWrapper } from "./styles";

const Checkbox = ({ task, setColor, checked }: IListItem) => {
  const { updateStatusTask } = useListContext();

  const onChange = () => {
    task.status === "todo"
      ? updateStatusTask(task.id, "done")
      : updateStatusTask(task.id, "todo");
  };

  return (
    <CheckboxWrapper setColor={setColor}>
      <label>
        <input type="checkbox" checked={checked} onChange={() => onChange()} />
        {task.description}
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
