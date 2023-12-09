import gameStyles from "../../styles/gamesPage.module.css"
import MainNavigation from '../../components/Home Page/mainNavigation'
import NewsFeed from "../../components/Home Page/NewsFeed";
import HPLeftSideBar from "../../components/Home Page/HPleftSideBar"
import HPleftSide from "../../components/Home Page/HPleftSideBar";
import SettingsMain from "../../components/Home Page/SettingsMain";

export default function Settings() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>side bar
                    <HPleftSide />
                    </div>

                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                <SettingsMain />
                </div>

            </div>
        </div>
    


    )
}