import gameStyles from "../../styles/gamesPage.module.css"
import MainNavigation from '../../components/Home Page/mainNavigation'
export default function Games() {
    return (

        <div className={gameStyles.container}>
            <MainNavigation />
            <div className={gameStyles.gameWrapper}>
                <div className={gameStyles.sideBar}>side bar</div>

                {/* MAIN CONTENT AREA */}
                <div className={gameStyles.mainContent}>
                    <h4>Games we love</h4>
                    <div className={gameStyles.game__TopPanelWraper}>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>

                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}>
                                <h5>Game title</h5>
                                <span>1M player</span>
                            </div>
                        </div>
                    </div>

                    <h4>Top picks for you</h4>
                    <div className={gameStyles.game__MidPanelWraper}>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                    </div>


                    <h4>most played games</h4>
                    <div className={gameStyles.game__TopPanelWraper}>
                    <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                        <div className={gameStyles.gamePanel}>
                            <img src='https://picsum.photos/110/105' />
                            <div className={gameStyles.overlay}></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}