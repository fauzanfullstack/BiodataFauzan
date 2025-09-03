// src/pages/School.tsx
import { Box, Text, Heading, Button, Image, Flex, Link } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";
//import smp from "../assets/smp.jpg";
import SmeaPhoto from "../assets/Smea.jpg";
import FauzanPhoto from "../assets/fauzan.jpg";
import fotosmp from "../assets/fotosmp.jpg"

const MotionBox = motion(Box);

export default function School() {
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

  const education = [
    {
      type: "Elementary School",
      schools: [
        {
          name: "Paud Al-Hikmah Ceria",
          years: "2011-2012",
          location: "Sukawening, Garut, West Java, Indonesia",
          description: `Selama SD, saya aktif dalam kegiatan akademik dan non-akademik. 
Juara lomba matematika, mengikuti lomba membaca puisi, dan aktif dalam kegiatan seni sekolah.`,
          locationLink: "https://goo.gl/maps/example1",
          photos: ["/images/paud.jpg", "/images/fauzan_paud.jpg"],
        },
      ],
    },
    {
      type: "Middle School",
      schools: [
        {
          name: "SMP Negeri 1 Sukawening",
          years: "2019-2023",
          location: "Sukawening, Garut, West Java, Indonesia",
          description: `Di SMP, saya mulai tertarik pada teknologi dan komputer. 
Menjadi anggota OSIS, juara lomba sains, dan ikut beberapa proyek sekolah.`,
          locationLink: "https://goo.gl/maps/example3",
          photos: [fotosmp ],
        },
      ],
    },
    {
      type: "High School",
      schools: [
        {
          name: "SMK Negeri 1 Garut",
          years: "2023 - sekarang",
          location: "Garut, West Java",
          description: `Fokus pada RPL (Rekayasa Perangkat Lunak). 
Mengikuti project coding, belajar Laravel, React Native, dan modifikasi teknologi sederhana.`,
          locationLink: "https://goo.gl/maps/example4",
          photos: [SmeaPhoto, FauzanPhoto],
        },
      ],
    },
  ];

  const particlesLayer = (size: number, speed: number, opacity: number, color: string) => (
    <MotionBox
      position="absolute"
      inset={0}
      zIndex={-2}
      style={{
        backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `${size * 2}px ${size * 2}px`,
        backgroundPositionX: particlesX,
        backgroundPositionY: particlesY,
      }}
      animate={{ backgroundPosition: [`0% 0%`, `${size * 2}px ${size * 2}px`, `0% 0%`] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
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
        style={{
          background: "linear-gradient(135deg, #00c6ff, #0072ff, #00e5ff, #00aaff)",
          backgroundSize: "400% 400%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        zIndex={-5}
        pointerEvents="none"
      />

      {/* Neon Grid */}
      <MotionBox
        position="absolute"
        inset={0}
        style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0,255,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPositionX: gridX,
          backgroundPositionY: gridY,
        }}
        animate={{ backgroundPosition: ["0% 0%", "60px 60px", "0% 0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        zIndex={-4}
        pointerEvents="none"
      />

      {/* Particles */}
      {particlesLayer(2, 30, 0.1, "rgba(0,255,0,0.2)")}
      {particlesLayer(3, 50, 0.05, "rgba(0,255,255,0.15)")}
      {particlesLayer(4, 80, 0.08, "rgba(255,0,255,0.1)")}

      <Navbar />

      <Box px={{ base: 4, md: 8, lg: 12 }} py={12} zIndex={1} w="full" maxW="100vw">
        <Heading
          fontSize={{ base: "3xl", md: "4xl" }}
          color="whiteAlpha.900"
          textAlign="center"
          mb={12}
          textShadow="0 0 10px rgba(0,255,255,0.7)"
        >
          My Education
        </Heading>

        {education.map((section) => (
          <Box key={section.type} mb={12}>
            <Heading size="lg" color="whiteAlpha.900" mb={6}>
              {section.type}
            </Heading>
            <Box display="flex" flexDirection="column">
              {section.schools.map((school) => (
                <MotionBox
                  key={school.name}
                  bg="whiteAlpha.100"
                  p={6}
                  borderRadius="lg"
                  shadow="lg"
                  cursor="pointer"
                  minH="280px"
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  _hover={{
                    boxShadow:
                      "0 0 20px rgba(0,198,255,0.6), 0 0 40px rgba(0,114,255,0.5), 0 0 60px rgba(0,229,255,0.4)",
                  }}
                >
                  <Flex direction={{ base: "column", md: "row" }}>
                    <Box flex="2" display="flex" flexDirection="column" justifyContent="space-between">
                      <Box>
                        <Text fontWeight="bold" fontSize="xl" mb={2} color="whiteAlpha.900">
                          {school.name}
                        </Text>
                        <Text color="whiteAlpha.800" mb={1}>
                          {school.years}
                        </Text>
                        <Text color="whiteAlpha.800" mb={1}>
                          Location: {school.location}
                        </Text>
                        <Text color="whiteAlpha.800" whiteSpace="pre-line">
                          {school.description}
                        </Text>
                      </Box>
                      <Box mt={4}>
                        <Link
                          href={school.locationLink}
                          color="cyan.300"
                          fontWeight="bold"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          📍 Lihat Lokasi
                        </Link>
                      </Box>
                    </Box>

                    {/* Foto Berdampingan Maksimal 2, full card width */}
                    <Flex flex="1" direction="row" gap={2} mt={{ base: 4, md: 0 }}>
                      {school.photos.slice(0, 2).map((photo, idx) => (
                        <Image
                          key={idx}
                          src={photo}
                          alt={`Foto ${school.name} ${idx + 1}`}
                          borderRadius="md"
                          objectFit="cover"
                          flex="1"          // masing-masing foto ambil setengah lebar
                          h="100%"          // tinggi mengikuti card
                          maxH="200px"      // opsional agar tidak terlalu tinggi
                        />
                      ))}
                    </Flex>
                  </Flex>
                </MotionBox>
              ))}
            </Box>
          </Box>
        ))}

        <Box textAlign="center" mt={8}>
          <MotionBox>
            <Button
              size="lg"
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="full"
              shadow="lg"
              bgGradient="linear-gradient(90deg, #00e5ff, #0072ff, #00c6ff)"
              _hover={{
                transform: "scale(1.08)",
                bgGradient: "linear-gradient(90deg, #00c6ff, #00e5ff, #0072ff)",
              }}
              onClick={() => (window.location.pathname = "/experience")}
            >
              View My Experience 🚀
            </Button>
          </MotionBox>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
