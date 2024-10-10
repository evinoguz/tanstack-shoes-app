import { FaSpinner } from "react-icons/fa"; // FontAwesome'dan bir simge

const Loader = () => {
  return (
    <div className="flex flex-col align-items-center justify-center">
      <FaSpinner className="animate-spin text-blue-500 w-16 h-16" />
    </div>
  );
};

export default Loader;
