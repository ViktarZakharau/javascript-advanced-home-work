const urlPokeapiDitto = 'https://pokeapi.co/api/v2/pokemon/ditto'
const request = new XMLHttpRequest();
request.open('GET', urlPokeapiDitto);
request.send();
request.addEventListener('load', function () {
  const { abilities } = JSON.parse(this.responseText);
  const urlFirstAbility = abilities[0].ability.url;

  const request2 = new XMLHttpRequest();
  request2.open('GET', urlFirstAbility);
  request2.send();
  request2.addEventListener('load', function () {
    const { effect_entries } = JSON.parse(this.responseText);
    const requiredEffect = effect_entries.filter((element) => element.language.name === 'en');
    console.log(requiredEffect[0].effect);
  });
});
