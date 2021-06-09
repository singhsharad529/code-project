 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Project} from "./components/project";
import Header from "./components/header";
import Filter from "./components/filter";

function App() {
  return (
    <>
    <div className="Appdiv">
     <Header/>
     <Filter/>

     {/* <User_info_nav/> */}
     {/* <Card/>
     <Pagination/> */}
    </div>
   
      <Project/>
      <Project/>
      <Project/>
      <Project/>
     
    </>
  );
}

export default App;
