import "./validation.css";

export default function () {
  return (
    <main>
      <h1>Validation</h1>

      <p>
        Validation is an important part of the Missing Maps process. Getting a
        second, third, or fourth pair of eyes on mapped features goes a long way
        in ensuring the quality of data being added to OpenStreetMap and being
        used in vulnerable communities around the world. Validating requires
        confidence in your mapping abilities as well as the willingness to help
        coach and advise newer mappers. The Missing Maps Project is a community
        of mappers with different levels of mapping experience, all who have a
        common goal of improving the availability of quality data for
        humanitarian use.
      </p>

      <h2>Validators</h2>
      <ol>
        <li>
          <h3>Identify if becoming a validator is right for you.</h3>
          <p>
            Validating isn’t for everyone; validation requires patience and
            attention to detail. Some experience mapping in OpenStreetMap and
            HOT projects is a must, but don’t feel that you need to be an expert
            to start. If you’re new to Missing Maps or OpenStreetMap mapping in
            general, head over to our resources for new mappers. Check out our{" "}
            <a href="#">Validation FAQs</a> to gain some insight on what
            validating entails.
          </p>
          <p>
            If you’ve mapped before using iD Editor, make sure to check out our
            advanced mapping section to get started with JOSM first. Validating
            in iD Editor is possible, but it’s best to use JOSM.
          </p>
        </li>
        <li>
          <h3>Build your skills.</h3>
          <p>
            Becoming a more efficient mapper is crucial to becoming a validator.
            The <a href="#">JOSM Editor</a> is a customizable editor for
            OpenStreetMap with a number of tools and plugins to make mapping and
            validating easier! Check out this guide to validation using the JOSM
            editor. For instruction setting up JOSM, you can also head over to{" "}
            <a href="#">LearnOSM</a>.
          </p>
          <p>
            While validating in JOSM is preferred, you can also begin to improve
            the map through iD Editor. Check out this video to learn some of the
            things to look for: [Video Placeholder]
          </p>
        </li>
        <li>
          <h3>Collaborate as part of the broader community.</h3>
          <p>
            Different validators have different techniques for validating. Join
            the conversation on the <a href="#">HOTOSM Slack</a> validation
            channel or reach out on the <a href="#">HOT Mailing List</a>.
            Contribute resources that you find helpful and give back to the
            community! Being a part of the Missing Maps community means working
            together in a positive and inclusive environment; when giving
            feedback to mappers, be sure to keep a positive tone and stay
            mindful of their contributions and desire to help - it’s what keeps
            OSM growing!
          </p>
        </li>
        <li>
          <h3>Validation FAQs</h3>
          <dl>
            <dt>How do I know when I’m ready to validate?</dt>
            <dd>
              After you’ve had some experience mapping, you may find yourself
              correcting other contributors’ work. When you find that you are
              doing this on a regular basis, and you are finding it easier to
              spot and correct the mistakes, you might be interested in becoming
              a validator. Validating is not to every person’s liking but reach
              out to the HOTOSM community and ask for guidance! We’re happy to
              help!
            </dd>

            <dt>Can I validate with iD Editor?</dt>
            <dd>
              Yes you can, but it is a lot more difficult to catch all the
              errors. JOSM Editor has a lot more tools that help new validators
              find the errors and also to fix some of them, so it is preferable
              that you learn to map with JOSM first.
            </dd>

            <dt>How do I get started validating?</dt>
            <dd>
              The first thing you need to do is learn about what validating is.
              The <a href="#">Validating Data</a> wiki is a great place to
              start. You’ll want to learn to edit using the{" "}
              <a href="#">JOSM Editor</a>. JOSM has a number of very useful
              validation tools which can make the process much easier and more
              efficient.
            </dd>

            <dt>What are the steps when validating a project?</dt>
            <dd>
              The first thing to do is carefully read the instructions for the
              project you are going to validate so that you understand what the
              mappers are being asked to do. When checking out each task, do a
              quick once-over to size up the quality of the mapping. Change or
              modify what is not in line with the provided instructions, and
              depending on the amount of time you have available, either
              complete the task to how it should be mapped or invalidate and
              leave a constructive comment on why you are invalidating.
            </dd>

            <dt>How do I know the task is mapped well enough?</dt>
            <dd>
              Before you start validating check out the instructions tab on the
              project. See what the requesting organization is looking for
              (buildings, buildings and roads, roads, landuse, etc.). When you
              check out a task make sure that everything being requested is
              mapped. If looking at buildings make sure they are all squared
              (corners right angles) or circled, depending on the shape. Do this
              on a building by building basis as not every building will need
              squared edges. Make sure every feature is tagged, not just
              area=yes.
            </dd>

            <dt>How should I be tagging roads?</dt>
            <dd>
              Typically, most HOTOSM tasks will request that you follow the{" "}
              <a href="#">Highway Tag Africa Wiki</a>. This is due to the road
              conditions in African countries not always corresponding to their
              economic and social role. A road typology should be based on the
              road importance and not on the surface or the visual appearance of
              a road.
            </dd>

            <dt>
              Should I just review the task and invalidate or should I finish
              the task and validate?
            </dt>
            <dd>
              This ultimately depends on how much time you have to validate. If
              you open the task and it’s obvious that the instructions weren’t
              followed and there are a lot of features that remain unmapped,
              then invalidate. If the task is complete but just needs some
              cleaning up (i.e. squared buildings, adding one or two more
              buildings) then it is advised that you fix what needs to be fixed
              in the task, and leave a detailed comment for the user who marked
              it as done including ways that this task could have been mapped
              better.
            </dd>
            <dd>
              Use this resource to see examples of structures in some of our
              frequent project areas.
            </dd>
            <dd>
              Use these guides to see examples of road features around the
              world: <a href="#">African Highways Guide</a> and{" "}
              <a href="#">General Highway Guide</a>. Note, images and
              descriptions might be helpful even if not mapping in that specific
              area. Note, road surface materials used doesn’t always convey the
              importance of a route. Please keep in mind context as well as
              materials when tagging roads.
            </dd>

            <dt>What sort of feedback should I give?</dt>
            <dd>
              Timely, positive, and constructive. Many projects are mapped by
              beginners at mapathons. Please remember that we were all new
              mappers at one point, and consider how your tone could impact the
              decision of a mapper to return to map again. If you find a number
              of tasks that have been completed by the same mapper, you only
              need to tag them in the comment once or twice. If the contribution
              by the mapper is over 2 weeks old, it is not necessary to tag the
              user.
            </dd>
            <dd>
              When leaving a comment, please tag the mapper in the comment using
              the “@” key. See some examples of useful comments below:
              <ul>
                <li>
                  <strong>Well-mapped task (Validated):</strong> Hi @user,
                  thanks for contributing! Everything here looks great!
                </li>
                <li>
                  When a very new mapper is good, let them know! Good work
                  @user. You are correctly identifying the buildings/roads from
                  the background imagery and mapping them at the correct size
                  and shape. Thank you for your time (or Thank you for
                  contributing to this Project). Please keep mapping!
                </li>
                <li>
                  <strong>Okay-mapped task (Validated):</strong> Hi @user,
                  thanks for contributing! I found a few additional
                  buildings/roads that could be mapped here, so I went ahead and
                  mapped them. Also, please be sure to square your buildings,
                  which can be done by pressing <code>Q</code> in both iD editor
                  and JOSM. I finished everything up here. Thanks again!
                </li>
                <li>
                  <strong>Poorly-mapped task (Invalidated):</strong> Hi @user,
                  thanks for contributing! It looks like there are quite a few
                  buildings left to map here. Make sure if the task isn’t
                  complete, to click “No” under the Task Status in response to
                  “Is this task completely mapped?”. If you have questions about
                  what should be mapped, check out the instructions tab. Please
                  reach out if you have any questions!
                </li>
              </ul>
            </dd>

            <dt>Should I validate roads on a buildings project?</dt>
            <dd>
              Please focus on validating the key features for that specific
              project. It’s important to read the Project Manager’s instructions
              first so you understand what the mapper’s goal was. However if you
              spot a small change that could be tweaked we appreciate your map
              stewardship. If large changes need to be made on other features,
              the best way to do this is via a separate task with corresponding
              instructions. Such a project may already exist! If you can’t find
              a corresponding task, please reach out to the project PM directly
              if you notice large changes that need to be made in that project
              area.
            </dd>

            <dt>What JOSM plugins are most useful for validating?</dt>
            <dd>
              Plugins are tools that must be added using the preferences
              dialogue box. Pull down the edit menu, click on preferences and
              click on the electric cord/wall outlet. Here are plugins that we
              suggest for JOSM mapping/editing/validating: apache-commons;
              auto-tools; buildings_tools; ejml; geotools; imagery_offset_db;
              jaxb; jts; mapwithai; opendata; scripting; todo; utilsplugin2.
            </dd>

            <dt>Should I delete poorly drawn features?</dt>
            <dd>
              Where possible, it is encouraged to fix poorly drawn features
              rather than deleting and redrawing them. This is done to preserve
              the edit history of the feature. There is an easy way to do this
              with the UtilsPlugin2 by using the Replace Geometry Tool. In some
              cases, it is more work than it is worth to fix features and the
              only practical solution is to delete them and redraw. Before
              deleting features, always ensure that it was not created by a
              local mapper! Check on the date of the mapping and if the
              changeset comment links to a mapathon using the Object History
              function in JOSM.
            </dd>

            <dt>
              I notice that some projects limit who can validate. What does this
              mean?
            </dt>
            <dd>
              Some projects are available for validation by intermediate or
              advanced mappers. Other projects require that you join a
              validation team. To the right under the Teams and Permissions
              section in the Tasking Manager is a link to join the teams that
              are approved for that specific project. HOT manages a global team
              of validators that many of the response projects on the Tasking
              Manager require you to join. To join, please follow the
              instructions below or use this link to connect with the team
              manager.
            </dd>
          </dl>
        </li>
      </ol>

      <h2>Data Quality Tools for Project Managers</h2>
      <p>
        Are you managing projects using a tasking manager? Are you curious to
        see how the mapping is going but don’t want to wait until your mappers
        finish the project? Try using these tools:
      </p>
      <dl>
        <dt>
          <a href="#">OSMCha</a>
        </dt>
        <dd>
          OSMCha short for OpenStreetMap Changeset Analyzer, is a web tool to
          help mappers analyze and review data changes to OSM. The objective of
          the tool is to help detect vandalism and act on bad changes to the map
          data. If using the HOT-TM, you’ll find this tool at the bottom of your
          project page.
        </dd>

        <dt>
          <a href="#">Osmose</a>
        </dt>
        <dd>
          Osmose is a quality assurance tool that detects issues in
          OpenStreetMap data by showing anomalies. It is also useful for
          integrating third-party data sets by conflation.
        </dd>

        <dt>
          <a href="#">Ohsome</a>
        </dt>
        <dd>
          The ohsome API is a generic web API for analysing OSM history data.
          The ohsome API lets you analyze the rich data source of the
          OpenStreetMap history and is based on the OpenStreetMap History
          Database (OSHDB). You can either perform analyses using a
          dashboard-like application, or use the ohsome API directly and work
          with its CSV, JSON or GeoJSON responses.
        </dd>

        <dt>
          <a href="#">CartONG Mapathon Dashboard</a>
        </dt>
        <dd>
          Looking for another way to track your group’s edits? CartONG has you
          covered.
        </dd>

        <dt>
          <a href="#">MapRoulette</a>
        </dt>
        <dd>
          MapRoulette is a gamified approach to fixing OSM bugs that breaks
          common OpenStreetMap data problems into micro tasks. This tool is best
          used after your event.
        </dd>
      </dl>

      <p>
        From everyone at Missing Maps, thanks for keeping your eye on data
        quality.
      </p>
      <p>Happy Mapping!</p>
    </main>
  );
}
