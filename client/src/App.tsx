import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/Login";
import Register from "./components/register/Register";
import MessagePage from "./components/messagePage/MessagePage";
import Settings from "./components/settings/Settings";

function App() {
	return (
		<div className="App d-flex align-items-center justify-content-center">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/message" element={<MessagePage />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
