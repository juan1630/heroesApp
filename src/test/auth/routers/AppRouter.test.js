import React from 'react';
import {shallow } from 'enzyme';
import { AppRouter } from '../../../routers/AppRouter'
import { AuthContext } from '../../../auth/AuthContext';

describe('Pruebas en el app router', () => {
    
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged : false
        }
    }

    
    test('Debe de mostrar el login sino estoy autenticado', () => {
        
        const wrapper = shallow(  
            <AuthContext.Provider  value={ contextValue }>


                <AppRouter />
            </AuthContext.Provider>
         )

            expect( wrapper ).toMatchSnapshot();

    })
    
    test('Debe de mostrar el componente de marvel si esta autenticado', () => {


        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged : true,
                name: 'Juan'
            }
        }
    
        
        const wrapper = shallow(  
            <AuthContext.Provider  value={ contextValue }>


                <AppRouter />
            </AuthContext.Provider>
         )

         console.log( wrapper.html() ) 

        // expect( wrapper.find('.navbar').exists() ).toBe(true);

    })
    
    
})
