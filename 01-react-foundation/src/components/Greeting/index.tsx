export default function Greeting() {
    const name = "Rando"
    const age = 23
    const city = "Lampung"

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Umur: {age} tahun</p>
            <p>Kota: {city}</p>
        </div>
    )
}

