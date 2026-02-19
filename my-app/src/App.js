import { useState } from 'react';
import Header from './components/Header/Header';
import { PageView } from './context/context';

import "./index.css"
import Content from './components/Content/Content';
function App() {
  const [enabled, setEnabled] = useState("aboutme");
  return (
    <div className="App">
      <PageView.Provider value={{enabled, setEnabled}}> 
        <Header />
        <main>
          <Content />
        </main>
        <footer className="Footer">
          Footer Here
        </footer>
      </PageView.Provider>
    </div>
  );
}

export default App;
