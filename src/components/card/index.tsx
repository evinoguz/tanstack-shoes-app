import { Link } from "react-router-dom";
import { Shoe } from "../../types";
import calcDiscount from "../../utils/calcDiscount";
import Badge from "./badge";

const Card = ({ item }: { item: Shoe }) => {
  return (
    <div className="flex flex-col justify-between bg-white rounded-[16px] lg:rounded-[28px] p-4 lg:p-6 shadow-md  max-h-[420px]">
      <div>
        <div className="relative">
          <Badge discount={item.discount} />
          <img
            src={item.picture[0]}
            alt={item.name}
            className="object-cover w-full h-[180px] sm:h-[200px] lg:h-[250px] rounded-lg"
          />
        </div>

        <h2 className="font-bold line-clamp-2 mt-3 lg:mt-4 mb-2 lg:mb-4 text-base lg:text-lg">{item.name}</h2>
      </div>

      <Link
        to={`/detail/${item.id}`}
        className="bg-gray-dark text-white font-medium px-4 py-2 rounded-[8px] transition hover:bg-black text-center mt-3 lg:mt-5"
      >
        Ürünü Görüntüle -{" "}
        {item.discount && (
          <span className="hidden sm:inline line-through text-orange-300 pe-2 text-sm">(${item.price})</span>
        )}
        <span className={"text-yellow text-lg"}>${calcDiscount(item.price, item.discount)}</span>
      </Link>
    </div>
  );
};

export default Card;
