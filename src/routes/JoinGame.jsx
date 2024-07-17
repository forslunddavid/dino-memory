import Button from "../components/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import background from "../assets/wood-background-with-cards.jpg"

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
					<label>
						Namn{" "}
						<input
							type="text"
							value={player2Name}
							onChange={(e) => setPlayer2Name(e.target.value)}
						/>
					</label>
					<label>
						{" "}
						Spel-id{" "}
						<input
							type="text"
							value={gameId}
							onChange={(e) => setGameId(e.target.value)}
						/>
					</label>
					<Button onClick={handleJoinGame}>Anslut till spel</Button>
				</div>
			</div>
		</>
	)
}

export default JoinGame
