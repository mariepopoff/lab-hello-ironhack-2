import React from 'react';

import './App.css';
import MyImage from './MyImage';
import MyPrincipleComponent from './PrincipleComponent';
import MyButton from './MyButton';

function App() {
  return (
    <div>
    <section id="main">
    <div id="nav">
    <MyImage image="ironhack-logo.svg" />
    <MyImage image="menu-top.svg" />
    </div>
    <div id="main-text">
    <MyPrincipleComponent title="Say hello to ReactJS" text="You will learn how to use the most popular frontend library, and become a super Ninja developer."/>
    <MyButton text="Awesome!"/>
    </div>
    </section>
    <section id="principles">
    <div> 
      <MyImage image="icon1.png" />
      <MyPrincipleComponent title="Declarative" text="React makes it painless to creative interactive UIs."/>
      </div>
      <div> 
      <MyImage image="icon2.png" />
      <MyPrincipleComponent title="Components" text="Build encapsulated components that manage their state."/>
      </div>
      <div> 
      <MyImage image="icon3.png" />
      <MyPrincipleComponent title="Single-Way" text="A set of immutable values are passed to component's"/>
      </div>
      <div> 
      <MyImage image="icon4.png" />
      <MyPrincipleComponent title="JSX" text="Statically-typed, designed to run on modern browsers."/>
      </div> 
      </section>
    </div>
  );
}

export default App;
