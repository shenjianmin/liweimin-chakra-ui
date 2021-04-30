import React, { useState } from 'react'
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Button,
  Divider,
  Text,
  Box,
  useToast
} from '@chakra-ui/core'
import { AiOutlineUser, AiOutlineLock, AiOutlinePhone } from "react-icons/ai"
import { registe } from '../services'
import Footer from './Footer'

export default function SignUp () {
  const toast = useToast()
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
    bgColor: '#42c02e',
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
      bgColor: '#3db922'
    }
  }
  const text = {
    fontSize: '12px',
    mb: '50px',
    mt: '10px',
    lineHeight: '20px',
    color: '#969696',
    textAlign: 'center'
  }
  const link = {
    color: '#3194d0',
    textDecoration: 'none',
    fontSize: '12px',
    target: '_blank',
    cursor: 'pointer'
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const getUsername = e => {
    setUsername(e.target.value)
  }

  const getPassword = e => {
    setPassword(e.target.value)
  }

  const getEmail = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = async () => {
    const { data } = await registe({
      user: {
        username,
        password,
        email
      }
    })
    console.log(data)
    toast({
      position: 'top',
      title: "注册成功",
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
          <Input {...input} name='username' value={username} onChange={getUsername} placeholder="你的昵称" />
        </InputGroup>
        <Divider color='hsla(0,0%,71%,.1)'/>
        <InputGroup {...inputGroup}>
          <InputLeftAddon children={<AiOutlinePhone />} {...inputAddon} />
          <Input {...input}  placeholder="邮箱" name='email' value={email} onChange={getEmail} />
        </InputGroup>
        <Divider color='hsla(0,0%,71%,.1)'/>
        <InputGroup {...inputGroup}>
          <InputLeftAddon children={<AiOutlineLock />} {...inputAddon} />
          <Input {...input} name='password' value={password} onChange={getPassword} type="password" placeholder="设置密码" />
        </InputGroup>
      </Stack>
      <Button {...btn} mt='20px' onClick={handleSubmit}>注册</Button>
      <Box {...text}>
        点击 “注册” 即表示您同意并愿意遵守简书<br />
        <Text {...link} as='a' href='http://www.jianshu.com/p/c44d171298ce'>用户协议</Text> 和 <Text {...link} as='a' href='http://www.jianshu.com/p/2ov8x3'>隐私政策</Text> 。
      </Box>
      <Footer/>
    </form>
  )
}