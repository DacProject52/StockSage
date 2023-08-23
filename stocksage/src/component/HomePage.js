import React, { Component } from 'react'
import TradingViewWidget from './TraidingViewApi'


class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            pass: '',
            email: ''
        }
    }
    render() {
        return (
            <div>
                <React.StrictMode>
                    <TradingViewWidget />
                </React.StrictMode>
            </div>
        )
    }
}

export default HomePage