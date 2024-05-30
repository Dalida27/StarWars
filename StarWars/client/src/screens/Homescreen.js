import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Event from '../components/Event';
import Loader from '../components/Loader';
import Error from '../components/Error';
import './Homescreen.css';
import Footer from '../components/Footer';

function Homescreen() {
    const [events, setEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchKey, setSearchKey] = useState('');
    const [type, setType] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/events/getallevents');
                setAllEvents(data);
                setEvents(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    function filterBySearch() {
        if (searchKey) {
            const tempEvents = allEvents.filter(event => 
                event.name.toLowerCase().includes(searchKey.toLowerCase()));
            setEvents(tempEvents);
        } else {
            setEvents(allEvents);
        }
    }

    function filterByType(e) {
        setType(e);
        if (e === 'all') {
            setEvents(allEvents);
        } else {
            const tempEvents = allEvents.filter(event => event.type.toLowerCase() === e.toLowerCase());
            setEvents(tempEvents);
        }
    }
    
    

    return (
      <div>
        <div className='hero'>
          <div className='container'>
              <div className='filter'>
                  <div className='search'>
                      <p><b>Searcher:</b></p>
                      <input type="text" className='form-control' placeholder='Search...'
                          value={searchKey} onChange={(e) => setSearchKey(e.target.value)} onKeyUp={filterBySearch} />
                  </div>
                  <div className='col-md-2 types'>
                      <p><b>Type:</b></p>
                      <select className='form-select' value={type} onChange={(e) => {filterByType(e.target.value)}}>
                          <option value="all">All</option>
                          <option value="character">Characters</option>
                          <option value="planet">Planets</option>
                          <option value="Spaceship">Spaceships</option>
                      </select>
                  </div>
              </div>

              <div className='row justify-content-center mt-5'>
                  {loading ? <Loader /> : error ? <Error /> : events.map(event => (
                      <div className='col-md-9 pb-3' key={event._id}>
                          <Event event={event} />
                      </div>
                  ))}
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Homescreen;
