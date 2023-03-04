import React, { useState, useEffect } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";

const Campaings = () => {

  const query = new URLSearchParams(useLocation().search);
  var _id = query.get("id")
  var advertiser = query.get("advertiser");

  const [campaings, setCampaings] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/campaigns/advertiser/${_id}`);
        setCampaings(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [_id]);
  
  return (
    <div>
      <Card>
        <table>
          <td><h1>Empresa: {advertiser}</h1></td>
          <td>
            <Link to={`/create-campaing?id=${_id}&advertiser=${advertiser}`}>
              <button class="btn btn-primary">Criar Campanha</button>
            </Link>
          </td>
        </table>
      </Card>
      {campaings.map(campaing => (
        <div>
          <br></br>
          <div class="card">
            <div class="card.body">
              <h2>
                {campaing.name_campaign}
              </h2>
              <div class="card-footer">
                <Link to={`/alter-campaing?id=${campaing._id}&advertiser=${advertiser}`}>
                  <button class="btn btn-primary">Verificar campanhas</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Campaings;

