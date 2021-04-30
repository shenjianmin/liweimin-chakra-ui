import React, { useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Checkbox,
  Flex,
  Link,
  Button,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  useToast
} from "@chakra-ui/core";
// import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"
import { login } from '../services';
import Footer from './Footer';


export default function SignIn() {
  const toast = useToast()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const inputGroup = {
    bgColor: 'hsla(0,0%,71%,.1)',
    borderRadius: 0,
    h: '50px'
  }
  const input = {
    h: '50px',
    fontSize: '14px',
    outline: 'none',
    borderRadius: 0,
    border: 0,
    _focus: {
      outline: 'none',
      border: 0
    }
  }
  const inputAddon = {
    h: '50px',
    fontSize: '20px',
    bgColor: 'hsla(0,0%,71%,.1)',
    border: 0,
    borderRadius: 0,
  }
  const btn = {
    w: '100%',
    bgColor: '#3194d0',
    mt: '5px',
    fontSize: '18px',
    border: 'none',
    borderRadius: '25px',
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
    textAlign: 'center',
    lineHeight: '43px',
    textDecoration: 'none',
    fontWeight: 400,
    _focus: {
      textDecoration: 'none'
    },
    _hover: {
      // bgColor: '#3db922'
      bgColor: '#187cb7'
    }
  }
  const link = {
    color: '#999',
    textDecoration: 'none',
    fontSize: '14px',
    _hover: {
      color: '#2f2f2f'
    }
  }
  const helperItems = {
    display: 'block',
    h: '40px',
    lineHeight: '40px',
    _hover: {
      bgColor: '#f5f5f5'
    },
    cursor: 'pointer',
    pl: '20px'
  }

  const getUsername = e => {
    setUsername(e.target.value)
  }

  const getPassword = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = async () => {
    const { data } = await login({
      user: {
        email: username,
        password
      }
    })
    toast({
      position: 'top',
      title: "登录成功",
      description: `用户名: ${data.user.username}，用户ID: ${data.user.id}`,
      status: "success",
      duration: 3000,
      isClosable: true
    })
  }

  return (
    <form>
      <Stack spacing={0} border='1px solid #c8c8c8' mt='50px' borderRadius='4px'>
        <InputGroup {...inputGroup}>
          <InputLeftAddon children={<AiOutlineUser />} {...inputAddon} />
          <Input {...input} name='username' placeholder="手机号或邮箱" value={username} onChange={getUsername} />
        </InputGroup>
        <Divider color='hsla(0,0%,71%,.1)' />
        <InputGroup {...inputGroup}>
          <InputLeftAddon children={<AiOutlineLock />} {...inputAddon} />
          <Input {...input} name='password' type="password" placeholder="密码" value={password} onChange={getPassword} />
        </InputGroup>
      </Stack>
      <Flex my='15px' justifyContent="space-between">
        <Checkbox defaultChecked size='sm'>记住我</Checkbox>
        <Popover>
          <PopoverTrigger>
            <Link {...link}>登录遇到问题?</Link>
          </PopoverTrigger>
          <PopoverContent w='230px' outline='none' textDecoration='none'>
            <PopoverArrow />
            <PopoverBody padding={0}>
              <Box my='5px'>
                <Box {...helperItems} as='a' href='https://www.jianshu.com/users/password/mobile_reset'>
                  用手机号重置密码
                </Box>
                <Box {...helperItems} as='a' href='https://www.jianshu.com/users/password/email_reset'>
                  用邮箱重置密码
                </Box>
                <Box {...helperItems} as='a' target="_blank" href='https://www.jianshu.com/p/9058d0b8711d'>
                  无法用海外手机号登录
                </Box>
                <Box {...helperItems} as='a' target='_blank' href='https://www.jianshu.com/p/498a9fa7da08'>
                  无法用 google 账号登录
                </Box>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Button {...btn} mb='50px' onClick={handleSubmit}>登录</Button>
      <Footer type='signin' />
    </form>
  )
}
