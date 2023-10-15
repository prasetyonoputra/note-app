import React from "react";

import "./HomeStyle.css";
import searchLogo from '../../icons/icon-search.png';
import peopleLogo from '../../icons/icon-people.png';
import peoplesLogo from '../../icons/icon-peoples.png';
import homeLogo from '../../icons/icon-home.png';
import optionLogo from '../../icons/icon-option.png';
import notificationLogo from '../../icons/icon-notification.png';
import NoteComponenet from "../../components/note-component/NoteComponent";

function HomePage() {
    return (
        <div>
            <div className="header-home">
                <input className="input-search" placeholder="Search Note.." />

                <button className="search-button">
                    <img src={searchLogo} width="30px" height="30px" />
                </button>
            </div>

            <div className="content-home">
                <div className="content-flex-note">
                    <NoteComponenet />
                    <NoteComponenet />
                    <NoteComponenet />
                    <NoteComponenet />
                    <NoteComponenet />
                    <NoteComponenet />
                </div>
            </div>

            <div className="footer-home">
                <button className="button-footer">
                    <img src={notificationLogo} width="30px" height="30px" />
                </button>

                <button className="button-footer">
                    <img src={peopleLogo} width="30px" height="30px" />
                </button>

                <button className="button-footer">
                    <div className="home-logo-div">
                        <img src={homeLogo} width="30px" height="30px" />
                    </div>
                </button>

                <button className="button-footer">
                    <img src={peoplesLogo} width="40px" height="30px" />
                </button>

                <button className="button-footer">
                    <img src={optionLogo} width="30px" height="30px" />
                </button>
            </div>
        </div>
    )
}


export default HomePage;