/* global util */

/**
 * Helper functions for building and working with UI elements.
 */

// eslint-disable-next-line no-unused-vars
const ui = {
  /**
   * Clears (any) existing rows from the #table-rows table body element.
   */
  clearTable: function () {
    let row = document.querySelector('#table-rows');
    row.innerHTML = '';
  },

  /**
   * Decorates (i.e., adds) a `lang` attribute to the given HTML element using the
   * provided `language`.  For example, if a table data element was passed
   * to this function, and the language was "French", the element would
   * be updated to look like this in the DOM:
   *
   *   <td lang="fr">...</td>
   *
   * Your function should accept the following language names, and return the
   * associated 2-letter language code:
   *
   *  - English: "en"
   *  - Arabic: "ar"
   *  - Chinese: "zh"
   *  - French: "fr"
   *  - Hindi: "hi"
   *  - Korean: "ko"
   *  - Japanese: "ja"
   *  - Russian: "ru"
   *
   * If any other language name is given, return the "unknown" language code,
   * which is represented by the empty string "" (e.g., <p lang="">...</p>)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang
   *
   * Use util.langCodeForLanguage to get the 2-letter language code.
   *
   * @param {HTMLElement} element - the element to decorate with a lang attribute
   * @param {String} language - the language name to use
   */

  addLangToElement: function (element, language) {
    let row = document.createElement(element);

    let lang = util.langCodeForLanguage(language);

    if (lang === null) {
      row.setAttribute('lang', '');
    } else {
      row.setAttribute('lang', lang);
    }
    return row;
  },

  /**
   * Takes a `country.code` (e.g., "CA" for Canada) and returns a URL
   * to the image for this country's flag on the Country Flags web service:
   * https://www.countryflags.io/.  For example, given the country code String
   * "CA" and a size of 24, the function should return the following URL string:
   *
   * https://www.countryflags.io/CA/flat/24.png
   *
   * For sizes, you should support 16, 24, 32, 48, and 64, and throw an error
   * if a different size is given.
   *
   * @param {String} countryCode - the country code, for example "CA"
   * @param {Size} size - the size of the flag to use
   */

  countryCodeToFlagUrl: function (countryCode, size) {
    while (size === '64' || size === '48' || size === '32' || size === '24' || size === '16') {
      return 'https://www.countryflags.io/' + countryCode + '/flat/' + size + '.png';
    }
    if (size !== '64' || size !== '48' || size !== '32' || size !== '24' || size !== '16') {
      throw Error();
    }
  },

  /**
   * Takes a `country.code` (e.g., "CA" for Canada) and returns an <img> element,
   * using the ui.countryCodeToFlagUrl function to generate the img src attribute.
   *
   * @param {String} countryCode - the country code, for example "CA"
   */

  countryCodeToImg: function (countryCode) {
    let img = document.createElement('img');

    img.src = ui.countryCodeToFlagUrl(countryCode, '32');

    return img;
  },

  /**
   * Takes a single `country` object and converts it to a <tr> with <td>
   * child elements for every column in the row.  The row should match the
   * expected format of the table (i.e., flag, code, country, continent, etc).
   * Return the newly created  <tr>...</tr> row element.
   *
   * Use the DOM methods document.createElement(), element.appendChild(), etc
   * to create your <tr> row.
   *
   * Use `ui.countryCodeToImg` to generate the <img> element for the flag.
   *
   * Use `ui.addLangToElement` to decorate the country column in your row so that
   * its `lang` attribute is correct for the given language.
   *
   * @param {Object} country - the country object to format as a table row
   */
  countryToRow: function (country, language) {
    //create the table rows:
    let row = document.createElement('tr');

    let elemImg = document.createElement('td');
    let image = ui.countryCodeToImg(country.code);

    elemImg.appendChild(image);
    let elemCode = document.createElement('td');
    elemCode.innerText = country.code;

    let elemName = document.createElement('td');
    elemName.innerText = country.name[language] || country.name;

    let elemCont = document.createElement('td');
    elemCont.innerText = country.continent;

    let elemAreaInKm2 = document.createElement('td');
    elemAreaInKm2.innerText = country.areaInKm2;

    let elemPopulation = document.createElement('td');
    elemPopulation.innerText = country.population;

    let elemCap = document.createElement('td');
    elemCap.innerText = country.capital;

    //appendChild:

    row.appendChild(elemImg);

    row.appendChild(elemCode);
    row.appendChild(elemName);
    row.appendChild(elemCont);

    row.appendChild(elemAreaInKm2);
    row.appendChild(elemPopulation);

    row.appendChild(elemCap);

    //at the end return every row

    return row;
  },

  /**
   * Takes an array of `country` Objects named `countries`, and passes each
   * `country` in the array  to `ui.countryToRow`.  The resulting
   * rows are then appended to the #table-rows table body element.  Make sure
   * you use `ui.clearTable()` to remove any existing rows before you do this.
   *
   * Also make sure to pass the `language` value into `ui.countryToRow` so that
   * the country names in the table get the appropriate `lang` attribute set.
   *
   * @param {Array<Object>} countries - the country objects to be turned into rows in a table
   * @param {String} language - the language name being used for these countries
   */
  countriesToTable: function (countries, language) {
    let arr = [];
    let table = document.querySelector('#table-rows');
    let i;

    for (i = 0; i < countries.length; i++) {
      arr[i] = ui.countryToRow(countries[i], language);

      table.appendChild(arr[i]);
    }
  }
};
