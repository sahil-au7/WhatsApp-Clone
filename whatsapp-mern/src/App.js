import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chat component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
