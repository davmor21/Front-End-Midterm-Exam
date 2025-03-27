import './App.css'
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import TaskComponent from './TaskComponent';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App(){
  return (
    <>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
    
      <div>
        <Greeting name="Davon" />
        <UserInfo name="Davon"
                  job="Systems Administrator" />
        <TaskComponent />
      </div>
    </>
  )
}

export default App