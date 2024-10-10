import { useState } from "react";
import { colors } from "../../utils/constants";

const Color = ({ data }: { data: string }) => {
  const [selected, setSelected] = useState<string>("");
  const arr = data.split(",");

  const toggle = (item: string) => {
    if (selected === item) {
      setSelected("");
    } else {
      setSelected(item);
    }
  };

  return (
    <div>
      <h2 className="mb-2">Renkler</h2>
      <div className="flex gap-6">
        {arr.map((item, key) => {
          const color = colors.find((i) => i.id === item);
          const found = selected === item;
          return (
            <div
              key={key}
              onClick={() => toggle(item)}
              style={{
                background: color?.code || "gray",
                boxShadow: found ? `0px 4px 12px 4px ${color?.code || "rgba(0, 0, 0, 0.3)"}` : "none",
              }}
              className="h-8 w-8 rounded-full cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Color;
