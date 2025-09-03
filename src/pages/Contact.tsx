// src/pages/Contact.tsx
import { Box, Text, Heading, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";

const MotionBox = motion(Box);

export default function Contact() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      {/* Background Gradient */}
      <MotionBox
        position="absolute"
        inset={0}
        bgGradient="linear(135deg, #00c6ff, #0072ff, #00e5ff, #00aaff)"
        bgSize="400% 400%"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        zIndex={-5}
        pointerEvents="none"
      />

      {/* Particles */}
      {particlesLayer(2, 0.1, "rgba(0,255,0,0.2)")}
      {particlesLayer(3, 0.05, "rgba(0,255,255,0.15)")}
      {particlesLayer(4, 0.08, "rgba(255,0,255,0.1)")}

      <Navbar />

      <Box px={{ base: 4, md: 8, lg: 12 }} py={24} zIndex={1} w="full" maxW="100vw">
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          color="whiteAlpha.900"
          textAlign="center"
          mb={12}
          textShadow="0 0 10px rgba(0,255,255,0.7)"
        >
          Contact Me
        </Heading>

        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          {/* Form */}
          <MotionBox
            flex={1}
            bg="whiteAlpha.100"
            p={6}
            borderRadius="lg"
            shadow="lg"
            minH="400px"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            _hover={{
              boxShadow:
                "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
            }}
          >
            <Text fontSize="xl" fontWeight="bold" color="whiteAlpha.900" mb={4}>
              Get in Touch
            </Text>
            <Input placeholder="Your Name" size="lg" bg="whiteAlpha.200" color="white" mb={4} />
            <Input placeholder="Your Email" size="lg" type="email" bg="whiteAlpha.200" color="white" mb={4} />
            <Input placeholder="Subject" size="lg" bg="whiteAlpha.200" color="white" mb={4} />
            <Textarea placeholder="Your Message" size="lg" rows={6} bg="whiteAlpha.200" color="white" mb={4} />
            <Button
              colorScheme="cyan"
              size="lg"
              w="full"
              bgGradient="linear(to-r, cyan.400, blue.500, cyan.500)"
              _hover={{
                transform: "scale(1.05)",
                bgGradient: "linear(to-r, cyan.500, cyan.400, blue.500)",
              }}
            >
              Send Message
            </Button>
          </MotionBox>

          {/* Google Maps */}
          <MotionBox
            flex={1}
            height="400px"
            borderRadius="lg"
            overflow="hidden"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            _hover={{
              boxShadow:
                "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.2083814075235!2d106.8230967734515!3d-6.200986290958619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f1d79d4e29%3A0x4b1c7f39b0f0b23e!2sMonas%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1693698000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MotionBox>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
}
