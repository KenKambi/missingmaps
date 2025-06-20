import "./navbar.css";
//import icon from 'https://www.missingmaps.org/assets/graphics/meta/MM_white_typography.svg'

export default function Navbar() {
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
            <a href="/get-involved/mapswipe">MapSwipe</a>
            <a href="/get-involved/tasking">Tasking Manager</a>
            <a href="/get-involved/tasking">Validation</a>
            <a href="/get-involved/tasking"> Field Mapping</a>
            <a href="/get-involved/tasking"> Avdanced Mapping</a>
          </div>
        </div>
        <div className="dropdown">
          <div>
            <button className="dropbtn">Organize Event</button>
          </div>
          <div className="dropdown-content">
            <a href="/get-involved/mapswipe"> Training Materials</a>
            <a href="/get-involved/tasking">Planning Checlist</a>
          </div>
        </div>
        <div className="dropdown">
          <div>
            <button className="dropbtn"> Blog </button>
          </div>
          <div className="dropdown-content">
            <a href="/get-involved/mapswipe"> Latest</a>
            <a href="/get-involved/tasking"> Archive</a>
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
            <button className="dropbtn">Stats</button>
          </div>
          <div className="dropdown-content">
            <a href="/get-involved/mapswipe">MapSwipe</a>
            <a href="/get-involved/tasking">Tasking Manager</a>
          </div>
        </div>
        <button className="dropbtn">Language</button>
      </nav>
    </>
  );
}
