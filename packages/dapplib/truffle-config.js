require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name recipe rural evil include indoor forget genre'; 
let testAccounts = [
"0xa98f236a9507e3ae74a3b5069ac26ab17e458f67a8331359cd227f09e3b45bd1",
"0x75eb805b648fb355dd3e16176aee0909e30676e8fb0149b5cfa98008b1bcaf8f",
"0xfc8200b0cef51f4aa7afd80a9bf0398a2c163de02a6088e9408437e1d5a10794",
"0x13692fc38f644948d7c6743a7ea791496801bc779821d983690635918548c728",
"0x59499bb84ea8aed35cff01bfae30f97ad68985725600c34db093055c45a80515",
"0x65b753f6da3afc9366e4866d923c86f00275ae452151911c9b9d2e512c1d9580",
"0x19c5ac073852e2eeba74f084572d3911488219bf1082db85d6dffbee9584ad7a",
"0x97e100b529cd7dc777dda9095cf27f19861ecd958df1d3fd01a41834f93cfe47",
"0xb0da656643d728366385dfd17043dcb0ee7be16937f4093a8591c094d544f757",
"0x4dc8d56b6a1c0ad48a670318a51c1424cdb90a953db4abca99a1ef94cfb30143"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

