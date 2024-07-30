import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../components/Button"
import background from "../assets/wood-background-with-cards.jpg"
import "./CreateGame.css"

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
					<h3>Create a new game</h3>
					<label className="create-game-label">
						<p>Name:</p>
						<input
							className="create-game-input"
							type="text"
							value={player1Name}
							onChange={(e) => setPlayer1Name(e.target.value)}
						/>
					</label>
					<div className="create-game-button">
						<Button onClick={handleCreateGame}>
							Create new game
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateGame
