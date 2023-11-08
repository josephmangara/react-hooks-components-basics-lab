
import React from "react";


function Navbar() {
    return (
        <nav>
            <a href="#home">I'm a link!</a>
        </nav>
    );
}

function Home() {
    return (
        <div id="home">
            <h1>Home</h1>
        </div>
    );
}

function About() {
    return (
        <div id="about">
            <h1>About</h1>
        </div>
    );
}

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
        </div>
    );
}

export default App;