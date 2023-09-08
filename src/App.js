import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [init, setInit] = useState(true);
  console.log('1--');

  useEffect(() => { }, [])
  console.log('2--');
  if (init) {
    alert('ok')
    console.log('in--');
    setInit(false)
  }
  //   useEffect(() => {
  //     if (init) {
  //       alert('ok')
  //       console.log('in--');
  //       setInit(false)
  //     }
  // }, [init])
  return (
    <>
      <h1>ok</h1>
      <button type='submit' onClick={e => setInit(true)} >click</button>
    </>
  );
}

export default App;
