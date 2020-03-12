import React from "react";
import {Router, Route, Switch} from 'react-router-dom';
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";
/*
Why anchor tags are BAD!
- It dumps all the javaScript codes! (including states and react-redux data)
- Basically, can't do shit!!

Use Link tag!
- react router prevents fetching entirely new html, by detecting 'click' from browser and over-riding the default behaviour of the link tag
- 'history' sees updated URL, takes URL and sends it to BrowserRouter
- This is where the concept of 'single page app' comes from

client id : 792171180853-tm4no4gigistqp0h8df42vsi78fdcahf.apps.googleusercontent.com
 */




/*
BrowserRouter - uses everything after TLD or port as path
HashRouter - uses everything after a # as the path
MemoryRouter - doesn't use URL to track navigation
 */



const App = () => {
    return (
      <div className={"ui container"}>
          <Router history={history}>
              <div>
                  <Header/>
                  <Switch>
                      <Route path={"/"} exact component={StreamList}/>
                      <Route path={"/streams/new"} exact component={StreamCreate}/>
                      <Route path={"/streams/edit/:id"} exact component={StreamEdit}/>
                      <Route path={"/streams/delete/:id"} exact component={StreamDelete}/>
                      <Route path={"/streams/:id"} exact component={StreamShow}/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
}

export default App;
