import { Link } from "react-router-dom"
import "./Start.css"
import background from "../assets/wood-background-with-cards.jpg"

function Start() {
	return (
		<>
			<div
				className="game-bg"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="welcome-wrapper">
					<section className="welcome-section">
						<h1>Welcome to Dino Memory</h1>
						<p className="paragraph">
							This is a online multiplayer game to learn your
							dinosaurs
						</p>
						<p className="paragraph">
							to create a game just click the create game button
							and enter your name
						</p>
						<p className="paragraph">
							to join a friend click join game, enter your name
							and the game-id that your friend gives you.
						</p>
					</section>
					<section className="button-section">
						<Link
							className="button start-buttons"
							to="/create-game"
						>
							Skapa nytt spel
						</Link>
						<Link className="button start-buttons" to="/join-game">
							Anslut till spel
						</Link>
					</section>
				</div>
			</div>
		</>
	)
}

export default Start
