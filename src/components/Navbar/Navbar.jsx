import { Image, Button, Flex,Text, Box, Heading } from "@chakra-ui/react"
import "./navbar.css"
import { TiArrowBackOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const { pathname } = useLocation();
    console.log(pathname)


    return (
        <>
            <Flex justifyContent={"space-between"} px="20px" bg="black" alignItems={"center"}>
                <Image h="80px" src="/kunal_Logo.png" alt="logo" />
                <Box textAlign={"center"}>
                <Heading color={"white"} fontFamily={"cursive"}>
                    Apna Bank
                    <Text mt={2} fontSize={"small"}>Extraordinary Service</Text>
                </Heading>
                </Box>
                <Box>
                    {pathname == "/yourBank" && <Button leftIcon={<TiArrowBackOutline />} colorScheme='blue' variant='solid'>
                        <Link to="/">    Go To Dashboard</Link>
                    </Button>}
                </Box>
            </Flex>


        </>
    )
}

export default Navbar
