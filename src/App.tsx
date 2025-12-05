import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VersionSwitcher } from "@/components/VersionSwitcher";
import { ClassicLanding } from "@/pages/ClassicLanding";
import { GenZLanding } from "@/pages/GenZLanding";

function App() {
  return (
    <BrowserRouter>
      <div className="dark min-h-screen bg-background text-foreground">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/classic" replace />} />
          <Route path="/classic" element={<ClassicLanding />} />
          <Route path="/genz" element={<GenZLanding />} />
        </Routes>
        <Footer />
        <VersionSwitcher />
      </div>
    </BrowserRouter>
  );
}

export default App;
