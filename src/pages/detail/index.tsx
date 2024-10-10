import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShoe } from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Shoe } from "../../types";
import Head from "./head";
import Color from "./color";
import Size from "./size";
import xss from "xss";
import { useEffect, useState } from "react";
import { SlBasketLoaded } from "react-icons/sl";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => getShoe(id as string),
  });
  const [selectedImage, setSelectedImage] = useState(data?.picture[0]);
  useEffect(() => {
    setSelectedImage(data ? data?.picture[0] : "");
  }, [data]);

  return (
    <div className="mt-8">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5 md:gap-0">
            <div className="lg:col-span-2 grid gap-4 rounded-[48px] w-full h-full">
              <div className="flex flex-col items-center justify-center">
                <div className="h-80 w-80 lg:w-[700px] lg:h-[400px] lg:ps-0 overflow-hidden rounded-lg shadow-lg">
                  <img src={selectedImage} alt="Selected product" className="w-full h-full object-cover" />
                </div>
                <div className="flex align-items-center justify-center gap-2 mt-4 p-3">
                  {data?.picture.map((image, index) => (
                    <div
                      key={index}
                      className={`h-20 w-20 lg:w-[160px] lg:h-[100px]  overflow-hidden rounded-lg cursor-pointer border-2 ${
                        selectedImage === image ? "border-blue-500" : "border-gray-200"
                      }`}
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Product ${index + 1}`}
                        className="w-full h-full object-cover bg-amber-950"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <Head data={data} />
              <Color data={data.color} />
              <Size data={data.size} />
              <div>
                <h2>Bu ürün hakkında</h2>
                <p
                  className="font-open my-4"
                  dangerouslySetInnerHTML={{
                    __html: xss(data.description),
                  }}
                />
              </div>
              <button className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-400 text-white py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300">
                <SlBasketLoaded />
                Sepete Ekle
              </button>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Detail;
