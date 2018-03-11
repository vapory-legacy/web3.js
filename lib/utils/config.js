/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file config.js
 * @authors:
 *   Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

/**
 * Utils
 * 
 * @module utils
 */

/**
 * Utility functions
 * 
 * @class [utils] config
 * @constructor
 */


/// required to define VAP_BIGNUMBER_ROUNDING_MODE
var BigNumber = require('bignumber.js');

var VAP_UNITS = [
    'wei',
    'kwei',
    'Mwei',
    'Gwei',
    'szabo',
    'finney',
    'femtovapor',
    'picovapor',
    'nanovapor',
    'microvapor',
    'millivapor',
    'nano',
    'micro',
    'milli',
    'vapor',
    'grand',
    'Mvapor',
    'Gvapor',
    'Tvapor',
    'Pvapor',
    'Evapor',
    'Zvapor',
    'Yvapor',
    'Nvapor',
    'Dvapor',
    'Vvapor',
    'Uvapor'
];

module.exports = {
    VAP_PADDING: 32,
    VAP_SIGNATURE_LENGTH: 4,
    VAP_UNITS: VAP_UNITS,
    VAP_BIGNUMBER_ROUNDING_MODE: { ROUNDING_MODE: BigNumber.ROUND_DOWN },
    VAP_POLLING_TIMEOUT: 1000/2,
    defaultBlock: 'latest',
    defaultAccount: undefined
};

