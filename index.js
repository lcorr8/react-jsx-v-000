const app = "I don't do much.";

import {message} from './components/foo'


// In a file in the same directory as tweet.js
import Tweet from './Tweet'
import ReactDOM from 'react-dom'
ReactDOM.render(
  <Tweet />,
  document.getElementById('main')
);
