import './App.css'
import SarsStudentPage from './SarsStudentPage'

let user = {
  pid: "gunnarmontes"
}

function App() {

  return (
    <SarsStudentPage user={user}/>
  )
}

export default App
