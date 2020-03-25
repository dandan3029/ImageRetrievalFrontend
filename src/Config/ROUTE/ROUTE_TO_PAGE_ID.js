import PAGE_ID_TO_ROUTE from './PAGE_ID_TO_ROUTE';

const ROUTE_TO_PAGE_ID = {};
Object.getOwnPropertySymbols(PAGE_ID_TO_ROUTE).forEach(PAGE_ID => 
    {
        ROUTE_TO_PAGE_ID[PAGE_ID_TO_ROUTE[PAGE_ID]] = PAGE_ID;
    });

export default ROUTE_TO_PAGE_ID;