import { Box, Button, Flex, FormControl, FormLabel, Input, Table, TableContainer, Tbody, Td, Tr, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
const initData = {
    accountNo: "",
    password: "",
    amount: "",

}
function Balance() {
    const [formData, setFormData] = useState(initData)
    const [data, setData] = useState({});
    const toast = useToast();
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })


    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {

            const res = await axios.post("http://localhost:5000/bank/getBankDetails", formData);
            console.log(res?.data)
            setData(res?.data?.data)
            setFormData(initData)

            toast({
                title: 'Balance Fetched.',
                description: "You can your balance.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })


        }
        catch (err) {
            toast({
                title: 'Some thing went wrong or Invalid credentials',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    const { accountNo, password } = formData;

    return (
        <>


            <Flex justifyContent={"space-between"}>
                <Box bg="burlywood" rounded={"20px"} p="40px" w="25%" boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>Account No</FormLabel>
                            <Input onChange={handleChange} name="accountNo" value={accountNo} w="100%" placeholder='accountNo' />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handleChange} name="password" value={password} w="100%" placeholder='password' />
                        </FormControl>



                        <Button mt={4} colorScheme="blue" w="100%" type="submit">Submit</Button>
                    </form>

                </Box>
                <Box bg="burlywood" rounded={"20px"} p="40px" w="25%" boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}>
                    <TableContainer>
                        <Table variant='simple' >


                            <Tbody overflow={"hidden"}>
                                <Tr>
                                    <Td>Username</Td>
                                    <Td>{data?.userName}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Email</Td>
                                    <Td>{data?.email}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Balance</Td>
                                    <Td>{data?.amount}</Td>

                                </Tr>

                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
        </>
    )
}

export default Balance
