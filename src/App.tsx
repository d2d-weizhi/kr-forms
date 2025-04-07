import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={kendoka} className="App-logo" alt="kendoka" />
        <div className="text-content k-rounded-lg">
          Edit <code>src/App.tsx</code> and save to reload.
        </div>
        <Button
          themeColor={'primary'}
          size={"large"}
          onClick={handleClick}
        >
          Learn KendoReact
        </Button>
      </div>
    </div>
  );
}

export default App;
