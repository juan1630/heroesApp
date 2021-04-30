import React from 'react';
import { shallow } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { DashBoardRoutes } from '../../../routers/DashBoardRoutes';
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en el DashBoardRoutes', () => {


    test('Debe de mostrarse correctamente', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged : true,
                name: 'Juan'
            }
        }
    
        const wrapper = shallow(
            <AuthContext.Provider  value={ contextValue }>
                <MemoryRouter>
                    <DashBoardRoutes />

                </MemoryRouter>
            </AuthContext.Provider>
        )

        console.log( wrapper.html() )

        expect( wrapper ).toMatchSnapshot();
    })
    
})
