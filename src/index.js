import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Toast } from 'antd-mobile';

import axios from 'axios';

axios.defaults.withCredentials=true;
axios.defaults.baseURL='http://swmonk.top:3000';

axios.interceptors.response.use((response)=>{
    return response;
},error=>{
    return Promise.reject(error);
});

axios.get('http://swmonk.top:3000/login/cellphone?phone=15386328624&password=liu521zhao');


ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
