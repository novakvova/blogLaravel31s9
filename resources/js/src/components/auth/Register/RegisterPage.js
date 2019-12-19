import React, { Component } from 'react'
import TextFieldGroup from '../../common/TextFieldGroup';

import CropperModal from "../../common/cropper/CropperModal";

export class RegisterPage extends Component {


    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        photo: '',
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

    getCroppedImage = img => {
        //console.log('----img-----', img);

        this.setState({photo: img});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('--register submit--');
        const { email } = this.state;
        let errors = {};

        if (email === "") errors.email = "Поле не може бути пустим!";

        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            console.log('Model is Valid')
            //ajax axios post
        }
        else {
            this.setState({ errors });
        }
    }


    render() {


        const { email, password,photo, errors } = this.state;

         let image =
             "https://topdogtours.com/wp-content/uploads/Top-Dog-Tours-Logo-no-Text-300x259.png";
         if (!!photo) {
             image = photo;
         }
        console.log('Regiter page state', this.state);
        return (
            <>
                <h1 className="d-flex justify-content-center">
                    Register page Hello {email}
                </h1>
                <form name="form" onSubmit={this.handleSubmit}>
                    <TextFieldGroup
                        field="email"
                        label="Електронна пошта"
                        value={email}
                        error={errors.email}
                        onChange={this.handleChange}
                    />

                    <img
                        src={image}
                        width="100"
                        className="rounded-circle"
                        alt="Foto user"
                    />

                    <CropperModal getCroppedImage={this.getCroppedImage} />

                    <TextFieldGroup
                        field="password"
                        label="Пароль"
                        value={password}
                        error={errors.password}
                        onChange={this.handleChange}
                        type="password"
                    />

                    <div className="form-group">
                        <button className="btn btn-primary">
                            Зареєструватися
                        </button>
                    </div>
                </form>
            </>
        );
    }
}

export default RegisterPage
