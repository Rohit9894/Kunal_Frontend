import { Box, Button, Flex, FormControl, FormLabel, Input, Table, TableContainer, Tbody, Td, Tr, useToast } from "@chakra-ui/react"
import axios from "axios";
import { useState } from "react";
const initData = {
    userName: "",
    email: "",
    password: "",
    amount: "",
    address: "",
    phone: ""
}
function NewAccount() {
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
            const res = await axios.post("http://localhost:5000/bank/add_account", formData);
            localStorage.setItem("accountNo", res?.data?.user?._id)
            setData(res?.data?.user)
            setFormData(initData)
            if (res?.data?.errorResponse) {

                toast({
                    title: 'This email already taken.',
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                })

            }
            else {
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
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

    const { userName, password, amount, address, phone, email } = formData;

    return (
        <>


            <Flex justifyContent={"space-between"}>
                <Box rounded={"20px"} p="40px" w="25%" bg="burlywood" boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>UserName</FormLabel>
                            <Input onChange={handleChange} name="userName" value={userName} w="100%" placeholder='userName' />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input onChange={handleChange} name="email" value={email} w="100%" placeholder='email' />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input onChange={handleChange} name="password" value={password} w="100%" placeholder='password' />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Amount</FormLabel>
                            <Input onChange={handleChange} name="amount" value={amount} w="100%" placeholder='amount' />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Address</FormLabel>
                            <Input onChange={handleChange} name="address" value={address} w="100%" placeholder='address' />
                        </FormControl>
                        <FormControl isRequired mt={4}>
                            <FormLabel>Phone</FormLabel>
                            <Input onChange={handleChange} name="phone" value={phone} w="100%" placeholder='phone' />
                        </FormControl>

                        <Button mt={4} colorScheme="blue" w="100%" type="submit">Submit</Button>
                    </form>

                </Box>
                <Box rounded={"20px"} bg="burlywood" p="40px" w="25%" boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"}>
                    <TableContainer>
                        <Table variant='simple' >


                            <Tbody overflow={"hidden"}>
                                <Tr>
                                    <Td>Account</Td>
                                    <Td>{data?._id}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Username</Td>
                                    <Td>{data?.userName}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Email</Td>
                                    <Td>{data?.email}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Amount</Td>
                                    <Td>{data?.amount}</Td>

                                </Tr>
                                <Tr>
                                    <Td>Address</Td>
                                    <Td>{data?.address}</Td>

                                </Tr>  <Tr>
                                    <Td>Phone</Td>
                                    <Td>{data?.phone}</Td>

                                </Tr>
                            </Tbody>

                        </Table>
                    </TableContainer>
                </Box>
            </Flex>
        </>
    )
}

export default NewAccount
