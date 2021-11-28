import React from "react";
import { Layout } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="profile" />
        <Route path="bookmarks" />
        <Route path="messages" />
        <Route path="explore" />
      </Route>

		<Route path="/auth" element={<div></div>}>
			<Route path="login" element={<div></div>}></Route>
			<Route path="register" element={<div></div>}></Route>
		</Route>
    </Routes>
  );
}

export default App;
