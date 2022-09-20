import React, { Component } from 'react'
import Web3 from 'web3'
import Main from './Main'
import './App.css'
import imago from '../logosbpay/Logotipo_blanco.png'


class App extends Component {

  async componentDidMount() {
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    window.ethereum.on('accountsChanged', function (accounts) {
      window.location.reload(false)
    })

    window.ethereum.on('networkChanged', function (networkId) {
      window.location.reload(false)
    })

    const networkId = await web3.eth.net.getId()
    
    if (networkId !== 43113 && networkId !== 43114){
        window.alert('Please conect to Avalanche network.')
        window.location.reload(false)
      }else{ this.setState({ opn: true }) }
 
    if (networkId === 43113){
      var badd = "0x5736d8B23E96C4E49542b660cfec0dE4b4562A2e"
      var cadd = '0x19E3A4515482f1cC4824536e767F8D35d20Cf269'
      var fadd = '0x5498BB86BC934c8D34FDA08E81D444153d0D06aD'
      this.setState({badd: badd})
    }

    if (networkId === 43114){
      badd = "0x8CcEE641C3D937dC89D1d94fe4D8051624042Fcf"
      cadd = '0x19E3A4515482f1cC4824536e767F8D35d20Cf269' 
      fadd = '0x0A77230d17318075983913bC2145DB16C7366156'
      this.setState({badd: badd})
    }

    const bToken = new web3.eth.Contract([{"inputs": [{"internalType": "string", "name": "name_", "type": "string"}, {"internalType": "string", "name": "symbol_", "type": "string"}, {"internalType": "uint256", "name": "totalU", "type": "uint256"}], "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "spender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Approval", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"}, {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}], "name": "allowance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "account", "type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "decimals", "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "subtractedValue", "type": "uint256"}], "name": "decreaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "addedValue", "type": "uint256"}], "name": "increaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transfer", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transferFrom", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}], badd)
    this.setState({ bToken })
    let bAllow = await bToken.methods.allowance(this.state.account,cadd).call()
    this.setState({ bAllow: bAllow.toString() })
    let bbTokenBalance = await bToken.methods.balanceOf(this.state.account).call()
    let bTokenBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ bTokenBalance: bTokenBalance.toString() })
    this.setState({ bbTokenBalance: bbTokenBalance.toString() })


    const cashier = new web3.eth.Contract([{"inputs": [{"internalType": "string", "name": "Name", "type": "string"}, {"internalType": "address", "name": "initialBP", "type": "address"}, {"internalType": "uint256", "name": "price_", "type": "uint256"}, {"internalType": "address", "name": "pricesc", "type": "address"}], "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "customer", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Sale", "type": "event"}, {"inputs": [], "name": "AVAXprice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Buy", "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}], "stateMutability": "payable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newBP", "type": "address"}], "name": "changeBP", "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newWallet", "type": "address"}], "name": "changeMainWallet", "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "bool", "name": "state", "type": "bool"}], "name": "changeOnlineState", "outputs": [{"internalType": "bool", "name": "success", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "newprice", "type": "uint256"}], "name": "changePrice", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "isOnline", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "sourceWallet", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "token", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address payable", "name": "_to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "withraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}], cadd)
    this.setState({ cashier })
    let price = await cashier.methods.AVAXprice().call()
    this.setState({ price: price})

    const feed = new web3.eth.Contract([{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"},{"internalType":"address","name":"_accessController","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"int256","name":"current","type":"int256"},{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"updatedAt","type":"uint256"}],"name":"AnswerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundId","type":"uint256"},{"indexed":true,"internalType":"address","name":"startedBy","type":"address"},{"indexed":false,"internalType":"uint256","name":"startedAt","type":"uint256"}],"name":"NewRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"accessController","outputs":[{"internalType":"contract AccessControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"confirmAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"description","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"getRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_roundId","type":"uint256"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"","type":"uint16"}],"name":"phaseAggregators","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phaseId","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_aggregator","type":"address"}],"name":"proposeAggregator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proposedAggregator","outputs":[{"internalType":"contract AggregatorV2V3Interface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint80","name":"_roundId","type":"uint80"}],"name":"proposedGetRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proposedLatestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_accessController","type":"address"}],"name":"setController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}], fadd)
    this.setState({ feed })
    let fprice = await feed.methods.latestAnswer().call()
    this.setState({ fprice: fprice})
    
    if (this.state.opn){
      this.setState({ loading: false })
    }
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async connectWallet() {
    await this.loadWeb3()
    await this.loadBlockchainData()
    setInterval(() => {
      this.loadBlockchainData()
      console.log('change')
    }, 60000)
  }

  sale = (amount) => {
    this.state.cashier.methods.Buy(amount).send({ from: this.state.account, value: window.web3.utils.toWei((window.web3.utils.fromWei(amount,'ether')*window.web3.utils.fromWei(this.state.price,'ether')+0.0001).toString(),'ether') }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    }).on('confirmation', (confirmationNumber) => {
      if (confirmationNumber < 2) { this.loadBlockchainData() } 
    })
  }

  

  async switchNetwork ()  {

    window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
    chainId: Web3.utils.toHex(43114),
    chainName: 'Avalanche Network',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io/']
    }]
    })
    .catch((error) => {
    console.log(error)
    })
  }

  async addToken(){
    const tokenAddress = '0x8CcEE641C3D937dC89D1d94fe4D8051624042Fcf';
    const tokenSymbol = 'BPAY';
    const tokenDecimals = 18;

    try {
      const isAdded = await window.web3.currentProvider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            // image: tokenImage, // if you have the image, it goes here
          },
        },
      });
    } catch (error) {
      // handle errors
    }
  }



  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      feed: '0x0',
      bToken: {},
      cashier: {},
      bAllow: '0',
      price: '0',
      fprice: '0',
      bTokenBalance: '0',
      bbTokenBalance: '0',
      loading: true,
      opn: false
    }
  }

  render() {
    let content
    let name
    if (this.state.account === '0x0'){
      name = 'Connect wallet'
    } else {
      name = this.state.account.substring(0,6)+'...'+this.state.account.substring(this.state.account.length-4, this.state.account.length)
    }
      content = <Main
        uTokenBalance={this.state.uTokenBalance}
        bTokenBalance={this.state.bTokenBalance}
        bbTokenBalance={this.state.bbTokenBalance}
        price={this.state.price}
        fprice={this.state.fprice}
        sale={this.sale}
        addToken={this.addToken}
        switchNetwork={this.switchNetwork}
      />

    
    return (
      <div>
        
        <nav className="navbar ">
        <a
          id='imagot'
          className="navbar-brand"
          href="https://www.blockpay.mx/"
          target="_self"
          rel="noopener noreferrer"
        >
          <img src={imago} height="40" className="d-inline-block align-top" alt="" />
        </a>
        <div id='cub1' className="navbar-nav" >
                  <button
                  id='ub1'
                  type="submit"
                  onClick={(event) => {

                    event.preventDefault()
                    this.connectWallet()
                  }}> {name}
                  </button>
                </div>  
        
      </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '531px' }}>
              <div className="content mr-auto ml-auto">

                {content}
               

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
