import "../App.css";

export default function Toggle({ dark, setDark }) {
    return (
        <div>
            <button onClick={() => setDark(v => !v)}>
                {dark ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}
