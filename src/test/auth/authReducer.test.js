import  {authReducer} from "../../auth/authReducer";
import { types } from '../../types/tipos'

describe("Pruebas en el authReducer" , () => {
    
    test('Debe de retornar el estado por defecto', () => {


        const state = authReducer( {logged: false}, {});

        expect(state ).toEqual({ logged: false });
    });

    test('Debe de autenticar y colocar el name del usuario', () => {

        const action  = {
            type: types.login,
            payload: {
                name: "Juan"
            }
        };
          const state = authReducer( {logged: false}, action );

        expect(state ).toEqual(
                    { logged: true,
                        name: "Juan"
                    });
    });

    test('Debe de borrar el name del usuario y log out en false' , () => {

        const action  = {
            type: types.logout
        };
          const state = authReducer( {logged: true, name: "Carlos"}, action );

        expect(state ).toEqual({ logged: false});

    });
    
    
});