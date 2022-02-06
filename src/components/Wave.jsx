import "./Wave.css"

function Wave(props) {
    return (
        <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#faf9fa" fillOpacity="1"
                      d="M0,320L60,304C120,288,240,256,360,256C480,256,600,288,720,272C840,256,960,192,1080,181.3C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"/>
            </svg>
        </div>
    );
}

export default Wave;

