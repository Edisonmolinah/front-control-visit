import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getStatus } from './utils';

const VisitorTable = ({ data }) => {
const [statusList, setStatusList]= useState()

  useEffect (()=> {
    const fetchStatus = async () => {
      try {
        const response = await getStatus();
        setStatusList(response);
      } catch (error) {
        console.error('Error al obtener Position:', error.message);
      }
    };

    fetchStatus();
  },[])
  const getStatusName = (statusId) => {
    const status = statusList?.find(status => status._id === statusId);
    return status ? status.name_status : 'Desconocido';
};
const pendingVisitors = data?.filter(visitor => visitor.status === "664e39ecb8788921ef88b3fc");

  return (
    <Table  variant='striped' colorScheme='whiteAlpha' border={'1px solid #999'} borderRadius={20}>
      <Thead>
        <Tr color={'white'}>
          <Th color={'white'} fontSize={16}>Nombre</Th>
          <Th color={'white'} fontSize={16}>Apellido</Th>
          <Th color={'white'} fontSize={16}>Tipo de documento</Th>
          <Th color={'white'} fontSize={16}>Número de documento</Th>
          <Th color={'white'} fontSize={16}>Estado</Th>
         
        </Tr>
      </Thead>
      <Tbody>
        {data && pendingVisitors.map(visitor => (
          <Tr key={visitor._id}>
            <Td>{visitor.names_visitor}</Td>
            <Td>{visitor.lastname_visitor}</Td>
            <Td>{visitor.type_id_visitor}</Td>
            <Td>{visitor.number_id_visitor}</Td>
            <Td>{getStatusName(visitor.status)}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default VisitorTable;