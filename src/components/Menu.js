import logo from "./image/bbird.png"
import "./Menu.css"
export default function Menu ({logoutBtn, analysis,analysisBtn,comparison, comparisonBtn, overview, overviewBtn}) {
    return (
<div className="leftSideMenu">
                <div style={{display:"flex", justifyContent: "center", alignItems:"center", marginLeft:"10px"}}>
                <img src={logo} alt="logo" style={{height:"50px", width:"50px", color: "white"}} ></img>
                <h1 className="menuTitle">Baro Bank <br/> Dashboard</h1>
                </div>
                    <div className="menu">
                    <div class="menuList">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M5.5 12.5H2.5V10.5H5.5V12.5ZM8.5 12.5H11.5V6.5H8.5V12.5ZM14.5 12.5H17.5V8.5H14.5V12.5ZM20.5 12.5H23.5V4.5H20.5V12.5ZM2.5 16.5H5.5V14.5H2.5V16.5ZM8.5 18.5H11.5V12.5H8.5V18.5ZM14.5 20.5H17.5V12.5H14.5V20.5ZM20.5 22.5H23.5V8.5H20.5V22.5Z"></path>
                    </svg>
                        {!analysis? (<h3 onClick={analysisBtn}>Analysis</h3>):(<h3>Analysis</h3>)}
                    </div>
                    <div class="menuList">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M7.5,21.5L7.5,21.5c-0.6,0-1-0.4-1-1V3.5c0-0.6,0.4-1,1-1l0,0c0.6,0,1,0.4,1,1v16.5 C8.5,21.1,8.1,21.5,7.5,21.5z M15.5,21.5h-5c-0.6,0-1-0.4-1-1V3.5c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v16.5 C16.5,21.1,16.1,21.5,15.5,21.5z M21.5,21.5h-5c-0.6,0-1-0.4-1-1V3.5c0-0.6,0.4-1,1-1h5c0.6,0,1,0.4,1,1v16.5 C22.5,21.1,22.1,21.5,21.5,21.5z"></path>
                    </svg>
                        {!comparison? (<h3 onClick={comparisonBtn}>Comparison</h3>):(<h3>Comparison</h3>)}
                    </div>
                    <div class="menuList">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M14.5,16.5l-2-2l4-4l-4-4l2-2l6,6L14.5,16.5z M9.5,7.5L11.5,5.5l-4-4L5.5,3.5V9.5H9.5z M4.5,13.5L6.5,15.5 l4-4l-4-4L4.5,7.5V13.5z M19.5,10.5L17.5,12.5l4,4l2-2V10.5H19.5z"></path>
                    </svg>
                        <h3>Converter</h3>
                    </div>
                    <div class="menuList">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20.5,21.5h-17c-0.6,0-1-0.4-1-1V3.5c0-0.6,0.4-1,1-1h17c0.6,0,1,0.4,1,1v16.5 C21.5,21.1,21.1,21.5,20.5,21.5z M4.5,7.5h15v-2h-15V7.5z M7.5,14.5h9v-2h-9V14.5z M6.5,18.5h11v-2h-11V18.5z"></path>
                    </svg>
                    {!overview? (<h3 onClick={overviewBtn}>Transaction Overview</h3>):(<h3>Transaction Overview</h3>)}
                    </div>
                    <div class="menuList">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M19.5,10.5h-1.5v-7c0-0.6-0.4-1-1-1H6.5c-0.6,0-1,0.4-1,1v7H3.5c-0.6,0-1,0.4-1,1v10 c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1v-10C20.5,10.9,20.1,10.5,19.5,10.5z M6.5,4.5h10v6h-10V4.5z M18.5,20.5h-15v-8h15V20.5z"></path>
                    </svg>
                        <h3>Transaction Insight</h3>
                    </div>
                    <div class="menuList">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20.5,21.5h-17c-0.6,0-1-0.4-1-1V9.5c0-0.6,0.4-1,1-1h17c0.6,0,1,0.4,1,1v11.5 C21.5,21.1,21.1,21.5,20.5,21.5z M4.5,19.5h15v-9h-15V19.5z M19.5,8.5H18v-5h-14v5h-1.5c-0.3,0-0.5,0.2-0.5,0.5v1c0,0.3,0.2,0.5,0.5,0.5h15 c0.3,0,0.5-0.2,0.5-0.5v-1C20,8.7,19.8,8.5,19.5,8.5z"></path>
                    </svg>
                        <h3>Transaction Trends</h3>
                    </div>
                    <div class="menuListEnd">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
                    <path fill="currentColor" d="M13.7,3.3c-3.5-3.5-9.2-3.5-12.7,0s-3.5,9.2,0,12.7l0,0c3.5,3.5,9.2,3.5,12.7,0l0,0c3.5-3.5,3.5-9.2,0-12.7L13.7,3.3z M19.5,11.5h-8.3v1h8.3c0.6,0,1,0.4,1,1s-0.4,1-1,1h-8.3v1h8.3c1.4,0,2.5-1.1,2.5-2.5S20.9,11.5,19.5,11.5z"/>
                    </svg>

                        <h3 onClick={logoutBtn}>Log Out</h3>
                    </div>
                    </div>  
            </div>
    )
}