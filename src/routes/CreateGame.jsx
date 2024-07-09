import { Link } from "react-router-dom"
import { useId } from "react"
import Button from "../components/Button"

function CreateGame() {
	return (
		<>
			<label>
				Namn <input type="text" />
			</label>
			<Button to="/game/:gameId">Skapa nytt spel</Button>
		</>
	)
}

export default CreateGame
