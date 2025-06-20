import { useNavigate } from "react-router";
import "./navbar.css";
//import icon from 'https://www.missingmaps.org/assets/graphics/meta/MM_white_typography.svg'

export default function Navbar() {


    const navigate = useNavigate();

    function handletoMapSwipe (){
        navigate("get-involved/mapswipe")
    }
    function handletoTaskingManager (){
        navigate("get-involved/tasking-manager")
    }
    function handletoValidation (){
        navigate("get-involved/validation")
    }
    function handletoFieldMapping (){
        navigate("get-involved/field-mapping")
    }
    function handletoAdvanceMapping (){
        navigate("get-involved/advanced-mapping")
    }
                //Organize an Event
    function handletoTrainingMaterials (){
        navigate("organize-event/training-materials")
    }
    function handletoPlanningChecklist (){
        navigate("organize-event/training-materials")
    }
    function handletoTrainingMaterials (){
        navigate("organize-event/training-materials")
    }
                /////BLOG SECTION///////////////////
    function handletoBlog (){
        navigate("blog/latest")
    }
    function handletoTrainingMaterials (){
        navigate("organize-event/training-materials")
    }
    function handletoTrainingMaterials (){
        navigate("organize-event/training-materials")
    }
  return (
    <>
      <nav>
        <header>
          <img
            src="https://www.missingmaps.org/assets/graphics/meta/MM_white_typography.svg"
            alt="Missing Maps Logo"
          />
          Missing Maps
        </header>
        <div className="dropdown">
          <div className="btn">
            <button className="dropbtn">Get Involved</button>
          </div>
          <div className="dropdown-content">
            <a href="/get-involved/mapswipe" onClick={handletoMapSwipe} >MapSwipe</a>
            <a href="/get-involved/tasking-manager"  onClick={handletoTaskingManager}>Tasking Manager</a>
            <a href="/get-involved/validation" onClick={handletoValidation}>Validation</a>
            <a href="/get-involved/field-mapping" onClick={handletoFieldMapping}> Field Mapping</a>
            <a href="/get-involved/advanced-mapping" onClick={handletoAdvanceMapping}> Avdanced Mapping</a>
          </div>
        </div>
        <div className="dropdown">
          <div>
            <button className="dropbtn">Organize Event</button>
          </div>
          <div className="dropdown-content">
            <a href="/organize-event/training-materials" onClick={handletoTrainingMaterials}> Training Materials</a>
            <a href="/organize-event/planning-checklist" onClick={handletoPlanningChecklist}>Planning Checklist</a>
          </div>
        </div>
        <div className="dropdown">
          <div>
            <button className="dropbtn"> Blog </button>
          </div>
          <div className="dropdown-content">
            <a href="/blog/latest" onClick={handletoBlog}> Latest</a>
            {/* <a href="/blog/tasking"> Archive</a> */}
          </div>
        </div>
        <div className="dropdown">
          <div>
            <button className="dropbtn"> Calendar</button>
          </div>
          <div className="dropdown-content">
            <a href="/get-involved/mapswipe">MapSwipe</a>
            <a href="/get-involved/tasking">Tasking Manager</a>
          </div>
        </div>
        <div className="dropdown">
          <div>
            <a href="/stats" >             
            <button className="dropbtn">Stats</button>
            </a>
          </div>

        </div>
        <a href="/language"></a>

        <button className="dropbtn">Language</button>
      </nav>
    </>
  );
}
