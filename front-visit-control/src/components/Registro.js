import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getArl, getCompanies, getEPS, getPosition, getThing } from './utils';

const Registro = () => {
const router = useRouter()
  const [photo_visitor, setPhoto_visitor]= useState()
  const [companies, setCompanies]= useState()
  const [positions, setPositions]= useState()
  const [things, setThings]= useState()
  const [arl, setArl]= useState()
  const [epsData, setEpsData]= useState(null)

 
  useEffect (()=> {
    const fetchEPS = async () => {
      try {
        const eps = await getEPS();
        setEpsData(eps);
      } catch (error) {
        console.error('Error al obtener EPS:', error.message);
      }
    };

    fetchEPS();
  },[])
  useEffect (()=> {
    const fetchCompanies = async () => {
      try {
        const data = await getCompanies();
        setCompanies(data);
      } catch (error) {
        console.error('Error al obtener Compañias:', error.message);
      }
    };

    fetchCompanies();
  },[])

  useEffect (()=> {
    const fetchPosition = async () => {
      try {
        const position = await getPosition();
        setPositions(position);
      } catch (error) {
        console.error('Error al obtener Position:', error.message);
      }
    };

    fetchPosition();
  },[])
  
  useEffect (()=> {
    const fetchThings = async () => {
      try {
        const things = await getThing();
        setThings(things);
      } catch (error) {
        console.error('Error al obtener Position:', error.message);
      }
    };

    fetchThings();
  },[])
  useEffect (()=> {
    const fetchArl = async () => {
      try {
        const arl = await getArl();
        setArl(arl);
      } catch (error) {
        console.error('Error al obtener Position:', error.message);
      }
    };

    fetchArl();
  },[])

  return (
    <Formik 
    initialValues={{ 
      names_visitor:"",
      lastname_visitor:"",
      type_id_visitor:"",
      number_id_visitor:"",
      phone_visitor:"",
      email_visitor:"",
      company_where_visitor:"",
      eps:"",
      position:"",
      arl:"",
      photo_visitor:"",
      things:"",
    }}
    validationSchema={
      Yup.object({
        names_visitor: Yup.string().required('Campo requerido.'),
        lastname_visitor: Yup.string().required('Campo requerido.'),
        type_id_visitor: Yup.string().required('Campo requerido.'),
        number_id_visitor: Yup.number().required('Campo requerido.'),
        email_visitor: Yup.string().email('Correo invalido').required('Campo requerido.'),
        phone_visitor:Yup.string().matches(/^[0-9]{10,}$/, 'El número de teléfono debe tener al menos 10 dígitos').required('Campo requerido.'),
        company_where_visitor: Yup.string().required('Campo requerido.'),
        eps: Yup.string().required('Campo requerido.'),
        position: Yup.string().required('Campo requerido.'),
        arl: Yup.string().required('Campo requerido.'),
        photo_visitor: Yup.mixed().test('fileSize', 'El archivo es muy grande', (value) => {
          if (!value) return true;
          return value.size <= 1024 * 1024;
        }).test('fileType', 'Formato de archivo no válido', (value) => {
          if (!value) return true;
          return ['image/jpeg', 'image/png'].includes(value.type); 
        }),
        things: Yup.string().required('Campo requerido.'),
      })
    }
    onSubmit={async (values, { setSubmitting }) => {
    setSubmitting(true)
      console.log(values)
      try {
        const response = await fetch('http://localhost:4080/api/v1/visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...values, status: "664e39ecb8788921ef88b3fc"}),
        });
  
        if (!response.ok) {
          throw new Error('Error al registrar: ' + response.statusText);
        }
  
        console.log('Registro exitoso');
      } catch (error) {
        throw new Error('Error al registrar: ' + error.message);
      }finally{
        setSubmitting(false)
        router.push('/')
      
      }
       
    }}
    >
{ (props)=> (
  <Form>
    <Flex flexDirection={'column'} alignItems={'center'} gap={6} m={5} maxW={500}>
          <Field name='names_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.names_visitor && form.touched.names_visitor}>
                <FormLabel>Nombre </FormLabel>
                <Input
                type="text"
                {...field}
                placeholder='Nombre'
                autoComplete='off'
                onChange={(e)=> {
                  form.setFieldValue(field.name, e.target.value)
                }}
                />
                <FormErrorMessage>{form.errors.names_visitor}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='lastname_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.lastname_visitor && form.touched.lastname_visitor}>
                <FormLabel>Apellidos </FormLabel>
                <Input
                type="text"
                {...field}
                placeholder='Apellido'
                autoComplete='off'
                onChange={(e)=> {
                  form.setFieldValue(field.name, e.target.value)
                }}
                />
                  <FormErrorMessage>{form.errors.lastname_visitor}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='type_id_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.type_id_visitor && form.touched.type_id_visitor}>
                <FormLabel>Tipo de Documento </FormLabel>
                <Select 
                  placeholder="Selecciona Tipo de documento"
                  {...field}
                  onChange={e => {
                    form.setFieldValue(field.name, e.target.value);
                  }}>
                      <option value={"CC"}>
                      Cédula de ciudadanía
                      </option>
                      <option value={"CE"}>
                      Cédula de extranjería
                      </option>
                      <option value={"PA"}>
                        Pasaporte
                      </option>
                  </Select>
                  <FormErrorMessage>{form.errors.type_id_visitor}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='number_id_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.number_id_visitor && form.touched.number_id_visitor}>
                <FormLabel>Numero de documento </FormLabel>
                <Input
                type="text"
                {...field}
                placeholder='Numero de documento'
                autoComplete='off'
                onChange={(e)=> {
                  form.setFieldValue(field.name, e.target.value)
                }}
                />
                  <FormErrorMessage>{form.errors.number_id_visitor}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='email_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.email_visitor && form.touched.email_visitor}>
                <FormLabel>Correo </FormLabel>
                <Input
                type="text"
                {...field}
                placeholder='ejemplo@gmail.com'
                autoComplete='off'
                onChange={(e)=> {
                  form.setFieldValue(field.name, e.target.value)
                }}
                />
                  <FormErrorMessage>{form.errors.email_visitor}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='phone_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.phone_visitor && form.touched.phone_visitor}>
                <FormLabel>Celular </FormLabel>
                <Input
                type="text"
                {...field}
                placeholder='Celular'
                autoComplete='off'
                onChange={(e)=> {
                  form.setFieldValue(field.name, e.target.value)
                }}
                />
                  <FormErrorMessage>{form.errors.phone_visitor}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='company_where_visitor'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.company_where_visitor && form.touched.company_where_visitor}>
                <FormLabel>Empresa </FormLabel>
                <Select 
                  placeholder="Selecciona una Empresa"
                  {...field}
                  onChange={e => {
                    form.setFieldValue(field.name, e.target.value);
                  }}>
                    {Array.isArray(companies) &&  companies?.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{form.errors.company_where_visitor}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='eps'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.eps && form.touched.eps}>
                <FormLabel>EPS </FormLabel>
               
                  <Select 
                  placeholder="Selecciona una EPS"
                  {...field}
                  onChange={e => {
                    form.setFieldValue(field.name, e.target.value);
                  }}>
                    {Array.isArray(epsData) &&  epsData?.map(epsItem => (
                      <option key={epsItem.value} value={epsItem.value}>
                        {epsItem.label}
                      </option>
                    ))}
                  </Select>
       
              
                <FormErrorMessage>{form.errors.eps}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='position'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.position && form.touched.position}>
                <FormLabel>Cargo </FormLabel>
                <Select 
                  placeholder="Selecciona un cargo"
                  {...field}
                  onChange={e => {
                    form.setFieldValue(field.name, e.target.value);
                  }}>
                    {Array.isArray(positions) &&  positions?.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{form.errors.position}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='arl'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.arl && form.touched.arl}>
                <FormLabel>ARL </FormLabel>
                <Select 
                  placeholder="Selecciona un ARL"
                  {...field}
                  onChange={e => {
                    form.setFieldValue(field.name, e.target.value);
                  }}>
                    {Array.isArray(arl) &&  arl?.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{form.errors.arl}</FormErrorMessage>
             
              </FormControl>
            )}
          </Field>
          <Field name='photo_visitor'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.photo_visitor && form.touched.photo_visitor}>
                <FormLabel>Foto de perfil</FormLabel>
                <Input
                  type="file"
                  styles={{backgroundColor:'white', }}
                  isDisabled={true}
                  name="photo_visitor"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    form.setFieldValue(field.name, file); 
                   
                    }}
                />
                <FormErrorMessage>{form.errors.photo_visitor}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='things'>
            {({field, form} )=>(
              <FormControl isInvalid={form.errors.things && form.touched.things}>
                <FormLabel>Objeto </FormLabel>
               
                  <Select 
                  placeholder="Selecciona un objeto"
                  {...field}
                  onChange={e => {
                    form.setFieldValue(field.name, e.target.value);
                  }}>
                    {Array.isArray(things) &&  things?.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
       
              
                <FormErrorMessage>{form.errors.things}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        
            <Flex  w={{base:'full', md:500}} justifyContent={'center'}>
                <Button
                    variant={"brandPrimary"} 
                    isLoading={props.isSubmitting} 
                    type="submit"
                    >
                  Enviar
                </Button>
            </Flex>
          </Flex>
      </Form>
    )}
    </Formik>
  );
};

export default Registro;