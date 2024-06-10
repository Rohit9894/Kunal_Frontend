import { Button, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import NewAccount from "../components/NewAccount"
import Balance from "../components/Balance"
import Deposite from "../components/Deposite"
import WithDraw from "../components/WithDraw"
import Transfer from "../components/Transfer"
import { TiArrowBackOutline } from "react-icons/ti";


function YourBank() {


    return (
        <>


            <Tabs variant='unstyled'>
                <TabList background={"burlywood"} >
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>NEW ACCOUNT</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>BALANCE</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>DEPOSITE</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>WITHDRAW</Tab>
                    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>TRANSFER</Tab>




                </TabList>
                <TabPanels m="auto">
                    <TabPanel>
                        <NewAccount />
                    </TabPanel>
                    <TabPanel>
                        <Balance />
                    </TabPanel>
                    <TabPanel>
                        <Deposite />
                    </TabPanel>
                    <TabPanel>
                        <WithDraw />
                    </TabPanel>
                    <TabPanel>
                        <Transfer />
                    </TabPanel>
                </TabPanels>
            </Tabs>

        </>
    )
}

export default YourBank
