import { CalendarToday, Email, LocationCity, PermIdentity, Phone, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./User.css";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://image.freepik.com/free-photo/smiling-woman-pointing-finger-side-isolated-portrait-white_1150-8426.jpg" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">Shakibul78</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">20.11.2000</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>

                        <div className="userShowInfo">
                            <Email className="userShowIcon" />
                            <span className="userShowInfoTitle">shakibulvai@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <Phone className="userShowIcon" />
                            <span className="userShowInfoTitle">01631284578</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationCity className="userShowIcon" />
                            <span className="userShowInfoTitle">Chowgacha | Jashore</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>

                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label className="">Username</label>
                                <input type="text" placeholder="Shakibul78" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label className="">Phone</label>
                                <input type="text" placeholder="01631284578" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label className="">Address</label>
                                <input type="text" placeholder="Chowgacha | Jashore" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://image.freepik.com/free-photo/smiling-woman-pointing-finger-side-isolated-portrait-white_1150-8426.jpg"
                                    alt=" " className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default User;