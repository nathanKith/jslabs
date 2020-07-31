import React, { Component } from 'react';
import { SingUpForm } from '../../components/sing-up-form/sing-up-form'

export class SingUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SingUpForm SetLoggedIn={this.props.SetLoggedIn}/>
        )
    }
}