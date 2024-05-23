import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
   <Flex wrap={'wrap'}gap={5} margin={5} alignItems={'center'} justifyContent={'center'} w={'100vw'}h={'70vh'}>
    <Button variant={"brandPrimary"} as={Link} href={"/page_registro"}>Registro</Button>
    <Button variant={"brandPrimary"} as={Link} href={"/detail"}>Ingresos</Button>
    <Button variant={"brandPrimary"} as={Link} href={"/pending"}>Ingresos pendientes</Button>
   </Flex>
  )
}
