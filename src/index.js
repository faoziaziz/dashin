import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Baner from './component/baner';
import Navigasi from './component/navbar';
import MediaContent from './component/media';



ReactDOM.render(<div><Navigasi /><Baner /><MediaContent /></div>, document.getElementById('root'));

serviceWorker.unregister();
