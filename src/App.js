// import React, { useState, useCallback, useMemo } from 'react';

// import './App.css';
// import DemoList from './components/Demo/DemoList';
// import Button from './components/UI/Button/Button';

// function App() {
//   const [listTitle, setListTitle] = useState('My List');

//   const changeTitleHandler = useCallback(() => {
//     setListTitle('New Title');
//   }, []);

//     const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

//   return (
//     <div className="app">
//       <DemoList title={listTitle} items={listItems} />
//       <Button onClick={changeTitleHandler}>Change List Title</Button>
//       {/* <Button onClick={changeToDescOrderHandler}>Change List to Descending Order</Button> */}
//     </div>
//   );
// }

// export default App;

import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [isDescending, setIsDescending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeOrderHandler = useCallback(() => {
    setIsDescending((prevState) => !prevState);
  }, []);

  const listItems = useMemo(() => {
    console.log('Items sorted');
    return [...[5, 3, 1, 10, 9]].sort((a, b) => (isDescending ? b - a : a - b));
  }, [isDescending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>
        {isDescending ? 'Change to Ascending Order' : 'Change to Descending Order'}
      </Button>
    </div>
  );
}

export default App;

