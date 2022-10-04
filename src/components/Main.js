import React, { Component } from 'react'
import blck from '../ISO.png'
import MediaQuery from 'react-responsive'
import Web3 from 'web3'

class Main extends Component {

  constructor() {
    window.web3 = new Web3(window.ethereum)
    super();
    this.state = {
      text: ''
    }
  }
  render() {
    let name
    if (this.props.uAllow === '0'){
      name = 'Approve'
      console.log(this.props.uAllow)
    } else {
      name = 'Buy'
    }
    return (
      <div id="content" className="mt-auto">
        <MediaQuery minWidth={1224}>
        <div style={{display:"grid", gridTemplateColumns:"auto auto", columnGap: "20px"}}>
        <div id='btu' className="card mb-3" >

          <div className="card-body">

            <form className="mt-2" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.inputb.value.toString()
                amount = window.web3.utils.toWei(amount, 'ether')
                console.log(amount)
                console.log(this.props.price)
                console.log(amount*this.props.price/(10**18))
                this.props.sale(amount)
              }}>
              <div style={{padding: "20px"}}>
              <div style={{paddingBottom: "10px", fontWeight: "500", textAlign: "center"}}>AVAX to BPAY</div>
              <div style={{paddingBottom: "10px", fontWeight: "500"}}>Balance:</div>
              <div>
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.bTokenBalance, 'ether')).toFixed(2)} AVAX
                </span>
              </div>
              <div >
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.bbTokenBalance, 'ether')).toFixed(2)} BPAY
                </span>
              </div>
              </div>
              
              <div className="input-group mt-2">
                <input
                  type="text"
                  ref={(input) => { this.inputb = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required 
                  value={this.state.text}
                  onChange={(e) => {
                    this.setState({ text: e.target.value })}}
                  
                    />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={blck} height='30' alt=""/>
                  </div>
                  <button  style={{background: this.props.focused ? '#300ACC':'#740FFD',color: this.props.focused ? 'white':'white'}} type="submit" className="btn btn-primary btn-block btn-lg">Buy</button>
                </div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"auto auto", padding: "20px"}}>
              <div > Total {(this.state.text*this.props.price/(10**18)).toFixed(4)} AVAX </div>
              <div style={{textAlign: "right"}}> BPAY = {0.15} USD </div>
              <div style={{gridArea: "2/2/span 1/ span 1",textAlign: "right"}}> AVAX = {Number(window.web3.utils.fromWei(this.props.fprice, 'mwei')/100).toFixed(2)} USD </div>
              </div>
            </form>
          </div>
        </div>

        <div id='btu' className="card mb-3" >

          <div className="card-body">

            <form className="mt-2" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.inputb.value.toString()
                amount = window.web3.utils.toWei(amount, 'ether')
                console.log(amount)
                console.log(this.props.price)
                console.log(amount*this.props.price/(10**18))
                this.props.usdtobp(amount)
              }}>
              <div style={{padding: "20px"}}>
              <div style={{paddingBottom: "10px", fontWeight: "500", textAlign: "center"}}>USDT to BPAY</div>
              <div style={{paddingBottom: "10px", fontWeight: "500"}}>Balance:</div>
              <div>
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.uTokenBalance, 'mwei')).toFixed(2)} USDT
                </span>
              </div>
              <div >
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.bbTokenBalance, 'ether')).toFixed(2)} BPAY
                </span>
              </div>
              </div>
              
              <div className="input-group mt-2">
                <input
                  type="text"
                  ref={(input) => { this.inputb = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required 
                  value={this.state.text}
                  onChange={(e) => {
                    this.setState({ text: e.target.value })}}
                  
                    />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={blck} height='30' alt=""/>
                  </div>
                  <button  style={{background: this.props.focused ? '#300ACC':'#740FFD',color: this.props.focused ? 'white':'white'}} type="submit" className="btn btn-primary btn-block btn-lg">{name}</button>
                </div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"auto auto", padding: "20px"}}>
              <div > Total {(this.state.text*0.15).toFixed(4)} USDT </div>
              <div style={{textAlign: "right"}}> BPAY = {0.15} USD </div>
              </div>
            </form>
          </div>
        </div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"auto auto"}}>
        <div id='cub' className="mt-4" >
          <button
          id='ub'
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            this.props.addToken()
          }}> Add BPAY to wallet
          </button>
        </div>
        <div id='cub' className="mt-4" >
          <button
          id='ub'
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            this.props.switchNetwork()
          }}> Add C-Chain
          </button>
        </div>
        
