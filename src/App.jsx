import './App.css'
import About from './Components/About'
import ActionHook from './Components/ActionHook'
import Bgchange from './Components/Bgchange'
import Click from './Components/Click'
import List from './Components/List'
import Mydata from './Components/Mydata'
import Timer from './Components/Timer'
import View from './Components/View'
import Taskeffect from './Components/Taskeffect';

function App() {
  return (
    <>
      <View />
      <About />
      <Mydata />
      <h1>Shopping List</h1>
      <List />
      <Click />
      <h2>useActionState Hook</h2>
      <ActionHook />
      <Bgchange />
      <Timer />
      <Taskeffect />
    </>
  )
}

export default App
