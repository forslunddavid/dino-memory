// import { useEffect, useState } from "react"
// import "./App.css"
// import { getDino } from "./utils/getDino.js"
import Button from "../components/Button"

function Start() {
	// const [dinoNames, setDinoNames] = useState([])
	// const [dinoImage, setDinoImage] = useState()

	// useEffect(() => {
	// 	async function fetchDinos() {
	// 		const names = await getDino()
	// 		setDinoNames(names)
	//     setDinoImage(image)
	// 	}
	// 	fetchDinos() // Invoke the fetchDinos function here
	// }, dinosaurs[])

	return (
		<section>
			<Button to="/create-game">Skapa nytt spel</Button>
			<Button to="/join-game">Anslut till spel</Button>
		</section>
	)
}

export default Start
