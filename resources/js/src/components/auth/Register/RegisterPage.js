import React, { Component } from 'react'

export class RegisterPage extends Component {


    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        errors: {
            //email: 'Invalid'
        }
    }

    setStateByErrors = (name, value) => {
        if (!!this.state.errors[name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[name];
            this.setState({
                [name]: value,
                errors
            });
        } else {
            this.setState({ [name]: value });
        }
    };

    handleChange = e => {
        this.setStateByErrors(e.target.name, e.target.value);
    };


    render() {
        const { email } = this.state;
        console.log('Regiter page state', this.state);
        return (
            <>
                <h1>Register page Hello {email}</h1>
                <form name="form" >
                    <div className="form-group">
                        <label htmlFor="email">Пошта</label>
                        <input type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Зареєструватися</button>

                    </div>
                </form>
            </>
        )
    }
}

export default RegisterPage
