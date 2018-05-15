// Greeter.js
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings yeyey!";
//     return greet;
// };

//使用ES6的语法
import React,{Component} from 'react'

class Greeter extends Component{
    render(){
        return(
            <div>
                <span>Marco</span>
            </div>
        )
    }
}

export default Greeter