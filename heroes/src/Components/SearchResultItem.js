import React from 'react';

function SearchResultItem(props) {
  const {data} = props;

  console.log('data', data);
  return (
    <div>
    <div class="card" style={{display:'row', width:'350px'}} >
  <img style={{width:'350px'}} src={data.image.url} alt="Card image cap"/>
  <div class="card-body">
    <h4 class="card-title">{data.name}</h4>
    <span>Identity: {data.biography['full-name']}</span>
    <p class="card-text">
    <div>Strength: {data.powerstats.strength}</div>
    <div>Speed: {data.powerstats.speed}</div>
    <div>Power: {data.powerstats.power}</div>
    </p>
  </div>
</div>
</div>
  );
}

export default SearchResultItem;