import React, { Component } from 'react';
import { SingInForm } from '../../components/sing-in-form/sing-in-form'

export class SingIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SingInForm SetLoggedIn={this.props.SetLoggedIn} />
        )
    }
}