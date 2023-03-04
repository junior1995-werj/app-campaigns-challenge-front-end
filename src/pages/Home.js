import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { Card } from 'react-bootstrap';

const Home = () => {
  const [avertisers, setAvertisers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get('/avertiser/');;
        setAvertisers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      
      <h1>Lista de empresas</h1>
      <div>
        <br></br>
      </div>
      {avertisers.map(avertiser => (
        <div>
          <br></br>

          <div class="card">

            <div class="card.body">
              <Card>
                <h2 class="">
                  {avertiser.company_name_advertiser}
                </h2>
                <div class="card-footer">
                  <Link to={`/campaign?id=${avertiser._id}&advertiser=${avertiser.company_name_advertiser}`}>
                    <button class="btn btn-primary">Alterar Campanha</button>
                  </Link>
                </div>
              </Card>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;