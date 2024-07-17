import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../components/Button"
import background from "../assets/wood-background-with-cards.jpg"

function generateShortId() {
	return Math.random().toString(36).substring(2, 8)
}

function CreateGame() {
	const [player1Name, setPlayer1Name] = useState("")
	const navigate = useNavigate()

	const handleCreateGame = () => {
		const gameId = generateShortId()
		if (gameId && player1Name) {
			navigate(`/game/${gameId}`, { state: { player1Name } })
		} else {
			alert("Please enter both a name and a game ID")
		}
	}

	return (
		<>
			<div
				className="game-bg"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="welcome-wrapper">
					<label>
						Namn
						<input
							type="text"
							value={player1Name}
							onChange={(e) => setPlayer1Name(e.target.value)}
						/>
					</label>
					<Button onClick={handleCreateGame}>Skapa nytt spel</Button>
				</div>
			</div>
		</>
	)
}

export default CreateGame
