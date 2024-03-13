import React, { useEffect, useState } from 'react';
import './tshirts.css'
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../tshirts/tshirt/Tshirt'
import { toast } from 'react-toastify';


const Tshirts = () => {
    const tshirts = useLoaderData([])
    const [shirt, setShirt] = useState([])
    const [total, setTotal] = useState(0)
    const [vat, setVat] = useState(0)
    const [finalTotal, setFinalTotal] = useState(0)


    const handdleAddToCart = (tshirt) => {

        const selectUniqueShirt = shirt.find(ts => ts._id === tshirt._id)

        if (selectUniqueShirt) {
            notify()
            return
        }
        else {
            const newShirt = [...shirt, tshirt]
            setShirt(newShirt)

            let initial;
            for (let shirt of newShirt) {
                initial = total + shirt.price;
            }
            let tax = parseFloat(initial * 2 / 100)
            let finalResualt = initial + tax

            setTotal(initial)
            setVat(tax.toFixed(2))
            setFinalTotal(finalResualt.toFixed(2))

            success()
        }
    }

    //toast
    const success = () => toast.success("added successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notify = () => toast.warn('You allready added', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    return (
        <div className='tshirtsCollections'>
            <div className='tshirts'>
                <h1>Our Tshirts Collections</h1>
                <div className='tshirtsItems'>
                    {
                        tshirts.map(tshirt => <Tshirt
                            tshirt={tshirt}
                            key={tshirt._id}
                            handdleAddToCart={handdleAddToCart}
                        ></Tshirt>)
                    }
                </div>
            </div>
            <div className='card'>
                <h3>Tshirt Select : {shirt.length}</h3>
                <div className='cartCalculation'>
                    {
                        shirt.map((ts, idx) =>
                            <li key={idx}>
                                {`${ts.name} ${ts.price + ' '}tk`}
                            </li>
                        )
                    }
                    <h4 >Total : {total} Tk</h4>
                     <h4 >Vat : {vat} TK </h4>
                    <h4 >Final Total : {finalTotal } Tk</h4>
                </div>
            </div>
        </div>
    );
};

export default Tshirts;