import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CharacterCard, LocationCard, EpisodeList, WelcomePage } from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main>
      <Header />

      <TabNav />

      <SearchForm />

      <Route exact path='/' component={WelcomePage}/>

      <Route path='/characters' component={CharacterCard} />

      <Route path='/locations' component={LocationCard} />

      <Route path='/episodes' component={EpisodeList} />

    </main>
  );
}
