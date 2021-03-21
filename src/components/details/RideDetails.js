import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Data from '../../Rides.json'
import Gmap from '../Gmap/Gmap';
import { useForm } from "react-hook-form";
// import Map_img from './img/Map.png'
import './RideDetails.css'
const RideDetails = () => {

    const { name } = useParams();
    const [ride, setRide] = useState(false)
    const [searchFrom, setSearchFrom] = useState('')
    const [searchTo, setSearchTo] = useState('')
    const [searchDate, setSearchDate] = useState('')
    const [searchNumber, setSearchNumber] = useState('')
    const { register, handleSubmit } = useForm();
    const [cars, setCars] = useState([])
    useEffect(() => {
        setCars(Data);
    }, [])
    const rider = cars.find((rider) => rider.name === (name));
    // console.log(rider);
    const onSubmit = data => {
        setSearchFrom(data.picFrom)
        setSearchTo(data.picTo)
        setSearchDate(data.picDate)
        setSearchNumber(data.picNumber)
        setRide(true)
    }


    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="details-sidebar">
                        <div className="details-inside">
                            <h3>Details <span className="car-name">{name}</span></h3>
                            {
                                !ride && <form onSubmit={handleSubmit(onSubmit)} className="registetion-form">
                                    <div className="pick-from">
                                        <p>Pick From</p>
                                        <input name="picFrom" placeholder="Type from location" ref={register({ required: true })} />
                                    </div>
                                    <div className="pick-from">
                                        <p>Pick To</p>
                                        <input name="picTo" placeholder="Type to location" ref={register({ required: true })} />
                                    </div>
                                    <input name="picDate" type="date" ref={register({ required: true })} />
                                    <input name="picNumber" placeholder="Type number of persion" type="number" ref={register({ required: true })} />
                                    <input className="site-btn" type="submit" value="Search" />
                                </form>
                            }
                            {

                            }
                            {
                                ride && <>
                                    <ul className="pick-wrap">
                                        <li>{searchFrom} </li>
                                        <li>{searchTo} </li>
                                        <li>{searchDate} </li>
                                    </ul>
                                    <div className="price-item d-flex justify-content-between align-items-center text-center">
                                        <div style={{ width: '33%' }}>
                                            <img
                                                src={rider?.img}
                                                alt={rider?.name}
                                                style={{ width: '70px' }}
                                            />
                                        </div>
                                        <div style={{ width: '33%' }}>
                                            <span style={{ marginRight: '5px' }}>{rider?.name}</span>{' '}
                                            <span>$87</span>

                                        </div>
                                        <p style={{ width: '33%' }} className="m-0">{searchNumber}</p>
                                    </div>
                                </>
                            }
                        </div>

                    </div>
                </div>
                <div className="col-lg-8 col-md-7">
                        <div className="details-map">
                            <Gmap />
                            {/* <img src={Map_img} alt="" /> */}
                        </div>
                    </div>
                </div>


            </div>
    );
};

export default RideDetails;