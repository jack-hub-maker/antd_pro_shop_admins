import React, { useContext, useEffect } from 'react'
import { ColorContext } from '../high2'
import Child from './high2UtilsChild'


const Father = () => {
    return (
        <div>
            <Child />
        </div>

    )
}

export default Father

