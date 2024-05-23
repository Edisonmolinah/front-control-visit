import React, { useEffect, useState } from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';

const CardVisitor = ({data}) => {

  return (
    <Flex 
        w={{base:300, md:450}}
        border={'1px solid #999'} 
        borderRadius={20} 
        direction={'column'} 
        alignItems={'start'}
        padding={5}
        boxShadow="1px 0px 4px 5px rgba(0, 0, 0, 0.1)"
        background={"white"}
        >
            <Flex w={'full'} justifyContent={"space-between"} alignItems={'flex-end'} gap={4}> 
                <Text fontWeight={500}>  
                     { data.names_visitor} &nbsp;{ data.lastname_visitor}
                </Text> 
        
                <Avatar src='https://bit.ly/broken-link' />
            </Flex>
       
            <Text> 
            Cel:&nbsp;   { data.phone_visitor}
            </Text>
            <Text> 
                { data.email_visitor}
            </Text>
        
        
    </Flex>
  );
};

export default CardVisitor;