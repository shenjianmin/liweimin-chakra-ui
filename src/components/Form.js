import React from "react";
import { Box, Tab, Tabs, TabList, TabPanels, TabPanel, Text } from "@chakra-ui/core";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function Form() {
  const box = {
    w: '400px',
    margin: '0 auto',
    padding: '50px 50px 30px',
    bgColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
  const tab = {
    color: '#969696',
    fontSize: '18px',
    margin: '0',
    fontWeight: 400,
    _selected: {
      fontWeight: 700,
      color: '#ea6f5a',
      borderBottom: '2px solid #ea6f5a'
    },
    _focus: {
      bgColor: 'white'
    }
  }

  return (
    <Box {...box}>
      <Tabs isFitted>
        <TabList border='0' justifyContent='center' w='140px' m='0 auto' alignItems='center'>
          <Tab _focus={{ boxShadow: "none" }} {...tab}>登录</Tab>
          <Text> · </Text>
          <Tab _focus={{ boxShadow: "none" }} {...tab}>注册</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding='0'>
            <SignIn />
          </TabPanel>
          <TabPanel padding='0'>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
