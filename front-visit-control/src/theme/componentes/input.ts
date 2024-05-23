import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  background: 'white.100 !important',
  
  field: {
    fontFamily: 'arial',
    color: '#000',
    borderRadius:'30px',
    backgroundColor: 'white !important',
    '::placeholder': {
      color: 'black',
    },
  },
})

export const inputTheme = defineMultiStyleConfig({ baseStyle })