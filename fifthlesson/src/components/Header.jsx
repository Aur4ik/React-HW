import "../App.css";
import Nav from "./Nav";
import Toggle from "./Toggle";

export default function Header({ dark, setDark }) {
    return (
        <div className="header">
            <h1>LOGO</h1>
            <Nav />
            <Toggle dark={dark} setDark={setDark} />
        </div>
    );
}
