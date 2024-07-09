import "./Button.css"
import { Link } from "react-router-dom"

function Button({ to, children }) {
	return (
		<Link to={to} className="button">
			<p>{children}</p>
		</Link>
	)
}

export default Button
