import React, { useRef } from "react";

function Navbar() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav>
            <a onClick={() => scrollToSection(homeRef)}>Home</a>
            <a onClick={() => scrollToSection(aboutRef)}>About</a>
        </nav>
    );
}

function Home() {
    return (
        <div ref={homeRef}>
            <h1>Home</h1>
        </div>
    );
}

function About() {
    return (
        <div ref={aboutRef}>
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
