import { ITask } from "../../../context/ListContext";
import Checkbox from "../../Checkbox";
import { BoxItem } from "./styles";

export interface IListItem {
  task: ITask;
  setColor: string;
  checked?: boolean;
}

const ItemList = ({ task, setColor, checked }: IListItem) => {
  const dragStarted = (e: any, id: string) => {
    e.dataTransfer.setData("todo", id);
  };
  return (
    <BoxItem draggable onDragStart={(e) => dragStarted(e, task.id)}>
      <Checkbox task={task} setColor={setColor} checked={checked} />
    </BoxItem>
  );
};

export default ItemList;
