import Onboard from 'bnc-onboard'

const ACTIVE_NETWORK_ID = 1
const INFURA_KEY = "8ebf99c71be74a93bb0443730be97a7b"
const APP_URL = "https://www.flightclubmint.com"
const CONTACT_EMAIL = "nrwisch@gmail.com"
const RPC_URL = "https://mainnet.infura.io/v3/8ebf99c71be74a93bb0443730be97a7b"
const APP_NAME = "Prepare For Flight BAP"

const wallets = [
  { walletName: "metamask" },
  {
    walletName: "walletConnect",
    infuraKey: INFURA_KEY,
    bridge: "https://derelay.rabby.io/"
  },
  { walletName: "coinbase"}

]

export const onboard = Onboard({
  //... other options
  dappId: 'cfc3e1e8-75ab-498e-9869-c4a3a68917ef',
  networkId: ACTIVE_NETWORK_ID,
  walletSelect: {
    wallets: wallets,
  },
});

export function initOnboard(subscriptions) {
  return Onboard({
    dappId: 'cfc3e1e8-75ab-498e-9869-c4a3a68917ef',
    networkId: ACTIVE_NETWORK_ID,
    subscriptions,
    walletSelect: {
      wallets: wallets,
    },
    walletCheck: [
      {checkName: 'derivationPath'},
      {checkName: 'connect'},
      {checkName: 'accounts'},
      {checkName: 'network'},
    ],
  });
}