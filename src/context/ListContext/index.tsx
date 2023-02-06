import {
  useState,
  createContext,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { api } from "../../services";

interface IListContext {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  tasksToDo: ITask[];
  tasksDone: ITask[];
  updateStatusTask: (id: string, newStatus: "todo" | "done") => void;
  createTask: (data: string) => void;
  newTask: string;
  setNewTask: Dispatch<SetStateAction<string>>;
  deleteAllTasks: (tasksList: ITask[]) => void;
  deleteTask: (id: string) => void;
}

export interface IProviderProps {
  children: React.ReactNode;
}

interface ITaskRes {
  data: ITask[];
}
interface ITaskReq {
  description: string;
  status: "todo" | "done";
}

export interface ITask extends ITaskReq {
  id: string;
  created_at: string;
  updated_at: string;
}
const ListContext = createContext({} as IListContext);

export const ListContextProvider = ({ children }: IProviderProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [tasksToDo, setTasksTodo] = useState<ITask[]>([]);
  const [tasksDone, setTasksDone] = useState<ITask[]>([]);

  const getTasks = async () => {
    await api
      .get("/tasks")
      .then((res: ITaskRes) => setTasks(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    const splitTasks = () => {
      const tasksTodoFilter = tasks.filter((task) => task.status === "todo");
      setTasksTodo(tasksTodoFilter);

      const tasksDoneFilter = tasks.filter((task) => task.status === "done");
      setTasksDone(tasksDoneFilter);
    };
    splitTasks();
  }, [tasks]);

  const updateStatusTask = (id: string, newStatus: "todo" | "done") => {
    api
      .patch(`/tasks/${id}`, { status: newStatus })
      .then(() => getTasks())
      .catch((err) => console.log(err));
  };

  const createTask = (data: string) => {
    if (data !== "") {
      api
        .post(`/tasks/`, { description: data })
        .then(() => getTasks())
        .catch((err) => console.log(err));
    }
  };

  const deleteAllTasks = (tasksList: ITask[]) => {
    tasksList.forEach((task) => {
      const id = task.id;
      api.delete(`/tasks/${id}`).catch((err) => console.log(err));
    });
    getTasks();
  };

  const deleteTask = (id: string) => {
    api
      .delete(`/tasks/${id}`)
      .then(() => getTasks())
      .catch((err) => console.log(err));

    getTasks();
  };

  return (
    <ListContext.Provider
      value={{
        tasks,
        setTasks,
        tasksToDo,
        tasksDone,
        updateStatusTask,
        createTask,
        newTask,
        setNewTask,
        deleteAllTasks,
        deleteTask,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
