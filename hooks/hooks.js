const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(30000);

Before(async function () {
  console.log('Début du scénario');
});

After(async function () {
  console.log('Fin du scénario');
});