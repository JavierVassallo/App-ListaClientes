import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import CustomersActions from './../components/CustomersActions';
import AppFrame from './../components/AppFrame';

class HomeContainer extends Component {
    handleOnClick = () =>{
        console.log("handleON Click")
        this.props.history.push('./customers')
    }
    render() {
        return (
            <div>
                <AppFrame 
                header='Inicio'
                body ={
                    <div>
                        <CustomersActions>
                            <button onClick={this.handleOnClick}>Listado de Clientes</button>
                        </CustomersActions>
                    </div>
                }
                ></AppFrame>

            </div>
        );
    }
}



export default withRouter(HomeContainer);