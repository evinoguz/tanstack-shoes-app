import { useEffect } from "react";
import { numbers } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

export type FilterProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const Size = ({ selected, setSelected }: FilterProps) => {
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    if (selected.length > 0) {
      params.set("size", selected.join(","));
    } else {
      params.delete("size");
    }
    setParams(params);
  }, [selected]);

  const toggle = (num: string) => {
    const found = selected.includes(num);

    if (!found) {
      setSelected([...selected, num]);
    } else {
      setSelected(selected.filter((i) => i !== num));
    }
  };

  return (
    <div className="lg:mt-5">
      <h2 className="mb-4">Numara</h2>
      <div className="grid grid-cols-5 gap-4">
        {numbers.map((num, i) => {
          const found = selected.includes(num);
          return (
            <p
              key={i}
              onClick={() => toggle(num)}
              className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 ${
                found ? "bg-gray-dark text-white" : "bg-white text-gray-dark"
              }`}
            >
              <span>{num}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Size;
