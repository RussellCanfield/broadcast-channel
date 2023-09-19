import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useChannel from "./hooks/useChannel";

function App() {
	const [value, setValue] = useState(0);

	const { broadcast } = useChannel<number>({
		channelName: "count-channel",
		messageHandler: (message: MessageEvent<number>) => {
			setValue(message.data);
		},
	});

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => broadcast(value + 1)}>
					count is {value}
				</button>
			</div>
		</>
	);
}

export default App;
