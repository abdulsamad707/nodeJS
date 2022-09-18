import logo from './logo.svg';
import './App.css';
function App() {
let getData = () =>{
         fetch("/api").then((res)=>{console.log(res)});
     }
    getData();
}
export default App;
