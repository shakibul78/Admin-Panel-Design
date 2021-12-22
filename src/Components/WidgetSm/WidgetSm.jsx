import "./WidgetSm.css";
import { Visibility } from '@mui/icons-material';
import parson1 from "../../Components/images/parson1.jpg"

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={parson1} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Khatun</span>

                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={parson1} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={parson1} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={parson1} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={parson1} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src={parson1} alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Anna Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSm;