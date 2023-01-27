import { useState, createContext, useContext } from "react";

interface IListContext {
  tasks: string[];
}

interface IProviderProps {
  children: React.ReactNode;
}

const ListContext = createContext({} as IListContext);

export const ListContextProvider = ({ children }: IProviderProps) => {
  const [tasks, setTasks] = useState<Array<string>>([
    "lavar a louça",
    "estudar",
    "fazer exercício",
    "testeeeeeeeeeeeeeee",
  ]);

  return (
    <ListContext.Provider value={{ tasks }}>{children}</ListContext.Provider>
  );
};

export const useListContext = () => useContext(ListContext);
