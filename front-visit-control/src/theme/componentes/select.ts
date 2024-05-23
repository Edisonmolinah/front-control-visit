import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
 
  field: {
    fontFamily: 'arial',
    background: 'white.100 !important',
    borderRadius:30,
    '::placeholder': {
      color: 'black',
    },
  },
  icon: {
    color: 'black.400',
  },
})

export const selectTheme = defineMultiStyleConfig({ baseStyle })