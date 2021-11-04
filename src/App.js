import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PageView from './views';
import { ContextProvider } from './context/global-context';
import { Header } from './components';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router>
          <Header />
          <PageView />
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
