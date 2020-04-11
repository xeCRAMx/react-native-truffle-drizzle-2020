import Web3 from 'web3';
import MyStringStore from './build_contracts/MyStringStore.json';

const options = {
  web3: {
    block: false,
    customProvider: new Web3('ws://localhost:9545'),
  },
  contracts: [MyStringStore],
};

export default options;
