import React from 'react';
import Alert from './Alert';
import MyComponent from './MyComponent';
import PersonScore from './PersonScore';

const App = () => {
  return (
    <div className="App">
      {/* <Alert heading="Success" closable>
        Everything is really good!
      </Alert> */}
      <PersonScore />
      {/* <MyComponent /> */}
    </div>
  );
};

export default App;
