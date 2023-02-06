import { useRef } from "react";
import { ITask, useListContext } from "../../../context/ListContext";
import Checkbox from "../../Checkbox";
import { BoxItem } from "./styles";

export interface IListItem {
  task: ITask;
  setColor: string;
  checked?: boolean;
  draggable?: boolean;
  droppable?: boolean;
  index?: number;
}

const ItemList = ({ task, setColor, checked, draggable, index }: IListItem) => {
  const { tasksToDo, updateStatusTask } = useListContext();

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e: any, position: any) => {
    dragItem.current = position;
  };

  const dragEnter = (e: any, position: any) => {
    dragOverItem.current = position;
  };

  const drop = (e: any) => {
    const taskFound = tasksToDo.find((tasktodo) => tasktodo.id === task.id);

    updateStatusTask(taskFound!.id, "done");
  };

  return (
    <BoxItem
      draggable={draggable}
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
    >
      <Checkbox task={task} setColor={setColor} checked={checked} />
    </BoxItem>
  );
};

export default ItemList;
