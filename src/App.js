import "./App.css"
import UserProfile from "./pages/userProfile/userProfile";


function App() {
  return (
    <div className="App">
    <div className="blur" style={{top: '-18%', right: '0'}}></div>
    <div className="blur" style={{top: '-36%', right: '-8rem'}}></div>
    <UserProfile/>
    </div>
  );
}

export default App;