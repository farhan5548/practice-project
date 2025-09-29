import './App.css'
import ActionHook from './Components/ActionHook'
import Bgchange from './Components/Bgchange'
import Click from './Components/Click'
import List from './Components/List'
import Timer from './Components/Timer'
import Taskeffect from './Components/Taskeffect';
import NewEffectTask from './Components/NewEffectTask'
import FetchUsers from './Components/FetchUsers'

function App() {
  return (
    <>
      <List />
      <Click />
      <ActionHook />
      <Bgchange />
      <Timer />
      <Taskeffect />
      <NewEffectTask />
      <FetchUsers />
    </>
  )
}

export default App
