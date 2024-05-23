
export const getEPS = async () => {
    try {
      const response = await fetch('http://localhost:4080/api/v1/eps', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseEPS = await response.json(); 
      const arrayEps= responseEPS.eps.map(epsItem => ({
        value: epsItem._id,
        label: epsItem.name_eps
      }));
     return arrayEps    
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };

  
export const getCompanies = async () => {
    try {
      const response = await fetch('http://localhost:4080/api/v1/company', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseData = await response.json(); 
      const arrayEps= responseData.companies.map(option => ({
        value: option._id,
        label: option.name_company
      }));
     return arrayEps    
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };

  
export const getThing = async () => {
    try {
      const response = await fetch('http://localhost:4080/api/v1/thing', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseData = await response.json(); 
      const arrayEps= responseData.things.map(option => ({
        value: option._id,
        label: option.name_thing
      }));
     return arrayEps    
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };
  
  export const getPosition = async () => {
      try {
        const response = await fetch('http://localhost:4080/api/v1/position', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        const responseData = await response.json(); 
        const arrayEps= responseData.positions.map(option => ({
          value: option._id,
          label: option.name_position
        }));
       return arrayEps    
      } catch (error) {
        console.error('Error al registrar:', error.message);
      }
    };

    
  export const getVisitor = async () => {
    try {
      const response = await fetch('http://localhost:4080/api/v1/visitor', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseData = await response.json();
      return responseData.visitors 
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };
  
    
  export const getArl = async () => {
    try {
      const response = await fetch('http://localhost:4080/api/v1/arl', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseData = await response.json();
      const arrayArl= responseData.arl.map(option => ({
        value: option._id,
        label: option.name_arl
      }));
     return arrayArl  
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };

  
  export const getStatus = async () => {
    try {
      const response = await fetch('http://localhost:4080/api/v1/status', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responseData = await response.json();
      return responseData.status
    } catch (error) {
      console.error('Error al registrar:', error.message);
    }
  };
  
    