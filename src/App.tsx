import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

// Import halaman
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import School from "./pages/School";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";




function App() {
  return (
    <BrowserRouter>
      <Flex direction="column" minH="100vh">
        {/* Konten utama */}
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/about" element={<About />} />
             <Route path="/projects" element={<Projects />} />
             <Route path="/school" element={<School />} />
             <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />

            


          </Routes>
        </Box>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
