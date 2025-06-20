import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Involved from "../pages/get-involved/tasking-mamager/TaskingManager";
import About from "../pages/about/About";
import { Routes, Route } from "react-router";
import TaskingManager from "../pages/get-involved/tasking-mamager/TaskingManager";
import Validation from "../pages/get-involved/validation/Validation";
import FieldMapping from "../pages/get-involved/field-mapping/FieldMapping";
import AdvancedMapping from "../pages/get-involved/advanced-mapping/AdvancedMapping";
import TrainingMaterials from "../pages/organize-event/training-materials/TrainingMaterials";
import PlanningChecklist from "../pages/organize-event/training-materials/PlanningChecklist";
import Blog from "../pages/blog/Blog";
import Stats from "../pages/stats/Stats";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="get-involved/mapswipe" element={<About/>}/>
        <Route path="get-involved/tasking-manager" element={<TaskingManager/>}/>
        <Route path="get-involved/validation" element={<Validation/>}/>
        <Route path="get-involved/field-mapping" element={<FieldMapping/>}/>
        <Route path="get-involved/advanced-mapping" element={<AdvancedMapping/>}/>
        <Route path="organize-event/training-materials" element={<TrainingMaterials/>}/>
        <Route path="organize-event/planning-checklist" element={<PlanningChecklist/>}/>
        <Route path="blog/latest" element={<Blog/>}/>
        <Route path="/stats" element={<Stats/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
