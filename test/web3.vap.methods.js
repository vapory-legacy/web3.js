var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3.vap', function() {
    describe('methods', function() {
        u.methodExists(web3.vap, 'getBalance');
        u.methodExists(web3.vap, 'getStorageAt');
        u.methodExists(web3.vap, 'getTransactionCount');
        u.methodExists(web3.vap, 'getCode');
        u.methodExists(web3.vap, 'sendTransaction');
        u.methodExists(web3.vap, 'call');
        u.methodExists(web3.vap, 'getBlock');
        u.methodExists(web3.vap, 'getTransaction');
        u.methodExists(web3.vap, 'getUncle');
        u.methodExists(web3.vap, 'getCompilers');
        u.methodExists(web3.vap.compile, 'lll');
        u.methodExists(web3.vap.compile, 'solidity');
        u.methodExists(web3.vap.compile, 'serpent');
        u.methodExists(web3.vap, 'getBlockTransactionCount');
        u.methodExists(web3.vap, 'getBlockUncleCount');
        u.methodExists(web3.vap, 'filter');
        u.methodExists(web3.vap, 'contract');

        u.propertyExists(web3.vap, 'coinbase');
        u.propertyExists(web3.vap, 'mining');
        u.propertyExists(web3.vap, 'gasPrice');
        u.propertyExists(web3.vap, 'accounts');
        u.propertyExists(web3.vap, 'defaultBlock');
        u.propertyExists(web3.vap, 'blockNumber');
    });
});

