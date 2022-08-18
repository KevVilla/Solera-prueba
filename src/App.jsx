import "./App.css";

import { ServicesProvider } from "./Context/ServicesProvider";

import TitlePage from "./Components/TitlePage/TitlePage";
import Header from "./Components/Header/Header";
import MainContainer from "./Components/MainContainer/MainContainer";

function App() {
  return (
    <ServicesProvider>
      <div className="App w-screen h-screen">
        <TitlePage>Servicios</TitlePage>
        <Header />
        <MainContainer />
      </div>
    </ServicesProvider>
  );
}

export default App;
