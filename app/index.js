import React ,{Component} from 'react';
var ReactDOM = require('react-dom');
require('./index.css');

export default class App extends Component{
render(){

    return (
        <div>
Hello world! Yeah,whatsup?
        </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
