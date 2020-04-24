import Store from '../../Store';
import {setLoggedOutAction} from './Actions/Actions';

export function setLoggedOut()
{
    Store.dispatch(setLoggedOutAction());
}