import React from "react";
import { MDBSpinner } from 'mdb-react-ui-kit';

const Preloader = () => {
    return (
        <>
            <MDBSpinner color='success'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
            <div>Оправка данных...</div>
        </>
    )
}

export default Preloader;