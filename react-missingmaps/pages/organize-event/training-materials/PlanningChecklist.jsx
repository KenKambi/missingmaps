export default function PlanningChecklist() {
  return (
    <main>
      <h1>Planning Checklist</h1>
      <p>
        Use this checklist to help plan your Missing Maps event, whether it's a
        mapathon or a MapSwipe event.
      </p>

      <ul>
        <li>
          <input type="checkbox" id="download-guide" />
          <label htmlFor="download-guide">
            Download the{" "}
            <a href="link-to-complete-step-by-step-guide">
              <strong>complete Step-by-Step Guide to Hosting a Mapathon</strong>
            </a>
            .
          </label>
        </li>
        <li>
          <input type="checkbox" id="decide-event-type" />
          <label htmlFor="decide-event-type">
            Decide if you’ll do an in-person or remote event
          </label>
        </li>
        <li>
          <input type="checkbox" id="choose-date" />
          <label htmlFor="choose-date">Choose a date</label>
        </li>
        <li>
          <input type="checkbox" id="recruit-volunteers" />
          <label htmlFor="recruit-volunteers">
            Recruit volunteers to help plan the event
          </label>
        </li>
        <li>
          <input type="checkbox" id="book-space" />
          <label htmlFor="book-space">Book a space</label>
        </li>
        <li>
          <input type="checkbox" id="register-event" />
          <label htmlFor="register-event">
            Register your event <a href="link-to-event-registration">here</a>
          </label>
        </li>
        <li>
          <input type="checkbox" id="make-banners" />
          <label htmlFor="make-banners">
            Make banners or posters using the{" "}
            <a href="link-to-missing-maps-logo">Missing Maps logo</a> and/or the
            <a href="link-to-customizable-logo">
              {" "}
              customizable community logo
            </a>{" "}
            template
          </label>
        </li>
        <li>
          <input type="checkbox" id="recruit-participants" />
          <label htmlFor="recruit-participants">
            Recruit participants using Eventbrite or another ticketing tool
          </label>
        </li>
        <li>
          <input type="checkbox" id="pick-task" />
          <label htmlFor="pick-task">
            Pick a task using the{" "}
            <a href="link-to-tasking-manager">Tasking Manager</a> / or{" "}
            <a href="link-to-mapswipe">MapSwipe</a>
          </label>
        </li>
        <li>
          <input type="checkbox" id="strong-wifi" />
          <label htmlFor="strong-wifi">Ensure strong Wi-Fi</label>
        </li>
        <li>
          <input type="checkbox" id="firewall-check" />
          <label htmlFor="firewall-check">
            If using the <a href="link-to-tasking-manager">Tasking Manager</a>,
            check that it passes your location’s firewall
          </label>
        </li>
        <li>
          <input type="checkbox" id="tables-chairs" />
          <label htmlFor="tables-chairs">Tables and chairs</label>
        </li>
        <li>
          <input type="checkbox" id="projector-audio" />
          <label htmlFor="projector-audio">
            Projector &amp; audio visual equipment
          </label>
        </li>
        <li>
          <input type="checkbox" id="laptops-phones" />
          <label htmlFor="laptops-phones">
            Laptops for all participants if using the{" "}
            <a href="link-to-tasking-manager">Tasking Manager</a> (tablets are
            not compatible with the Tasking Manager) or phones for each
            participant if using <a href="link-to-mapswipe">MapSwipe</a>
          </label>
        </li>
        <li>
          <input type="checkbox" id="mice" />
          <label htmlFor="mice">
            Mice (if possible) for all participants (if using the{" "}
            <a href="link-to-tasking-manager">Tasking Manager</a>)
          </label>
        </li>
        <li>
          <input type="checkbox" id="contact-tech-staff" />
          <label htmlFor="contact-tech-staff">
            Make sure you have contact info for your event space's tech and
            support staff
          </label>
        </li>
        <li>
          <input type="checkbox" id="extension-cords" />
          <label htmlFor="extension-cords">Extra extension cords</label>
        </li>
        <li>
          <input type="checkbox" id="print-materials" />
          <label htmlFor="print-materials">Print materials</label>
        </li>
        <li>
          <input type="checkbox" id="order-snacks" />
          <label htmlFor="order-snacks">Order snacks</label>
        </li>
        <li>
          <input type="checkbox" id="prepare-training" />
          <label htmlFor="prepare-training">Prepare training materials</label>
        </li>
        <li>
          <input type="checkbox" id="osm-profile-browser" />
          <label htmlFor="osm-profile-browser">
            Remind participants to create their OSM profile and download a
            browser that is not Internet Explorer (if using the{" "}
            <a href="link-to-tasking-manager">Tasking Manager</a>)
          </label>
        </li>
        <li>
          <input type="checkbox" id="test-remote-platform" />
          <label htmlFor="test-remote-platform">
            If hosting remote event, test your video hosting platform including
            microphone and screenshare
          </label>
        </li>
      </ul>
    </main>
  );
}
