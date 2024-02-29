import React, { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseConfig";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import AdminPage from "./components/AdminPage";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route
                    path="/admin"
                    element={ <AdminPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
