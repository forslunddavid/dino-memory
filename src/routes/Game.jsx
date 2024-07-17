// Game.jsx
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import background from "../assets/wood-background.jpg"
import "./Game.css"
import "../components/Card.css"
import Card from "../components/Card"
import dinosaurs from "../assets/dinosaurs.json"

const shuffleArray = (array) => {
	for (
		let currentIndex = array.length - 1;
		currentIndex > 0;
		currentIndex--
	) {
		const randomIndex = Math.floor(Math.random() * (currentIndex + 1))
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}
	return array
}

const createNewGame = (dinosaurs) => {
	const shuffledDinosaurs = shuffleArray([...dinosaurs])
	const selectedCards = shuffledDinosaurs.slice(0, 12)

	const cardDeck = [...selectedCards, ...selectedCards]

	return shuffleArray(cardDeck)
}

function Game() {
	const { state } = useLocation()
	const { gameId } = useParams()
	const [firstCard, setFirstCard] = useState(null)
	const [secondCard, setSecondCard] = useState(null)
	const [cardDeck, setCardDeck] = useState([])
	const [cardFlipped, setCardFlipped] = useState([])
	const [disableClicks, setDisableClicks] = useState(false)

	useEffect(() => {
		const newGameDeck = createNewGame(dinosaurs)
		setCardDeck(newGameDeck)
		setCardFlipped(Array(newGameDeck.length).fill(false))
		console.log(
			"Card Deck:",
			newGameDeck.map((card) => card.species)
		) // Log all cards
	}, [])

	const handleCardClick = (index) => {
		if (disableClicks || cardFlipped[index]) return

		const newCardFlipped = [...cardFlipped]
		newCardFlipped[index] = true
		setCardFlipped(newCardFlipped)
		console.log(newCardFlipped, "cardflipped")
		console.log(`Flipped Card: ${cardDeck[index].species}`)

		if (firstCard === null) {
			setFirstCard(index)
		} else if (secondCard === null) {
			setSecondCard(index)
			setDisableClicks(true)
			//check for match
			if (cardDeck[firstCard].species === cardDeck[index].species) {
				resetSelection()
			} else {
				setTimeout(() => {
					const resetFlipped = [...newCardFlipped]
					resetFlipped[firstCard] = false
					resetFlipped[index] = false
					setCardFlipped(resetFlipped)
					resetSelection()
				}, 1000)
			}
		}
	}

	const resetSelection = () => {
		setFirstCard(null)
		setSecondCard(null)
		setDisableClicks(false)
	}

	return (
		<>
			<div
				className="game-bg"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="card-container">
					{cardDeck.map((dino, index) => (
						<Card
							key={index}
							flipped={cardFlipped[index]}
							onClick={() => handleCardClick(index)}
							species={dino.species}
							image={dino.image}
						/>
					))}
				</div>
				<div className="game-data">
					<>
						{state && (
							<p>
								Player 1: {state.player1Name} Points:{" "}
								{state.player1Points}
							</p>
						)}
					</>
					<>
						{state && (
							<p>
								{" "}
								Player 2: {state.player2Name} Points:{" "}
								{state.player2Points}
							</p>
						)}
					</>
				</div>
			</div>
		</>
	)
}

export default Game
