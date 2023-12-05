import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { ThemeProvider } from "./hooks/ThemeContext";
import "../src/index.css";
import Collections from "./pages/Collections/Collections";
import BookInfo from "./pages/Collections/BookInfo";
function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/collections" element={<Collections />}></Route>
          <Route path="/collections/:id" element={<BookInfo />}></Route>
          <Route path="*">Page Not Found</Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
