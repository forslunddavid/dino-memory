import background from "../assets/wood-background.jpg"
import "./Game.css"
import "../components/Card.css"
import Card from "../components/Card"

function Game() {
	return (
		<>
			<div
				className="game-bg"
				style={{ backgroundImage: `url(${background})` }}
			>
				<Card />
			</div>
		</>
	)
}

export default Game
