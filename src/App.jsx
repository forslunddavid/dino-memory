import { useEffect, useState } from "react"
import "./App.css"
import { getDino } from "./utils/getDino.js"

function App() {
	const [dinoNames, setDinoNames] = useState([])
  const [dinoImage, setDinoImage] = useState()

	useEffect(() => {
		async function fetchDinos() {
			const names = await getDino()
			setDinoNames(names)
      setDinoImage(image)
		}
		fetchDinos() // Invoke the fetchDinos function here
	}, dinosaurs[])

	return (
		<>
			<h1>Dinolist</h1>
			<ul>
				{dinosaurs.map((dino, index) => (
					<li key={index}>
						<h2>{dino.name}</h2>
            <img src="dino.image" alt="" />
					</li>
				))}
			</ul>
		</>
	)
}

export default App
