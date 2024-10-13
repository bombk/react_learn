import Button  from "./Button";
const App = ()=> {
  return <div>
    <h1>Userful website</h1>
    <h3>Which website do you want to open</h3>  
    <Button name="Google" link="https://google.com"/>
    <Button name="Facebook" link="https://facebook.com"/>
    <Button name="YouTube" link="https://youtube.com"/>
    <br></br>
    <Button name="IPO result" link="https://iporesult.com"/>
    <Button name="Github" link="https://github.com"/>
    <Button name="Technical Education" link="https://ted.com"/>
  </div> 

}

export default App;