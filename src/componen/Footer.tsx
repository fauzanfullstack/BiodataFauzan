// src/componen/Footer.tsx
import { Box, Flex, Link } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const glowY = useTransform(mouseY, [0, 300], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const socialLinks = [
    { icon: MdEmail, href: "mailto:programerfauzan@gmail.com" },
    { icon: MdPhone, href: "tel:081213703750" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/zan_permana?igsh=MTB6eWhsazZ6b3dzaw==",
      target: "_blank",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@fauzanpermana62?_t=ZS-8zPIv7FyPwX&_r=1",
      target: "_blank",
    },
  ];

  return (
    <MotionBox
      as="footer"
      position="relative"
      overflow="hidden"
      py={6}
      display="flex"
      flexDirection="column"
      borderTop="2px solid rgba(255,255,255,0.15)"
      color="whiteAlpha.900"
      bgGradient="linear(135deg, #0a0a0a, #111111, #0a0a0a, #111111, #0072ff, #00e5ff, #00c6ff)"
      bgSize="400% 400%"
      textShadow="0 0 8px rgba(0,255,255,0.7)"
      className="gradientShift" // pakai className untuk animasi
    >
      {/* Floating glow circle */}
      <MotionBox
        position="absolute"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="radial-gradient(circle, rgba(0,255,255,0.4) 0%, transparent 60%)"
        style={{
          translateX: glowX,
          translateY: glowY,
        }}
        zIndex={0}
        pointerEvents="none"
      />

      {/* Social Icons */}
      <Flex
        w="100%"
        maxW="container.lg"
        px={8}
        justify="space-between"
        align="center"
        mb={4}
        zIndex={1}
      >
        {socialLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <MotionLink
              key={i}
              href={item.href}
              target={item.target}
              whileHover={{ scale: 1.3, textShadow: "0 0 12px rgba(0,255,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              color="white"
            >
              <Icon size={28} />
            </MotionLink>
          );
        })}
      </Flex>

      {/* Copyright */}
      <Box textAlign="center" fontSize="sm" color="gray.300" zIndex={1}>
        © {new Date().getFullYear()} Fauzan Permana. All rights reserved.
      </Box>
    </MotionBox>
  );
}
