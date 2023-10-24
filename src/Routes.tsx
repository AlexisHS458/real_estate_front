import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./pages/login";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	);
}

export default AppRoutes;
