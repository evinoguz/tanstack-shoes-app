import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center w-1/3 h-[300px] bg-gray-200 rounded-lg">
      <BiError size={80} className="text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Bir Hata Oluştu</h1>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyiniz veya anasayfaya dönünüz.
      </p>
      <Link
        to="/"
        className="bg-red-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-red-600 transition duration-300"
      >
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default Error;
