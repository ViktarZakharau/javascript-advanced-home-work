const urlPokeapiDitto = 'https://pokeapi.co/api/v2/pokemon/ditto'
fetch(urlPokeapiDitto)
  .then((response) => response.json())
  .then((json) => {
    const urlFirstAbility = json.abilities[0].ability.url;
    return fetch(urlFirstAbility);
  })
  .then((response2) => response2.json())
  .then((json2) => {
    const requiredEffect = json2.effect_entries.filter((element) => element.language.name === 'en');
    console.log(requiredEffect[0].effect);
  })
  .catch((error) => console.log(error.message));