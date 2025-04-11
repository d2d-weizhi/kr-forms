import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import kendoka from './kendoka.svg';
import CompleteForm from './components/CompleteForm';

function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);

  return (
    <div className="kr-forms-demo">
      <CompleteForm />
    </div>
  );
}

export default App;
