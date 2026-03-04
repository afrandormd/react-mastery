import './App.css'
import UserCard from './components/UserCard'

function App() {
    const handleMouseEnter = () => {
        console.log("Mouse entered!")
    }

    const handleMouseLeave = () => {
        console.log("Mouse Left!")
    }

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log("Enter pressed!")
		}
	}


	const handleAddToCart = (e) => {
        const productId = e.target.dataset.id
		console.log("Added product:", productId)
	}
	

    return (
        <>
            <UserCard />

            <div
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
                style = {{ padding: '20px', backgroundColor: '#f0f0f0' }}>
                Hover over me!
            </div>

            <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter" />

            <div>
                <button data-id="1" onClick={handleAddToCart}>Add Product 1 </button>
                <button data-id="2" onClick={handleAddToCart}>Add Product 2 </button>
                <button data-id="3" onClick={handleAddToCart}>Add Product 3 </button>
            </div>
        </>
    )
}

export default App
