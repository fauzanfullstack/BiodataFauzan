// src/components/Navbar.tsx
import { Flex, Text, Button, VStack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "School", path: "/school" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <MotionFlex
      as="nav"
      justify="space-between"
      align="center"
      px={6}
      py={4}
      bgGradient="linear-gradient(135deg, #0a0a0a, #0a0a0a, #111111, #0a0a0a)"
      bgSize="400% 400%"
      color="white"
      position="sticky"
      top={0}
      zIndex={20}
      boxShadow="lg"
      borderBottom="2px solid rgba(255,255,255,0.15)"
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Nama / Logo dengan animasi geser */}
      <MotionText
        fontSize="2xl"
        fontWeight="extrabold"
        letterSpacing="wide"
        textShadow="0 0 8px cyan"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        Fauzan Permana
      </MotionText>

      {/* Menu desktop */}
      <Flex
        gap={6}
        fontWeight="medium"
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item) => (
          <RouterLink
            key={item.label}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            <Text
              _hover={{ color: "cyan.300", transform: "scale(1.1)" }}
              transition="all 0.3s ease"
              textShadow="0 0 6px cyan" // efek glow neon
            >
              {item.label}
            </Text>
          </RouterLink>
        ))}
      </Flex>

      {/* Tombol toggle menu mobile (pakai simbol teks) */}
      <Button
        aria-label="Toggle Menu"
        display={{ base: "flex", md: "none" }}
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        color="white"
        fontSize="2xl"
        _hover={{ bg: "transparent", color: "cyan.300" }}
      >
        {isOpen ? "✖" : "☰"}
      </Button>

      {/* Menu mobile (dropdown) */}
      {isOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          bg="#0a0a0a"
          borderBottom="2px solid rgba(255,255,255,0.15)"
          boxShadow="md"
          py={4}
          display={{ base: "block", md: "none" }}
        >
          <VStack gap={4}>
            {navItems.map((item) => (
              <RouterLink
                key={item.label}
                to={item.path}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontWeight="medium"
                  _hover={{ color: "cyan.300", transform: "scale(1.1)" }}
                  transition="all 0.3s ease"
                  textShadow="0 0 6px cyan"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Text>
              </RouterLink>
            ))}
          </VStack>
        </Box>
      )}
    </MotionFlex>
  );
}
