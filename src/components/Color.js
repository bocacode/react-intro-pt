import { useState } from 'react'

const ColorComp = () => {
  const [textColor, setTextColor] = useState('Green')

  // TextColor is our Getter (Const variable)
  // SetTextColor is our Setter (function) that updates textColor

  console.log('TextColor -> ', textColor)

  return (
    <div className='App'>
      {/* only more JSX allowed */}
      <header>
        <h1 style={{ color: textColor }}>My favorite Color is {textColor}</h1>
        <button onClick={() => setTextColor('blue')}>Blue</button>
        <br />
        <button onClick={() => setTextColor('red')}>Red</button>
        <br />
        <button onClick={() => setTextColor('green')}>Green</button>
      </header>
    </div>
  )
}

export default ColorComp