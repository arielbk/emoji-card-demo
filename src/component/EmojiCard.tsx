import { Box, BoxProps } from "@chakra-ui/react";
import { motion, useTime, useTransform } from "framer-motion";

const AnimatedBox = motion(Box);

interface Props {
  emoji: string;
}

export default function EmojiCard({
  emoji,
  children,
  ...rest
}: Props & BoxProps) {
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 16000], // every 16 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false },
  );
  return (
    <Box
      overflow="hidden"
      position="relative"
      maxW={700}
      borderRadius={8}
      bg="#181818"
      {...rest}
    >
      <AnimatedBox
        style={{ rotate }}
        position="absolute"
        left={0}
        top={0}
        width="100%"
        height="100%"
        justifyContent={"center"}
        alignItems={"center"}
        display="flex"
        _before={{
          content: `"${emoji}"`,
          fontSize: 1100,
        }}
        filter={"blur(80px)"}
      />
      <Box
        px={8}
        py={4}
        gap={{ base: 0, sm: 8 }}
        display="flex"
        alignItems="center"
        flexDirection={{ base: "column", sm: "row" }}
        borderRadius={6}
        position="relative"
        border="2px solid transparent"
        backgroundClip="padding-box"
        backgroundImage="linear-gradient(rgb(20 20 20 / 0.8), rgb(20 20 20))"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="80px"
          width="200px"
        >
          {emoji}
        </Box>
        <Box height="100%" textAlign={{ base: "center", sm: "left" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
