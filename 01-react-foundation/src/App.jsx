import { useState } from 'react'
import './App.css'

function App() {
    const [countPlus, setPlusCount] = useState(0)
    const [countMinus, setMinusCount] = useState(0)
    const resetAll = () => {
        setPlusCount(0)
        setMinusCount(0)
    }

    return (
        <>
            <h1>Hello World dari Rando!</h1>
            <p>Ini adalah aplikasi React pertama saya 🚀</p>

            <div style={{ marginTop: '24px' }}>
                <p>Plus Counter: <strong>{countPlus}</strong></p>
                <p>Minus Counter: <strong>{countMinus}</strong></p>

                <button onClick={() => setPlusCount(countPlus + 1)} style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    background: '#61dafb',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '12px'
                }}>+</button>
                <button onClick={() => setMinusCount(countMinus - 1)} style={{
                    padding: '12px 24px',
                    marginLeft: '12px',
                    fontSize: '16px',
                    background: '#61dafb',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '12px'
                }}>-</button>
                <button onClick={() => setPlusCount(0)} style={{
                    padding: '12px 24px',
                    marginLeft: '12px',
                    fontSize: '16px',
                    background: 'orange',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '12px'
                }}>Reset Plus</button>
                <button onClick={() => setMinusCount(0)} style={{
                    padding: '12px 24px',
                    marginLeft: '12px',
                    fontSize: '16px',
                    background: 'orange',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '12px'
                }}>Reset Minus</button>
                <button onClick={() => resetAll()} style={{
                    padding: '12px 24px',
                    marginLeft: '12px',
                    fontSize: '16px',
                    background: 'red',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '12px'
                }}>Reset All</button>
            </div>
        </>
    )
}

export default App
