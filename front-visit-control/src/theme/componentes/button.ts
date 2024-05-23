import { defineStyle, defineStyleConfig } from '@chakra-ui/react'


const brandPrimary = defineStyle({
    background: '#28B463',
    color: '#000',
    fontWeight: 'bold',
})

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary }
})