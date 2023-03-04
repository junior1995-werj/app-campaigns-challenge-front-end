import api from "../services/api";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const CreateCampaings = () => {

  const query = new URLSearchParams(useLocation().search);
  var _id = query.get("id")
  var advertiser = query.get("advertiser");

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

    const id_advertiser = event.target.elements.id_advertiser.value;
    const conversion_type = conversionType;
    const name_campaign = event.target.elements.name_campaign.value;
    const briefing = event.target.elements.briefing.value;
    const country_target = countryTarget;
    const offer_price = event.target.elements.offer_price.value;
    
    alert(conversionType +' ' + countryTarget)
    const payload = {
      id_advertiser:id_advertiser,
      conversion_type: conversion_type,
      name_campaign: name_campaign,
      briefing: briefing,
      country_target: country_target,
      offer_price: offer_price
    }
    try {
      const res = await api.post(`/campaigns/`, payload)
      console.log(res.data)
      alert(res.data);
    } catch (e) {
      alert(e)
    }
  };

  return (
    <div>
      <h1>{advertiser}</h1>
      <form onSubmit={handleSubmit}>
        <div class="card">
          <div class="card.body">
            <h3>Id da empresa Anunciante</h3>
            <input type="text" id="id_advertiser" class="form-control" value={_id}/>
            <h3>Tipo de conversão</h3>
            <select class="form-control" id="conversion_type" onChange={handleChangeConversionType}>
              <option value=""></option>
              <option value="CPM">CPM</option>
              <option value="CPC">CPC</option>
              <option value="CPI">CPI</option>
            </select>
            <h3>nome da Campanha</h3>
            <input type="text" id="name_campaign" class="form-control" />
            <h3>Briefing</h3>
            <textarea  type="text" id="briefing" class="form-control"></textarea>
            <h3>Região da campanha</h3>
            <select class="form-control" id="conversion_type" onChange={handleChangeCountryTarget}>
              <option value=""></option>
              <option value="BR">BR</option>
              <option value="US">US</option>
            </select>
            <h3>Valor apostado na campanha</h3>
            <input type="text" id="offer_price" class="form-control"/>

            <div class="card-footer">
              <a href="/"><button class="btn btn-primary">Criar Campanha</button> </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaings;