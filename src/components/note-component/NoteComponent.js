import "./NoteStyle.css";
import optionLogo from '../../icons/icon-option.png';


function NoteComponent() {
    console.log("Test 1");
    return (
        <div className="note-container">
            <img src={optionLogo} height="8px" width="30px" className="note-option"/>
            <h1 className="title-note">qwdsa</h1>
        </div>
    );
}

export default NoteComponent;