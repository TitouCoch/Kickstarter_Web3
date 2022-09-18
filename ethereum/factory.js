import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x08721E15D37433E314Af636D11ABf905Bb5eA9F8"
);

export default instance;
