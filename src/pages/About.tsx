// src/pages/About.tsx
import { Box, Text, HStack, Button, SimpleGrid, VStack } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export default function About() {
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

  const skills = [
    { skill: "JavaScript / TypeScript", value: 90 },
    { skill: "React / React Native", value: 85 },
    { skill: "Laravel / PHP", value: 80 },
    { skill: "Chakra UI / Tailwind CSS", value: 75 },
    { skill: "UI/UX Design Basics", value: 70 },
  ];

  const aboutCards = [
    {
      title: "About Me",
      content:
        "Hi! I’m Fauzan, a passionate web developer who loves building modern, responsive web applications with clean design and smooth user experience. I enjoy exploring new technologies and integrating AI in my projects.",
    },
    {
      title: "Personal Information",
      content: [
        "Full Name: Fauzan Permana",
        "Date of Birth: 25 December 2008",
        "Location: Garut, West Java, Indonesia",
        "Email: programerfauzan@gmail.com",
      ],
    },
    {
      title: "Experience & Projects",
      content: [
        "- IT Support Intern at Zuri Express, Lippo Cikarang",
        "- Developed a simple Hotel Management System using Laravel, PHP, and SQL",
      ],
    },
    {
      title: "Soft Skills",
      content: ["- Problem-solving", "- Teamwork", "- Adaptability", "- Creativity"],
    },
    {
      title: "Hobbies & Interests",
      content: [
        "- Automotive & Electrical projects",
        "- Badminton, Car & Motorcycle Modification",
        "- Exploring new technologies and AI integration",
      ],
    },
    {
      title: "Goals & Aspirations",
      content: [
        "- Pursue a Bachelor’s degree in Information Systems",
        "- Keep up with technological advancements",
        "- Own an agricultural business and achieve financial freedom",
      ],
    },
  ];

  // Layer partikel
  const particlesLayer = (size: number, opacity: number, color: string) => (
    <Box
      position="absolute"
      inset={0}
      zIndex={-2}
      bgImage={`radial-gradient(${color} ${size}px, transparent ${size}px)`}
      bgSize={`${size * 2}px ${size * 2}px`}
      style={{
        translateX: particlesX,
        translateY: particlesY,
      }}
      opacity={opacity}
      pointerEvents="none"
    />
  );

  return (
    <Box minH="100vh" display="flex" flexDirection="column" position="relative" overflow="hidden" bg="black">
      {/* Neon Grid */}
      <MotionBox
        position="absolute"
        inset={0}
        zIndex={-4}
        bgImage={`linear-gradient(0deg, rgba(0,255,0,0.05) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px)`}
        bgSize="60px 60px"
        style={{
          translateX: gridX,
          translateY: gridY,
        }}
        pointerEvents="none"
      />

      {/* Glowing Particles */}
      {particlesLayer(2, 0.1, "rgba(0,255,0,0.2)")}
      {particlesLayer(3, 0.05, "rgba(0,255,255,0.15)")}
      {particlesLayer(4, 0.08, "rgba(255,0,255,0.1)")}

      <Navbar />

      <Box px={{ base: 6, md: 20 }} py={12} zIndex={1} w="full">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {aboutCards.map((card) => (
            <MotionBox
              key={card.title}
              bg="whiteAlpha.100"
              p={6}
              borderRadius="lg"
              shadow="lg"
              whileHover={{ y: -10, scale: 1.03 }}
              _hover={{
                boxShadow:
                  "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
              }}
            >
              <Text fontWeight="bold" fontSize="xl" mb={3} color="whiteAlpha.900">
                {card.title}
              </Text>
              {Array.isArray(card.content) ? (
                <VStack align="start">
                  {card.content.map((line, idx) => (
                    <MotionText key={idx} color="whiteAlpha.900">
                      {line}
                    </MotionText>
                  ))}
                </VStack>
              ) : (
                <MotionText color="whiteAlpha.800">{card.content}</MotionText>
              )}
            </MotionBox>
          ))}

          {/* Skills Card */}
          <MotionBox
            bg="whiteAlpha.100"
            p={6}
            borderRadius="lg"
            shadow="lg"
            gridColumn={{ base: "span 1", md: "span 2" }}
            whileHover={{ y: -10, scale: 1.03 }}
            _hover={{
              boxShadow:
                "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
            }}
          >
            <Text fontWeight="bold" fontSize="xl" mb={3} color="whiteAlpha.900">
              Technical Skills
            </Text>
            {skills.map((item) => (
              <Box key={item.skill} mb={4}>
                <HStack justify="space-between" mb={1}>
                  <MotionText color="whiteAlpha.900">{item.skill}</MotionText>
                  <MotionText color="whiteAlpha.800">{item.value}%</MotionText>
                </HStack>
                <Box bg="whiteAlpha.300" borderRadius="md" h="6px">
                  <MotionBox bg="cyan.400" h="6px" w={`${item.value}%`} borderRadius="md" />
                </Box>
              </Box>
            ))}
          </MotionBox>

          {/* Call to Action Button */}
          <Box gridColumn={{ base: "span 1", md: "span 2" }} textAlign="center" mt={4}>
            <MotionBox>
              <Button
                size="lg"
                px={8}
                py={6}
                fontSize="lg"
                borderRadius="full"
                shadow="lg"
                bgGradient="linear(to-r, cyan.400, blue.500, cyan.500)"
                _hover={{
                  transform: "scale(1.08)",
                  bgGradient: "linear(to-r, cyan.500, cyan.400, blue.500)",
                }}
                onClick={() => (window.location.pathname = "/projects")}
              >
                View My Projects 🚀
              </Button>
            </MotionBox>
          </Box>
        </SimpleGrid>
      </Box>

      <Footer />
    </Box>
  );
}
