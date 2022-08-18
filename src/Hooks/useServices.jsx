import { useContext } from "react";
import ServicesContext from "../Context/ServicesProvider";

const useServices = () => {
  return useContext(ServicesContext);
};

export default useServices;
