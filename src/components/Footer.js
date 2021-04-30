import React from 'react'
import {
  Box,
  Text,
  HStack
} from '@chakra-ui/core'
import { FaWeibo, FaWeixin, FaQq } from "react-icons/fa";

export default function Footer (props) {

  const title = {
    display: 'block',
    w: '100%',
    textAlign: 'center',
    pos: 'relative',
    margin: '0 0 10px',
    color: '#b5b5b5',
    fontSize: '12px',
    _before: {
      content: `''`,
      borderTop: '1px solid #b5b5b5',
      display: 'block',
      pos: 'absolute',
      width: '60px',
      top: '8px',
      left: '30px'
    },
    _after: {
      content: `''`,
      borderTop: '1px solid #b5b5b5',
      display: 'block',
      pos: 'absolute',
      width: '60px',
      top: '8px',
      right: '30px'
    }
  }
  return (
    <Box pos='relative' w='100%' mb='20px'>
      <Text {...title} as='h6'>社交帐号登录</Text>
      <HStack fontSize='3xl' justify='center' spacing='32px' marginTop='21px'>
        {
          props.type === 'signin' ? <FaWeibo color='#e05244' cursor='pointer' as='a' href='#'/> : null
        }
        <FaWeixin color='#00bb29' cursor='pointer' target='_blank' as='a' href='https://www.jianshu.com/users/auth/wechat'/>
        <FaQq color='#498ad5' cursor='pointer' target='_blank' as='a' href='https://www.jianshu.com/users/auth/qq_connect'/>
      </HStack>
    </Box>
  )
}