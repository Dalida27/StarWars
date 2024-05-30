import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import './Event.css';

function Event({ event }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='row pt-4 bs'>
            <div className='col-md-4'>
                <img src={event.imageurls[0]} className='smallimg' alt='main' />
            </div>
            <div className='col-md-7'>
                <p className='headings'>{event.name}</p>
                <p><b>{event.istring}</b></p>
                <p><b>Location:</b> {event.place}</p>
                <p><b>Measurement:</b> {event.inumbers}</p>
                <p><b>Information:</b> {event.istring}</p>

                <div style={{ float: 'right' }}>
                    <button className='btn btn-primary' onClick={handleShow}>Details</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{event.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {event.imageurls.map((url, index) => (
                            <Carousel.Item key={index}>
                                <img className='d-block w-100 bigimg' src={url} alt="carousel" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <p>{event.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Event;
