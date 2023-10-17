import { Box, BoxProps } from "@chakra-ui/react";

interface Props {
  emoji: string;
}

export default function EmojiCard({
  emoji,
  children,
  ...rest
}: Props & BoxProps) {
  return (
    <Box maxW={700} borderRadius={8} bg="#181818" {...rest}>
      <Box
        px={8}
        py={4}
        gap={{ base: 0, sm: 8 }}
        display="flex"
        alignItems="center"
        flexDirection={{ base: "column", sm: "row" }}
        borderRadius={6}
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
