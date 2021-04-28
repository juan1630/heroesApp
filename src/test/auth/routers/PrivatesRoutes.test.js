import React from 'react';
import { mount } from 'enzyme';
import  {PrivatesRoutes}  from '../../../routers/PrivatesRoutes';
import { MemoryRouter } from 'react-router';

describe('Pruebas en el componente PrivatesRoutes', () => {

    const props = {
        location:{
            pathname : '/dc'
        }
    }

    test('Debe de mostrar el componente si esta autenticado y guardar en el localsorage', () => {
      
        const wrapper = mount( 
        //es un componente que nos ayuda a hacer pruebas con los routes
        <MemoryRouter >

            <PrivatesRoutes 
                isAuthenticated={ true }
                component={ () => <span> Holaaa!!! </span> }
                { ...props }
                />
            </MemoryRouter>
       )   

       expect( wrapper.find('span').exists ).toBe(true)
       
    })
    

})
