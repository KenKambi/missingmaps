import "./involved.css"


export default function Involved() {

    return (
    <div className="get-involved-page">
      <nav className="dropdown-nav">
        <div className="dropdown">
          <button className="dropbtn">Get Involved</button>
          <div className="dropdown-content">
            <a href="/get-involved/mapswipe">MapSwipe</a>
            <a href="/get-involved/tasking">Tasking Manager</a>
          </div>
        </div>
      </nav>
      <p>Discover how you can contribute to the Missing Maps mission...</p>
    </div>
  );
}