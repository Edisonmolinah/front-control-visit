import React, { useEffect, useState } from 'react';
import { Button, Center, Flex, Text } from '@chakra-ui/react';
import { getVisitor } from '../src/components/utils';
import CardVisitor from '../src/components/CardVisitor';
import Link from 'next/link';

const RegistroPage = () => {
    const [listVisitor, setListVisitor]= useState()

    useEffect (()=> {
        const fetchVisitor = async () => {
          try {
            const data = await getVisitor();
            setListVisitor(data);
          } catch (error) {
            console.error('Error al obtener Position:', error.message);
          }
        };
    
        fetchVisitor();
      },[])
  return (
    <Flex w='full' direction={'column'} alignItems={'center'} gap={5}>
     <Flex alignItems={'start'} w='full' margin={5}>
      <Button
            as={Link}
            href={'/'}
            variant={"brandPrimary"} 
        >
            Inicio
        </Button>
        </Flex>
      <Text fontSize={20} variant={'h1'} fontWeight={500} >Detalle</Text>
      <Flex h={'90%'} wrap={'wrap'} gap={4} m={4} justifyContent={'center'}  alignItems={'center'}>
      {listVisitor?.length > 0 && listVisitor.map(visitor => (
             <CardVisitor data={visitor} key={visitor.id} />     
        ))}
        </Flex>
    </Flex>
  );
};

export default RegistroPage;