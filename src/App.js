import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PageView from './views';
import { ContextProvider } from './context/global-context';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <header className="App-header">
            <h1>Header</h1>
          </header>
          <PageView />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
