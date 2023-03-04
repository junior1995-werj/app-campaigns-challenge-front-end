import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useLocation } from "react-router-dom";

const Campaings = () => {

  const query = new URLSearchParams(useLocation().search);
  var _id = query.get("id")
  var advertiser = query.get("advertiser");

  const [campaings, setCampaings] = useState([]);
  const [conversionType, setConversionType] = useState();
  const [countryTarget, setCountryTarget] = useState();

  const handleChangeConversionType = (e) => {
    setConversionType(e.target.value);
  };

  const handleChangeCountryTarget = (e) => {
    setCountryTarget(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const conversion_type = conversionType;
    const name_campaign = event.target.elements.name_campaign.value;
    const briefing = event.target.elements.briefing.value;
    const country_target = countryTarget;
    const offer_price = event.target.elements.offer_price.value;


    const payload = {
      conversion_type: conversion_type,
      name_campaign: name_campaign,
      briefing: briefing,
      country_target: country_target,
      offer_price: offer_price
    }
    try {
      const res = await api.put(`/campaigns/${_id}`, payload)
      console.log(res.data)
      alert("Alterado com sucesso!");
    } catch (e) {
      alert(e)
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get(`/campaigns/${_id}`);
        setCampaings(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [_id]);

  return (
    <div>
      <h1>Empresa: {advertiser}</h1>
      <form onSubmit={handleSubmit}>
        <div class="card">
          <div class="card.body">
            <h4>Id da empresa anunciante</h4>
            <input type="text" id="id_advertiser" class="form-control" value={campaings.id_advertiser} readonly />
            <h4>Tipo de conversão</h4>
            <select class="form-control" id="conversion_type" defaultChecked={campaings.conversion_type} onChange={handleChangeConversionType}>
              <option value={campaings.conversion_type}>{campaings.conversion_type}</option>
              <option value="CPM">CPM</option>
              <option value="CPC">CPC</option>
              <option value="CPI">CPI</option>
            </select>
            <h4>Nome da campanha</h4>
            <input type="text" id="name_campaign" class="form-control" defaultValue={campaings.name_campaign} />
            <h4>Briefing</h4>
            <textarea type="text" id="briefing" class="form-control" defaultValue={campaings.briefing} ></textarea>
            <h4>Região da campanha</h4>
            <select class="form-control" id="conversion_type" onChange={handleChangeCountryTarget}>
              <option value={campaings.country_target}>{campaings.country_target}</option>
              <option value="BR">BR</option>
              <option value="US">US</option>
            </select>
            <h4>Valor apostado na campanha</h4>
            <input type="text" id="offer_price" class="form-control" defaultValue={campaings.offer_price} />

            <div class="card-footer">
              <button class="btn btn-primary">Alterar Campanha</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Campaings;


