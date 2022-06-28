require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food plastic rescue remember coach inner drum front sense'; 
let testAccounts = [
"0xc9b05787951570f024ef659c1cd2065dc2b8d1f0b85271791690cce83a559a94",
"0x0c06db1aef3223bf876f218c8a6af11eb7e67555abcce2b55c3e70fc1828f412",
"0x7ad08e75205c716f483171bf10391ff501f5713d4a619dac088ee3167104e9c2",
"0xfa8ef086ac1fe511deb70989a1e5b698e38b372a304d4b261814eaad5e25726f",
"0x5efb8fc01e5b6969ba74c6da32f94132cdf6bbed72374362081e796b7bebb350",
"0x7d30c344bd52948b3cecce008b980b2a6737ba6c19f5bd73dca554b15b5fd7e0",
"0x78c3ec42facb31b4d0bcdbc83eb66d9e3e75c3bff2fa03fca402f57199510605",
"0x7972d6a7bef7fb44e8c06bf3f183134d9115cf5c7652372940fd8b6db6680fa3",
"0xde647941e1b00c7f93825721ff536e5b81de9755fcf219a23410b5d3666c5a3c",
"0x286e8432cd21ebfd2221b0b8ba8d7970ed4408f8c8e07965e6e9529899da6c0b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


