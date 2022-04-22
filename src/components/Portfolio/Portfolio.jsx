import {useEffect, useState} from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import './Portfolio.css';
import {featuredPortfolio, webPortfolio, mobilePortfolio, aiPortfolio} from "../../Data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [{
        id: "featured", title: "Featured",
    }, {
        id: "web", title: "Web App",
    }, {
        id: "mobile", title: "Mobile App",
    }, {
        id: "ai", title: "AI",
    },];

    useEffect(() => {
        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "ai":
                setData(aiPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <a href={d.link} target='_blank' rel="noreferrer">
                            <img
                                src={d.img}
                                alt=""
                            />
                        </a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
