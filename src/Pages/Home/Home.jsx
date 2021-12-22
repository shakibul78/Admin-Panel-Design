import Chart from "../../Components/Chart/Chart.jsx";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo.jsx";
import "./Home.css"
import { userData } from "../../dummyData.js";
import WidgetSm from "../../Components/WidgetSm/WidgetSm.jsx";
import WidgetLg from "../../Components/WidgetLg/WidgetLg.jsx";


const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="ActiveUser" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;