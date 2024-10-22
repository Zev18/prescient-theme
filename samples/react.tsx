import React from 'react'

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number>(0)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button
        onClick={handleClick}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
        }}>
        Click Me!
      </button>
    </div>
  )
}

export default Counter
