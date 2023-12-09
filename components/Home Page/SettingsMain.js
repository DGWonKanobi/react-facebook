import settingsMain from "../../styles/settingsMain.module.css";
import gameStyles from "../../styles/gamesPage.module.css"
export default function SettingsMain(){
    return(
<div>
<div className={gameStyles.wrapper}>
<h2>Find the setting you need</h2>
<form>
<label for="searchsettings">Search Settings</label>
<input  type="text" name="SearchBar" value=""/>
</form>

</div>
</div>






    )
}