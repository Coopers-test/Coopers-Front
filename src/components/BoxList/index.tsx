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
  const { tasks } = useListContext();

  return (
    <BoxListContainer setColor={setColor}>
      <div className="list--center">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {subtitleSecond && <p>{subtitleSecond}</p>}
      </div>
      <div className="box--list--items">
        {tasks?.map((task, index) => (
          <ItemList
            key={index}
            task={task}
            setColor={setColor}
            checked={checked}
          />
        ))}
      </div>
      <div className="list--center">
        <Button
          backgroundColor="var(--black)"
          borderRadius="10px"
          color="var(--white)"
          colorHover="(--gray)"
          fontSize="24px"
          fontWeight="600"
          height="64px"
          width="300px"
        >
          erase all
        </Button>
      </div>
    </BoxListContainer>
  );
};

export default BoxList;
