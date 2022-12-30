import React from 'react'
import data from '../data'

const Articolo = () => {

    return (
        <>
            <div className="container text-center py-5">
                <button className='btn my-btn'>Cambia</button>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-5 mt-3">
                    { data.map( el => {
                        return (
                            <div className="col" key={el.id} >
                                <div className="card shadow" >
                                    <div className="card-body">
                                        <h5 className="card-title fs-3 mb-3 my-title">{ el.title }</h5>
                                        <p className="card-text px-2">{ el.body }</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } ) }
                </div>
            </div>
        </>
    )
}

export default Articolo