// src/pages/Home.tsx
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { keyframes } from "@emotion/react";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";
import fauzan from "../assets/fauzan.jpg";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const neonPulse = keyframes`
  0% { text-shadow: 0 0 5px cyan; }
  50% { text-shadow: 0 0 25px cyan, 0 0 40px cyan; }
  100% { text-shadow: 0 0 5px cyan; }
`;

const buttonGlow = keyframes`
  0% { box-shadow: 0 0 5px cyan; }
  50% { box-shadow: 0 0 20px cyan, 0 0 35px cyan; }
  100% { box-shadow: 0 0 5px cyan; }
`;

export default function Home() {
  const descriptions: string[] = [
    "I’m a passionate web developer, skilled in building modern, responsive, and visually appealing web applications.",
    "My focus is on delivering user-friendly interfaces, smooth experiences, and scalable applications.",
    "Beyond coding, I enjoy following vehicle modification trends, both motorcycles and cars.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % descriptions.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + descriptions.length) % descriptions.length);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Partikel background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 3 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,255,255,0.7)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Flex direction="column" minH="100vh" position="relative" overflow="hidden" bg="black" color="whiteAlpha.900">
      <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -2 }} />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bgGradient="radial(circle at 50% 50%, rgba(0,255,255,0.1), transparent 70%)"
        zIndex={-1}
      />

      <Navbar />

      <Flex flex="1" justify="center" align="center" px={8} py={20} direction={{ base: "column", md: "row" }} gap={12}>
        <MotionBox
          borderRadius="full"
          overflow="hidden"
          boxSize={{ base: "180px", md: "240px" }}
          border="2px solid cyan"
          shadow="2xl"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1, 1.08] }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 5 }}
          whileHover={{ scale: 1.25, rotate: 0 }}
        >
          <Image src={fauzan} alt="Foto Fauzan" boxSize="100%" objectFit="cover" />
        </MotionBox>

        <MotionBox
          maxW="lg"
          bg="rgba(20,20,20,0.85)"
          p={8}
          borderRadius="2xl"
          shadow="xl"
          backdropFilter="blur(12px)"
          minH="220px"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 120 }}
          whileHover={{ y: -12, scale: 1.04 }}
        >
          <MotionText fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={4} animation={`${neonPulse} 1.8s infinite`}>
            Hi, I’m Fauzan 👋
          </MotionText>

          <MotionBox
            key={currentIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95, rotate: -2 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: -30, scale: 0.95, rotate: 2 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <Text fontSize="md" lineHeight="tall" color="whiteAlpha.800">
              {descriptions[currentIndex]}
            </Text>
          </MotionBox>

          <Flex mt={6} justify="space-between">
            <Button
              onClick={handlePrev}
              variant="outline"
              colorScheme="cyan"
              size="lg"
              _hover={{ animation: `${buttonGlow} 1.5s infinite` }}
            >
              ← Previous
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              colorScheme="cyan"
              size="lg"
              _hover={{ animation: `${buttonGlow} 1.5s infinite` }}
            >
              Next →
            </Button>
          </Flex>
        </MotionBox>
      </Flex>

      <Footer />
    </Flex>
  );
}
