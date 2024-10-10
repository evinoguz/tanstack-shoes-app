import { useEffect } from "react";
import { colors } from "../../utils/constants";
import { FilterProps } from "./size";
import { useSearchParams } from "react-router-dom";

const Color = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const updatedParams = new URLSearchParams(params);
    if (selected.length > 0) {
      updatedParams.set("color", selected.join(","));
    } else {
      updatedParams.delete("color");
    }
    setParams(updatedParams);
  }, [selected, params, setParams]);

  const toggle = (color: string) => {
    const found = selected.includes(color);

    if (!found) {
      setSelected([...selected, color]);
    } else {
      setSelected(selected.filter((i) => i !== color));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Renkler</h2>
      <div className="grid grid-cols-5 gap-4">
        {colors.map((color) => {
          const found = selected.includes(color.id);
          return (
            <div
              key={color.id}
              onClick={() => toggle(color.id)}
              style={{ background: color.code }}
              className={`py-2 px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 text-transparent select-none  ${
                found ? "ring-[4px]" : ""
              }`}
            >
              .
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
