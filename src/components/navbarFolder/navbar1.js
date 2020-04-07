import React from "react"

import "./navbar.scss"
import ReactModalLogin from 'react-modal-login';

const facebook = {
    appId: 'YOUR FB APP ID GOES HERE',
    cookie: true,
    xfbml: true,
    version: 'v2.11',
    scope: 'email'
  };

  const google = {
    client_id: 'YOUR GOOGLE APP ID GOES HERE',
    scope: "https://www.googleapis.com/auth/plus.login"
  };



        class Navbar extends React.Component {
            constructor(){
                super()
                this.state={
                    showModal: false,
                    loading: false,
                    error: null
                }
                this.openModal=this.openModal.bind(this)
            }
            openModal() {
                this.setState({
                  showModal: true,
                });
              }

              closeModal() {
                this.setState({
                  showModal: false,
                  error: null
                });
              }
              
              onLoginSuccess(method, response) {
                console.log('logged successfully with ' + method);
              }
            
              onLoginFail(method, response) {
                console.log('logging failed with ' + method);
                this.setState({
                  error: response
                })
              }
            
              startLoading() {
                this.setState({
                  loading: true
                })
              }
            
              finishLoading() {
                this.setState({
                  loading: false
                })
              }
            
              onTabsChange() {
                this.setState({
                  error: null
                });
              }
            





            render() {
                return (

                    <div>
                    <div className="popup">
                    <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            onChange: this.onTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
          providers={{
            facebook: {
              config: facebook,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Facebook"
            },
            google: {
              config: google,
              onLoginSuccess: this.onLoginSuccess.bind(this),
              onLoginFail: this.onLoginFail.bind(this),
              label: "Continue with Google"
            }
          }}
        />
        </div>
                        <ul className="nav bg-light">
                            <li className="nav-item slam-left"><a href="#"><strong>HUMOURBABA</strong></a></li>
                            <li className="nav-item"><a href="#">Home</a></li>
                            <li className="nav-item"><a href="#">Men</a></li>
                            <li className="nav-item"><a className="contact" href="#">Women</a></li>
                            <li className="nav-item"><a href="#">Accessories</a></li>
                            <li className="nav-item"><a href="#" onClick={this.openModal}>Login / Signup</a></li>
                        </ul>
                    </div>
                    
                );
            }
        }
        


export default Navbar