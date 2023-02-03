import { Component, useState } from "react"
import './WithLoading.scss';

const WithLoading = WrappedComponent => {

    class LoadingComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isLoading: false
            }
        }

        handleShowLoading = (isLoading) => {
            this.setState({
                isLoading: isLoading
            })
        }
        /**
         * 
         * @ Cursor this {*} using sefl vairable 
         */
        componentDidUpdate(preState) {
            if (this.state.isLoading === true) {
                let self = this;
                setTimeout(function(){
                    self.setState({
                        isLoading: false
                    })
                }, 3000)
            }
        }
        /**
         * 
         * @ Cursor this {*} using arrow function
         */
        // componentDidUpdate(preState) {
        //     if (this.state.isLoading === true) {
        //         setTimeout(() =>{
        //             this.setState({
        //                 isLoading: false
        //             })
        //         }, 3000)
        //     }
        // }

        render () {
            return(
                <div className={this.state.isLoading ? 'loading-container showing': 'loading-container'}>
                    {this.state.isLoading &&
                        <div className='loading-content'>
                            <div className="loading-main">
                                <img src='../../../images/loading3.gif' alt=""/>
                                <h4>Loading...</h4>
                            </div>
                        </div>
                    }
                    <WrappedComponent  showLoading={this.handleShowLoading} {...this.props}/>
                </div>
            )
        }

    }

    return LoadingComponent;

}

export default WithLoading;