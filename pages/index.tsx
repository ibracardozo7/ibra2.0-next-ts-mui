import Home from "./home";
import About from "./aboutMe";
import Portfolio from "./portfolio";
import ContactMe from "./contactMe";
import ButtonScroll from "../components/ButtonScroll";
import Services from "./services";

const Index = () => {  

  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <ContactMe />
      <ButtonScroll />
    </>
  );
};

export default Index;
