import React from "react";
import {
  Box,
  Flex,
  Container,
  Input,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  useColorMode,
  useToast,
  Text,
  Heading
} from "@chakra-ui/react";
import { ChevronDownIcon, BellIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "Logged out! This is just a checking point",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000);
  };
  return (
    <Box
      py={2}
      bgColor= "#808000"
      position="sticky"
      top={0}
      zIndex={100}
    >
      <Container maxW="container.lg">
        <Flex justify="space-around" align="center">
          <Box w="200%">
            <Heading> USER DASHBOARD </Heading>
          </Box>
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Toggle Theme"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                bg="transparent"
                border="none"
                onClick={toggleColorMode}
              />
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon boxSize={6} />}
                bg="transparent"
                border="none"
                onClick={()=>{
                    toast({
                        title: "Notifications",
                        description: "No Notifications",
                        status: "warning",
                        duration: 1500,
                        isClosable: true

                    })
                }}
              >
                <Badge colorScheme="red" color="red">
                  3
                </Badge>
              </IconButton>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<ChevronDownIcon boxSize={6} />}
                  variant="unstyled"
                />
                <MenuList>
                  <MenuItem onClick={()=>{window.location.href = "/dashboard";}}>Dasboard</MenuItem>
                  <MenuItem onClick={()=>{
                    toast({
                        description: "This feature is not available yet",
                        status: 'info',
                        duration: 1500,
                        isClosable: true
                    })
                  }}>Users</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  
                </MenuList>
              </Menu>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;