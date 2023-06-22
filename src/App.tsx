import React from 'react';
import "@fontsource/nunito-sans"; // Defaults to weight 400.

// Styling
import './App.css';

// Components
import CyberpunkGlitch from "./components/CyberpunkGlitch";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SakanaReact from 'sakana-react';
import IntroCard from "./components/IntroCard";

const App = () => {

    return (
        <div className="App">
            <CyberpunkGlitch/>
            <IntroCard />
            <ExperienceTimeline/>
            <div className="sakana">
                <SakanaReact className="sakana"
                             showControler={false}/>
                <p className="sakana-subtext"><i>Drag me around!</i></p>
            </div>
        </div>
    );
}

export default App;
