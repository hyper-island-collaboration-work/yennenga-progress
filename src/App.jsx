import Partners from "./components/Partners";
import ProjectCardList from "./components/Projects/ProjectCardList";
import ReadyToTakeAction from "./components/ReadyToTakeAction";
import Footer from "./components/Footer"


function App() {
  return (
    <div className="">
      <ProjectCardList />
      <Partners />  
      <ReadyToTakeAction />
      <Footer/>
    </div>
  );
}

export default App;
