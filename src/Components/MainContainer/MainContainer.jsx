import CardsContainer from "../CardsContainer/CardsContainer";
import FormContainer from "../FormContainer/FormContainer";

import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main-container overflow-x-hidden w-full h-full py-4 px-10 ">
      <CardsContainer />
      <FormContainer />
    </div>
  );
};

export default MainContainer;
