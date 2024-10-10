import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Shoe } from "../../types";
import Card from "../../components/card";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatParams";
import { MdSearchOff } from "react-icons/md";

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsStr = formatParams(paramsObj);

  const { isLoading, error, data } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsStr],
    queryFn: () => getShoes(paramsStr),
  });

  return (
    <div className="col-span-4 lg:col-span-3 flex align-items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : data?.length === 0 ? (
        <div className="flex items-center justify-center">
          <MdSearchOff size={40} className="text-red-500" />
          <span className="ml-3 text-red-700 font-semibold text-lg">Aradığınız kriterlere uygun ürün bulunamadı.</span>
        </div>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 w-full h-full">
          {data?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
