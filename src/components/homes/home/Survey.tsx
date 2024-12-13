"use client"

import banner from './Survey/img/banner.jpg'
// import leftPng from './Survey/img/left.png'
// import rightPng from './Survey/img/right.png'
import './Survey.scss';

const Survey = () => {


    // const handleClick = () => {
    //     alert('clicked')
    // }

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInUp">
                        <img src={banner} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Survey;