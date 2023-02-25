import React from "react";
import Code from "./Code";
import "./Body.css";
import Intro from "../home/Intro";
import Usestate from "../home/Usestate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  NavLink,
  Link,
} from "react-router-dom";

import Useeffect from "../home/Useeffect";
import Useref from "../home/Useref";
import Form from "../home/Form";
import Usecontext from "../home/Usecontext";
import Usereducer from "../home/Usereducer";

function Body() {
  return (
    <Router>
      <main>
        <section class="article">
          <div class="hero">
            <Switch>
              <Route path="/body/" exact component={Intro} />
              <Route path="/body/usestate" component={Usestate} />
              <Route path="/body/useeffect" component={Useeffect} />
              <Route path="/body/useref" component={Useref} />
              <Route path="/body/form" component={Form} />
              <Route path="/body/usecontext" component={Usecontext} />
              <Route path="/body/usereducer" component={Usereducer} />
            </Switch>
          </div>
        </section>

        <aside class="sticky2">
          <div class="wrapper2">
            <div class="sidebar-header">
              <h3>React Giud</h3>
            </div>

            <ul class="listslide">
              <li>
                <Link to="/body/">intro</Link>
              </li>
              <li>
                <Link to="/body/usestate">useState</Link>
              </li>
              <li>
                <Link to="/body/useeffect">useEffect</Link>
              </li>
              <li>
                <Link to="/body/usecontext">useContext</Link>
              </li>
              <li>
                <Link to="/body/useref">useRef</Link>
              </li>
              <li>
                <Link to="/body/usereducer">userReducer</Link>
              </li>
              <li>
                <Link to="/body/form">Hook form</Link>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </Router>
  );
}

export default Body;
