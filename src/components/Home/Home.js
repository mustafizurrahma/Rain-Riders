import React, { useEffect, useState } from 'react';
import Home_bg from '../../img/home_bg.jpg'
import './Home.css';
import Data from '../../Rides.json';
import { useHistory } from 'react-router';

const Home = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        setCars(Data);
    }, [])
    const history = useHistory();
    const carDetais = name => {
        const url = `/${name}`
        history.push(url)

    }
    // console.log(cars);
    // const { name, img } = cars
    return (
        <div className="main-page" style={{ backgroundImage: `url(${Home_bg})` }}>
            <div className="container">
                <div className="main-content-wrap">
                    <div className="container">
                        <div className="row">
                            {
                                cars.map((cars, i) => <div key={i} className="col-lg-3 col-md-6 col-12" cars={cars.id}>
                                    <div className="rides-item">
                                        <span><img src={cars.img} alt="" /></span>
                                        {/* <h1>{cars.name}</h1> */}
                                        <button className="btn btn-success mt-3 " onClick={() => carDetais(cars.name)}>
                                            Book Now:
                                            <span className="home-car">{cars.name}</span>
                                        </button>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                   
                </div>

            </div>

        </div>
    );
};

export default Home;