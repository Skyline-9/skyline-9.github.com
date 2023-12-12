import "@fontsource/nunito-sans"; // Defaults to weight 400.

// Styling
import './App.css';

// Components
// import CyberpunkGlitch from "../../Downloads/skyline-9.github.com-main/src/components/CyberpunkGlitch";
// import ExperienceTimeline from "../../Downloads/skyline-9.github.com-main/src/components/ExperienceTimeline";
// import IntroCard from "../../Downloads/skyline-9.github.com-main/src/components/IntroCard";
// import Projects from "../../Downloads/skyline-9.github.com-main/src/components/Projects";
// import SakanaReact from 'sakana-react';

import CyberpunkGlitch from "./components/CyberpunkGlitch";
import ExperienceTimeline from "./components/ExperienceTimeline";
import IntroCard from "./components/IntroCard";
import Projects from "./components/Projects";
import SakanaReact from 'sakana-react';

const App = () => {

    return (
        <div className="App">
            <CyberpunkGlitch/>
            <IntroCard />
            <ExperienceTimeline/>
            <Projects />
            <div className="sakana">
                <SakanaReact className="sakana"
                             showControler={false}/>
                <p className="sakana-subtext"><i>Drag me around!</i></p>
            </div>
        </div>
    );
}

export default App;
