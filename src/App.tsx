import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { DarkModeProvider } from "./contexts/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
