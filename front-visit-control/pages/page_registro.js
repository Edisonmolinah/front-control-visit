import React from 'react';
import Registro from '../src/components/registro';
import { Button, Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
const RegistroPage = () => {

  return (
    <Flex w='full' direction={'column'} alignItems={'center'}>
    <Flex alignItems={'start'} w='full' margin={5}>
      <Button
            as={Link}
            href={'/'}
            variant={"brandPrimary"} 
        >
            Inicio
        </Button>
        </Flex>
      <Text fontSize={20} variant={'h1'} fontWeight={500}>Registro</Text>
      <Registro />
    </Flex>
  );
};

export default RegistroPage;