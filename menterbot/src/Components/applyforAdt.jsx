//applyforAdt.jsx

import React from 'react';
import { CgClose } from "react-icons/cg";
import '../css/applyforAdt.css'

const ApplyAdt = ({ onClose }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <div className='adtoverlay'>
            <div className='adtmodal'>
                <div className='adt-close-icon' onClick={onClose}>
                    <CgClose />
                </div>
                <section id='adt'>
                    <div className='adtcontainer'>
                        <div className='adt-box'>
                            <form className='adt-form' onSubmit={handleSubmit}>
                                <h1>✨Application for Application Development Trainer✨</h1>
                                <h2>Apply here for further contact</h2>
                                <div className='adt-group'>
                                    <h3>Name</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='name'
                                            placeholder='Name'
                                            name='name'
                                            className='adt-input-field' />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Email</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='email'
                                            placeholder='Ex: email@mail.com'
                                            name='email'
                                            className='adt-input-field' />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Phone</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='phone'
                                            placeholder='Ex: 9980317405'
                                            name='phone'
                                            className='adt-input-field' />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Preffered Contact Mode</h3>
                                    <div className='adt-input-wrapper'>
                                        <select name='contactMethod' className='adt-input-field'>
                                            <option value='phone'>Phone</option>
                                            <option value='email'>Email</option>
                                            <option value='in-person'>In Person</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Graduation</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='graduation'
                                            placeholder='Ex: B.E, B.Sc'
                                            name='graduation'
                                            className='adt-input-field' />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Experience</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='experience'
                                            placeholder='Ex: Teaching, Career Counseling'
                                            name='experience'
                                            className='adt-input-field' />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Resume / CV</h3>
                                    <div className='adt-input-wrapper'>
                                        <input
                                            type='file'
                                            name='resume'
                                            className='adt-input-field' />
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>About You</h3>
                                    <div className='adt-input-wrapper'>
                                        <textarea
                                            placeholder='write something about you'
                                            name='aboutYou'
                                            className='adt-input-field'
                                            rows='4' // You can adjust the number of rows as needed
                                        ></textarea>
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <div className='adt-date-time-group'>
                                        <div className='adt-date-wrapper'>
                                            <h3>Meet Date</h3>
                                            <div className='adt-input-wrapper'>
                                                <input
                                                    type='date'
                                                    name='meetDate'
                                                    className='adt-input-field'
                                                />
                                            </div>
                                        </div>
                                        <div className='adt-time-wrapper'>
                                            <h3>Meet Time(Select a time between 9 AM and 6 PM)</h3>
                                            <div className='adt-input-wrapper'>
                                                <input
                                                    type='time'
                                                    name='meetTime'
                                                    className='adt-input-field'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <h3>Full Address</h3>
                                    <div className='adt-input-wrapper'>
                                        <textarea
                                            placeholder='1st cross, bhopal, M.P'
                                            name='aboutYou'
                                            className='adt-input-field'
                                            rows='4' // You can adjust the number of rows as needed
                                        ></textarea>
                                    </div>
                                </div>
                                <div className='adt-group'>
                                    <button className='adt-submit-button'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ApplyAdt
