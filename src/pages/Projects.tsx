// src/pages/Projects.tsx
import { Box, Text, SimpleGrid, Image, Badge } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";
import zuriimg from "../assets/zuri express tugas andri.png";
import Home from "../assets/Home zuex Chakra.png";
import tabel from "../assets/tabel admin zuex.png";
import Dashboard from "../assets/Dashboard Zuex.png";
import menu from "../assets/menu.jpg";
import biodatazan from "../assets/biodatazan.png";
import Tabel from "../assets/Tabel .png";

const MotionBox = motion(Box);

export default function Projects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const gridX = useTransform(mouseX, [0, window.innerWidth], [0, 60]);
  const gridY = useTransform(mouseY, [0, window.innerHeight], [0, 60]);
  const particlesX = useTransform(mouseX, [0, window.innerWidth], [0, 40]);
  const particlesY = useTransform(mouseY, [0, window.innerHeight], [0, 40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const projects = [
    {
      title: "Create Hotels Reservation",
      category: "Web / Coding",
      description: "Creating a hotel reservation display that is connected to the database (Laravel & PHP)",
      img: zuriimg,
    },
    {
      title: "Create Table KTP",
      category: "Web / Coding",
      description: "Creating a Table KTP",
      img: Tabel,
    },
    {
      title: "Create Sidebar By ChakraUI",
      category: "Web / Coding",
      description: "Sistem web untuk manajemen kamar, tamu, dan reservasi hotel.",
      img: Dashboard,
    },
    {
      title: "Create Table By Tanstack Table",
      category: "Web / Coding",
      description: "Aplikasi menu makanan dengan keranjang belanja.",
      img: tabel,
    },
    {
      title: "Creating a dashboard page",
      category: "Web / Coding",
      description: "Aplikasi menu makanan dengan keranjang belanja.",
      img: Home,
    },
    {
      title: "Create menu and recipe pages",
      category: "Web / Coding",
      description: "Aplikasi menu makanan dengan keranjang belanja.",
      img: menu,
    },
    {
      title: "Create My Portofolio",
      category: "Web / Coding",
      description: "Aplikasi menu makanan dengan keranjang belanja.",
      img: biodatazan,
    },
  ];

  // Layer partikel
  const particlesLayer = (size: number, opacity: number, color: string) => (
    <MotionBox
      position="absolute"
      inset={0}
      zIndex={-2}
      bgImage={`radial-gradient(${color} ${size}px, transparent ${size}px)`}
      bgSize={`${size * 2}px ${size * 2}px`}
      style={{
        transform: `translate(${particlesX.get()}px, ${particlesY.get()}px)`,
      }}
      opacity={opacity}
      pointerEvents="none"
    />
  );

  return (
    <Box minH="100vh" display="flex" flexDirection="column" position="relative" overflow="hidden" bg="black">
      {/* Gradient Background */}
      <MotionBox
        position="absolute"
        inset={0}
        zIndex={-5}
        bgGradient="linear(45deg, #0a0a0a, #001933, #00264d, #003366, #0a0a0a)"
        bgSize="400% 400%"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        pointerEvents="none"
      />

      {/* Neon Grid */}
      <MotionBox
        position="absolute"
        inset={0}
        zIndex={-4}
        bgImage="linear-gradient(0deg, rgba(0,255,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px)"
        bgSize="60px 60px"
        style={{
          transform: `translate(${gridX.get()}px, ${gridY.get()}px)`,
        }}
        pointerEvents="none"
      />

      {/* Particles */}
      {particlesLayer(2, 0.1, "rgba(0,255,0,0.2)")}
      {particlesLayer(3, 0.05, "rgba(0,255,255,0.15)")}
      {particlesLayer(4, 0.08, "rgba(255,0,255,0.1)")}

      <Navbar />

      <Box px={{ base: 6, md: 20 }} py={12} flex={1} zIndex={1}>
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={4} textAlign="center" color="whiteAlpha.900">
          My Projects
        </Text>
        <Text mb={10} textAlign="center" color="whiteAlpha.700">
          A showcase of my work, from web development to automotive and creative projects.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {projects.map((project) => (
            <MotionBox
              key={project.title}
              bg="whiteAlpha.100"
              borderRadius="lg"
              shadow="lg"
              overflow="hidden"
              cursor="pointer"
              whileHover={{ y: -10, scale: 1.03 }}
              _hover={{
                boxShadow:
                  "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <Image src={project.img} alt={project.title} w="100%" h="200px" objectFit="cover" />
              <Box p={4}>
                <Badge colorScheme="cyan" mb={2}>
                  {project.category}
                </Badge>
                <Text fontWeight="bold" fontSize="xl" mb={2} color="whiteAlpha.900">
                  {project.title}
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800">
                  {project.description}
                </Text>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
}
