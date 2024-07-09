import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/Root"
import JoinGame from "./routes/JoinGame"
import CreateGame from "./routes/CreateGame"
import Game from "./routes/Game"
import ErrorPage from "./error-page"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
	},
	{
		path: "join-game",
		element: <JoinGame />,
	},
	{
		path: "create-game",
		element: <CreateGame />,
	},
	{
		path: "game/:gameId",
		element: <Game />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
