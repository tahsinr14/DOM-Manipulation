/* global countriesData, ui, util */

window.onload = function () {
  /**
   * Register click handlers for every menu item in the page.  Use the objects
   * and functions defined in the other JavaScript files to update/populate
   * the #table-rows table body with the appropriate set of countries, based on the
   * menu item clicked, specifically:
   *
   *  - countriesData array of country data Objects
   *  - util methods for working with the country data
   *  - ui methods for working with the DOM
   *
   * Make sure you also update the #subtitle heading to properly reflect what
   * is in the table after you populate it.
   *
   * For example: "List of Countries and Dependencies - Population between 1 and 2 million"
   * or "List of Countries and Dependencies - All countries in Asia" etc.
   */

  //to print the subtitles
  var subtitle = document.querySelector('#subtitle');

  let arb = document.querySelector('#menu_arabic');
  arb.onclick = function () {
    ui.countriesToTable(countriesData, 'Arabic');
  };
  let eng = document.querySelector('#menu_english');
  eng.onclick = function () {
    ui.countriesToTable(countriesData, 'English');
  };
  let frn = document.querySelector('#menu_french');
  frn.onclick = function () {
    ui.countriesToTable(countriesData, 'French');
  };

  let china = document.querySelector('#menu_chinese');
  china.onclick = function () {
    ui.countriesToTable(countriesData, 'Chinese');
  };

  let ind = document.querySelector('#menu_hindi');
  ind.onclick = function () {
    ui.countriesToTable(countriesData, 'Hindi');
  };
  let russ = document.querySelector('#menu_russian');
  russ.onclick = function () {
    ui.countriesToTable(countriesData, 'Russian');
  };
  let korea = document.querySelector('#menu_korean');
  korea.onclick = function () {
    ui.countriesToTable(countriesData, 'Korean');
  };
  let jap = document.querySelector('#menu_japanese');
  jap.onclick = function () {
    ui.countriesToTable(countriesData, 'Japanese');
  };

  let pop_menu = document.querySelector('#menu_population_1m_2m');
  pop_menu.onclick = function () {
    subtitle.innerHTML =
      '<h4>List of Countries and Dependencies - Population between 1 and 2 million</h4>';
    ui.countriesToTable(util.countriesByPopulation(1000000, 2000000), 'English');
  };

  let population_menu = document.querySelector('#menu_population_100_000_000m');
  population_menu.onclick = function () {
    subtitle.innerHTML =
      '<h4>List of Countries and Dependencies - Population Greater than 100 Million</h4>';
    ui.countriesToTable(util.countriesByPopulation(100000000), 'Hindi');
  };

  let asia_menu = document.querySelector('#menu_asia_all');
  asia_menu.onclick = function () {
    subtitle.innerHTML = '<h4>List of Countries and Dependencies - All countries in Asia</h4>';
    ui.countriesToTable(util.countriesByAreaAndContinent('Asia', 0), 'English');
  };

  let amc_menu = document.querySelector('#menu_americas_1mkm');
  amc_menu.onclick = function () {
    subtitle.innerHTML =
      '<h4>List of Countries and Dependencies - Area greater than 1 million Km2, Americas</h4>';
    ui.countriesToTable(util.countriesByAreaAndContinent('Americas', 1000000), 'English');
  };
};
