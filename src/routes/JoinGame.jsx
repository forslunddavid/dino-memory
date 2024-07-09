import Button from "../components/Button"

function JoinGame() {
	return (
		<>
			<label>
				Namn <input type="text" />
			</label>
			<label>
				{" "}
				Spel-id <input type="text" />
			</label>
			<Button to="/game/:gameId">Anslut till spel</Button>
		</>
	)
}

export default JoinGame
