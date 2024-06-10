import { Box, Flex, Button, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


function Dashboard() {


    return (
        <>
            <Flex justifyContent="space-between">
                <Box py="40px" w="20%" px="20px" bg="burlywood" h="100vh" gap="50px" display={"flex"} flexDirection={"column"} >


                    <Button colorScheme="blue">    <Link to="/yourBank">Main Menu   </Link></Button>

                    <Button colorScheme="blue">Deposite</Button>
                    <Button colorScheme="blue">Loans</Button>
                    <Button colorScheme="blue">NetBanking</Button>
                    <Button colorScheme="blue">Digital products</Button>
                    <Button colorScheme="blue">Nri Banking</Button>
                </Box>
                <Box py="40px" w="20%" px="20px" bg="burlywood" h="100vh" gap="50px" display={"flex"} flexDirection={"column"} >

                    <Box>
                        <Text fontSize="24px" color={"black"}>
                            Results
                        </Text>
                        <Text mt={1} fontSize="sm" color={"white"}>
                            {/* write */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima nam doloribus officiis illum quod neque voluptas modi, optio quisquam voluptatum, blanditiis numquam. At ullam, officia earum consequatur facilis a.
                        </Text>
                    </Box>


                    <Box mt={2}>
                        <Text fontSize="24px" color={"black"}>
                            Oppurnites
                        </Text>
                        <Text mt={1} fontSize="sm" color={"white"}>
                            {/* write */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima nam doloribus officiis illum quod neque voluptas modi, optio quisquam voluptatum, blanditiis numquam. At ullam, officia earum consequatur facilis a.

                        </Text>
                    </Box>

                    <Box mt={2}>
                        <Text fontSize="24px" color={"black"}>
                            Solutions
                        </Text>
                        <Text mt={1} fontSize="sm" color={"white"}>
                            {/* write */}
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima nam doloribus officiis illum quod neque voluptas modi, optio quisquam voluptatum, blanditiis numquam. At ullam, officia earum consequatur facilis a.


                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Dashboard
