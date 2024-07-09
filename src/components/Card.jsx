import "./Card.css"
function Card() {
	return (
		<>
			<div className="card">
				<div className="card-inner">
					<div className="card-front">
						<img
							className="card-logo"
							src="../src/assets/dino-card-image.png"
							alt=""
						/>
					</div>
					<div className="card-back">
						<img
							className="card-image"
							src="../src/assets/Dinosaur-test.png"
							alt=""
						/>
						<p>Tyranosaurus Rex</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card
