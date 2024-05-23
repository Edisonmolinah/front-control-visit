import { Button, Flex, Text } from '@chakra-ui/react'
import { getStatus, getVisitor } from '../src/components/utils';
import VisitorTable from '../src/components/VisitorTable';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Pending() {
    const [data, setData]= useState()
    useEffect (()=> {
        const fetchdetailStatus = async () => {
          try {
            const data = await getVisitor();
            setData(data);
          } catch (error) {
            console.error('Error al obtener Position:', error.message);
          }
        };
    
        fetchdetailStatus();
      },[])

  return (
   <Flex direction={'column'}gap={5} margin={5} alignItems={'center'}>
    <Flex alignItems={'start'} w='full' margin={5}>
      <Button
            as={Link}
            href={'/'}
            variant={"brandPrimary"} 
        >
            Inicio
        </Button>
        </Flex> 
    <Text  fontSize={20} variant={'h1'} fontWeight={500} > Informacion Pendiente</Text>
    <VisitorTable data={data} />
   </Flex>
  )
}
