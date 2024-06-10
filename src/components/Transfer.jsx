import { Box, Button, Flex, FormControl, FormLabel, Input, Table, TableContainer, Tbody, Td, Tr, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
const initData = {
    accountNo: "",
    userName: "",
    password: "",
    targetAccountNo: "",
    amount: "",

}
function Transfer() {
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
            const res = await axios.patch("http://localhost:5000/bank/transfer", formData);
            console.log(res?.data)
            setData(res?.data)
            setFormData(initData)
            if (res?.data) {

                toast({
                    title: 'Amount Transfer',
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })

            }


        }
        catch (err) {
            toast({
                title: 'Some thing went wrong.',
                status: 'warning',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    const { userName, password, amount, accountNo, targetAccountNo } = formData;

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
                            <FormLabel>UserName</FormLabel>
                            <Input onChange={handleChange} name="userName" value={userName} w="100%" placeholder='userName' />
                        </FormControl>


                        <FormControl isRequired mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handleChange} name="password" value={password} w="100%" placeholder='password' />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Target Account</FormLabel>
                            <Input onChange={handleChange} name="targetAccountNo" value={targetAccountNo} w="100%" placeholder='targetAccountNo' />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Amount</FormLabel>
                            <Input onChange={handleChange} name="amount" value={amount} w="100%" placeholder='amount' />
                        </FormControl>


                        <Button mt={4} colorScheme="blue" w="100%" type="submit">Submit</Button>
                    </form>

                </Box>
                <Box bg="burlywood" rounded={"20px"} p="40px" w="25%" boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}>
                    <TableContainer>
                        <Table variant='simple' >


                            <Tbody overflow={"hidden"}>
                                <Tr>
                                    <Td>sender A/C</Td>
                                    <Td>{data?.sender}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Receiver A/C</Td>
                                    <Td>{data?.reciever}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Transfer Amount</Td>
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

export default Transfer
