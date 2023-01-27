import { useState } from "react";
import { IListItem } from "../BoxList/ItemList";
import { CheckboxWrapper } from "./styles";

const Checkbox = ({ task, setColor, checked }: IListItem) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckboxWrapper setColor={setColor}>
      <label>
        <input
          type="checkbox"
          checked={checked ? checked : isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        {task}
      </label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
