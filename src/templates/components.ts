export const App = `import { FC } from 'react';

interface Props {

}

const App:FC<Props> = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
`

export const index = `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`