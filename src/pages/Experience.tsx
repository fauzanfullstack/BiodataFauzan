// src/pages/Experience.tsx
import { Box, Text, Heading, Button, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";
import fauzankerja from "../assets/fauzan_experience.jpg";

const MotionBox = motion(Box);

export default function Experience() {
  const experiences = [
    {
      title: "Training Hotel Zuri Express",
      duration: "June 2023 - August 2023",
      role: "Front Desk & Guest Service",
      description: `Mengikuti training langsung di Hotel Zuri Express, belajar prosedur check-in/out, pelayanan tamu, manajemen reservasi, dan penggunaan sistem hotel.`,
      photos: [fauzankerja],
      locationLink: "https://goo.gl/maps/example-zuri",
    },
  ];

  const particlesLayer = (size: number, speed: number, opacity: number, color: string) => (
    <MotionBox
      position="absolute"
      inset={0}
      zIndex={-2}
      pointerEvents="none"
      bg={`radial-gradient(${color} ${size}px, transparent ${size}px)`}
      bgSize={`${size * 2}px ${size * 2}px`}
      animate={{
        backgroundPosition: ["0px 0px", `${size * 2}px ${size * 2}px`, "0px 0px"],
      }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      opacity={opacity}
    />
  );

  return (
    <Box minH="100vh" display="flex" flexDirection="column" position="relative" overflow="hidden" bg="black">
      {/* Background Gradient */}
      <MotionBox
        position="absolute"
        inset={0}
        zIndex={-5}
        pointerEvents="none"
        bgGradient="linear(135deg, #00c6ff, #0072ff, #00e5ff, #00aaff)"
        bgSize="400% 400%"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      {particlesLayer(2, 30, 0.1, "rgba(0,255,0,0.2)")}
      {particlesLayer(3, 50, 0.05, "rgba(0,255,255,0.15)")}
      {particlesLayer(4, 80, 0.08, "rgba(255,0,255,0.1)")}

      <Navbar />

      <Box px={{ base: 4, md: 8, lg: 12 }} py={24} zIndex={1} w="full" maxW="100vw">
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          color="whiteAlpha.900"
          textAlign="center"
          mb={12}
          textShadow="0 0 10px rgba(0,255,255,0.7)"
        >
          My Experience
        </Heading>

        <Box display="flex" flexDirection="column" gap={6}>
          {experiences.map((exp) => (
            <MotionBox
              key={exp.title}
              bg="whiteAlpha.100"
              p={6}
              borderRadius="lg"
              shadow="lg"
              cursor="pointer"
              minH="220px"
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              _hover={{
                boxShadow:
                  "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
              }}
            >
              <Flex direction={{ base: "column", md: "row" }} gap={6}>
                <Box flex="2" display="flex" flexDirection="column" justifyContent="space-between">
                  <Box>
                    <Text fontWeight="bold" fontSize="xl" mb={2} color="whiteAlpha.900">
                      {exp.title}
                    </Text>
                    <Text color="whiteAlpha.800" mb={1}>
                      Duration: {exp.duration}
                    </Text>
                    <Text color="whiteAlpha.800" mb={1}>
                      Role: {exp.role}
                    </Text>
                    <Text color="whiteAlpha.800" whiteSpace="pre-line">
                      {exp.description}
                    </Text>
                  </Box>
                  <Box mt={4}>
                    <ChakraLink
                      href={exp.locationLink}
                      color="cyan.300"
                      fontWeight="bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📍 Lihat Lokasi
                    </ChakraLink>
                  </Box>
                </Box>

                <Flex flex="1" direction="row" gap={3} mt={{ base: 4, md: 0 }}>
                  {exp.photos.slice(0, 2).map((photo, idx) => (
                    <Box key={idx} flex="1" h="200px">
                      <Image
                        src={photo}
                        alt={`Foto ${exp.title} ${idx + 1}`}
                        borderRadius="md"
                        objectFit="cover"
                        w="100%"
                        h="100%"
                      />
                    </Box>
                  ))}
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </Box>

        <Box textAlign="center" mt={8}>
          <MotionBox>
            <Button
              size="lg"
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="full"
              shadow="lg"
              bgGradient="linear(to-r, #00e5ff, #0072ff, #00c6ff)"
              _hover={{
                transform: "scale(1.08)",
                bgGradient: "linear(to-r, #00c6ff, #00e5ff, #0072ff)",
              }}
              onClick={() => (window.location.pathname = "/contact")}
            >
              Contact Me? 🚀
            </Button>
          </MotionBox>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
