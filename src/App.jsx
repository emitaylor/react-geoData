import { useState, useEffect } from "react"

function App() {
  const [countries, setCountries] = useState()
  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
    .then(data => data.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Datas</h1>
        <p className="text-gray-100 text-xl mb-8">Click on a card to reveal the country's informations</p>
      </div>
    </div>
  )
}

export default App
