import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Form from './components/Form';

const App: React.FC = observer(() => {
  return (
    <div>
      <Form />
    </div>
  );
});

export default App;
