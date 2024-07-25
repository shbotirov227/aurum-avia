import React from 'react'
import { Route } from 'react-router-dom';
import Table2 from './containers/Table2/Table2';

const Routers = () => {
    return (
        <Routers>
            <Route path='/Table' element={<Table2 />} />
        </Routers>
    )
}

export default Routers;