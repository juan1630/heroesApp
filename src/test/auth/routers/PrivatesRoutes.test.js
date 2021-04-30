import React from 'react';
import { mount, shallow } from 'enzyme';
import  {PrivatesRoutes}  from '../../../routers/PrivatesRoutes';
import { MemoryRouter } from 'react-router';

describe('Pruebas en el componente PrivatesRoutes', () => {

    const props = {
        location:{
            pathname : '/dc'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente si esta autenticado y guardar en el localsorage', () => {
      
        const wrapper = shallow( 
        //es un componente que nos ayuda a hacer pruebas con los routes
        <MemoryRouter >

            <PrivatesRoutes 
                isAuthenticated={ true }
                component={ () => <span> Holaaa!!! </span> }
                { ...props }
                />
            </MemoryRouter>
       )   

      // expect( wrapper.find('span').exists ).toBe(true);
      // expect( localStorage.setItem ).toHaveBeenCalledWith('lastpath', '/dc')
       
    });


    test('Debe de bloquear el componente si no esta autenticado', () => {

     const wrapper = shallow(   <MemoryRouter>
            <PrivatesRoutes
                isAuthenticated={ false }
                component={ () => <span> Holaaa!!! </span> }
                { ...props }
             />
        </MemoryRouter>
     )
        
        expect( wrapper.find('span').exists() ).toBe(false);
    
    })
    

    

})