</div>
</MediaQuery>
      <MediaQuery maxWidth={1224}>
      <div id='btu' className="card mb-3" >

          <div className="card-body">

            <form className="mt-2" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.inputb.value.toString()
                amount = window.web3.utils.toWei(amount, 'ether')
                this.props.sale(amount)
              }}>
              <div style={{padding: "20px"}}>
              <div style={{paddingBottom: "10px", fontWeight: "500", textAlign: "center"}}>AVAX to BPAY</div>
              <div style={{paddingBottom: "10px", fontWeight: "500"}}>Balance:</div>
              <div>
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.bTokenBalance, 'ether')).toFixed(2)} AVAX
                </span>
              </div>
              <div >
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.bbTokenBalance, 'ether')).toFixed(2)} BPAY
                </span>
              </div>
              </div>
              
              <div className="input-group mt-2">
                <input
                  type="text"
                  ref={(input) => { this.inputb = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required 
                  value={this.state.text}
                  onChange={(e) => {
                    this.setState({ text: e.target.value })}}
                  
                    />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={blck} height='30' alt=""/>
                  </div>
                  <button  style={{background: this.props.focused ? '#300ACC':'#740FFD',color: this.props.focused ? 'white':'white'}} type="submit" className="btn btn-primary btn-block btn-lg">Buy</button>
                </div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"auto auto", padding: "20px"}}>
              <div > Total {(this.state.text*this.props.price/(10**18)).toFixed(4)} AVAX </div>
              <div style={{textAlign: "right"}}> BPAY = {0.15} USD </div>
              <div style={{gridArea: "2/2/span 1/ span 1",textAlign: "right"}}> AVAX = {Number(window.web3.utils.fromWei(this.props.fprice, 'mwei')/100).toFixed(2)} USD </div>
              </div>
            </form>
          </div>
        </div>

        <div id='btu' className="card mb-0" >

          <div className="card-body">

            <form className="mt-2" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.inputb.value.toString()
                amount = window.web3.utils.toWei(amount, 'ether')
                console.log(amount)
                console.log(this.props.price)
                console.log(amount*this.props.price/(10**18))
                this.props.sale(amount)
              }}>
              <div style={{padding: "20px"}}>
              <div style={{paddingBottom: "10px", fontWeight: "500", textAlign: "center"}}>USDT to BPAY</div>
              <div style={{paddingBottom: "10px", fontWeight: "500"}}>Balance:</div>
              <div>
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.uTokenBalance, 'mwei')).toFixed(2)} USDT
                </span>
              </div>
              <div >
                {/*<img src={stripe} width="59%" alt="swap stripe"/>*/}
                <span  className="float">
                  {Number(window.web3.utils.fromWei(this.props.bbTokenBalance, 'ether')).toFixed(2)} BPAY
                </span>
              </div>
              </div>
              
              <div className="input-group mt-2">
                <input
                  type="text"
                  ref={(input) => { this.inputb = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required 
                  value={this.state.text}
                  onChange={(e) => {
                    this.setState({ text: e.target.value })}}
                  
                    />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={blck} height='30' alt=""/>
                  </div>
                  <button  style={{background: this.props.focused ? '#300ACC':'#740FFD',color: this.props.focused ? 'white':'white'}} type="submit" className="btn btn-primary btn-block btn-lg">{name}</button>
                </div>
              </div>
              <div style={{display:"grid", gridTemplateColumns:"auto auto", padding: "20px"}}>
              <div > Total {(this.state.text*0.15).toFixed(4)} AVAX </div>
              <div style={{textAlign: "right"}}> BPAY = {0.15} USD </div>
              </div>
            </form>
          </div>
        </div>

        
        <div id='cub' className="mt-4" >
          <button
          id='ub'
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            this.props.addToken()
          }}> Add BPAY to wallet
          </button>
        </div>
        <div id='cub' className="mt-4" >
          <button
          id='ub'
          type="submit"
          onClick={(event) => {
            event.preventDefault()
            this.props.switchNetwork()
          }}> Add C-Chain
          </button>
        </div>

      </MediaQuery>
      </div>
    );
  }
}

export default Main;
