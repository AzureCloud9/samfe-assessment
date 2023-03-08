import React, { useState } from "react";
import "./Dashboard.css"
import Menu from "./Menu";
import ExchangeRateTrend from "./ExchangeRateTrend";
import Comparison from "./Comparison";
import Overview from "./Overview";
export default function Dashboard ({logout, logoutBtn}) {

// menu clicker so u wont double click and remove mainpage
    const [analysis, setAnalysis] = useState(true)
    const [comparison, setComparison] = useState(false)
    const [overview, setOverview] = useState(false)


    function analysisHandle () {
        setAnalysis(!analysis)
        setComparison(false)
        setOverview(false)

    }

    function comparisonHandle(){
        setAnalysis(false)
        setComparison(!comparison)
        setOverview(false)

    }

    function overviewHandle() {
        setAnalysis(false)
        setComparison(false)
        setOverview(!overview)
    }


    return (
        <div className="dashboard">
            <div>
                <Menu logout={logout} logoutBtn={logoutBtn} analysisBtn={analysisHandle} analysis={analysis} comparisonBtn={comparisonHandle} comparison={comparison} overviewBtn={overviewHandle} overview={overview} />
            </div>
            <div className="mainPage">
                <div className="header-page">
                {analysis ? (<h1>Analysis</h1>):comparison ? (<h1>Comparison</h1>):overview?(<h1>Overview</h1>):null}
                <div className="name-pfp">
                    <p>Marley M</p>
                    <div className="pfp"></div>
                </div>
                </div>
                <hr/>
                <div className="mainPageContent">
                    {analysis ? (<ExchangeRateTrend/>):comparison?(<Comparison/>):overview?(<Overview/>):null}
                </div>
            </div>
        </div>
    )
}