import "./Header.css";
import resume from '../../resources/resume.pdf';

/**
 * Parallax header with specified background image and title
 *
 * @param {*} props    The caption of the header
 * @author Richard Luo
 * @returns Parallax header with specified caption
 */
function Header(props) {
    return (
        <div id={props.id} className="header">
            <div className="fox">
                <div className="leg-outer">
                    <div className="leg">
                        <div className="paw">
                            <div className="log">
                                <div className="log-inner">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="leg-outer">
                    <div className="leg">
                        <div className="paw">
                            <div className="log">
                                <div className="log-inner"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hind-leg-outer">
                    <div className="hind-leg-outer2">
                        <div className="hind-paw">
                            <div className="hind-log">
                                <div className="hind-log-inner">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hind-leg-outer">
                    <div className="hind-leg-outer2">
                        <div className="hind-paw">
                            <div className="hind-log">
                                <div className="hind-log-inner">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="head">
                        <div className="ears">
                            <div className="ear"/>
                            <div className="ear"/>
                        </div>
                        <div className="face"/>
                        <div className="snout"/>
                    </div>
                    <div className="tail">
                        <div className="tail">
                            <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tail2">
                            <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="snow"/>
            <div className="title">
                <h1>Richard Luo</h1>
            </div>
            <div className="caption">
                <h2>Making Dreams Come True Since 2002</h2>
            </div>
            {/* <button
                className="scifi-button"
                id="resume-button"
                onClick={() => {
                    window.open(resume);
                }}
            >
                Check Out My Resume
            </button> */}
            <br/>
            <br/>
        </div>
    );
}

export default Header;
