import React from 'react'
import { RingLoader } from 'react-spinners';

export const loadings = (isLoading) => {
    return (
        <div className='ring-loader'>
            <RingLoader
                sizeUnit={"px"}
                size={150}
                color={'#123abc'}
                loading={isLoading}
            />
        </div>
    )
}