import './App.css'
import ColorComp from './components/Color'
import CounterComp from './components/Counter'
import CompWithFragment from './components/WithFragment'
import SuperSimpleComp from './components/Simple'

function App() {
  return (
    <div className='App-header' >
      <ColorComp />
      <CounterComp />
      <CompWithFragment />
      <SuperSimpleComp />
    </div>
  )
}

export default App
