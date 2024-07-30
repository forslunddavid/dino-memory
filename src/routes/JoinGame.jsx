import Button from "../components/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import background from "../assets/wood-background-with-cards.jpg"
import "./JoinGame.css"

function JoinGame() {
	const [player2Name, setPlayer2Name] = useState("")
	const [gameId, setGameId] = useState("")
	const navigate = useNavigate()

	const handleJoinGame = () => {
		if (gameId && player2Name) {
			navigate(`/game/${gameId}`, { state: { player2Name } })
		} else {
			alert("Please enter a name")
		}
	}
	return (
		<>
			<div
				className="game-bg"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="welcome-wrapper">
					<h3>Join a game</h3>

					<label className="join-game-label">
						<p>Namn</p>
						<input
							className="join-game-input"
							type="text"
							value={player2Name}
							onChange={(e) => setPlayer2Name(e.target.value)}
						/>
					</label>
					<label className="join-game-label">
						<p>Spel-id </p>
						<input
							className="join-game-input"
							type="text"
							value={gameId}
							onChange={(e) => setGameId(e.target.value)}
						/>
					</label>
					<div className="join-game-button">
						<Button onClick={handleJoinGame}>Join game</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default JoinGame
