import axios from 'axios';

export const enviarRegistro = async (formData) => {
  try {
    const response = await axios.post('/api/registro', formData);
    return response.data;
  } catch (error) {
    throw new Error('Error al enviar los datos');
  }
};