import React, { Component } from 'react';
import styles from './styles.scss';
import InputMask from "react-input-mask";
import { CSSTransition } from "react-transition-group";

import { connect } from "react-redux";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


import { addUser, loadJoke, handleFormChange } from '../../Action/action';


const UserState = {
    key: 0,
    userName: "",
    userGender: "",
    userCreditCard: "",
    withLoyaltyProgram: false,
    userCoupon: "",
    timeStamp: new Date(),

    formToSend: true,
    timeToSend: 300,
}


class Registration extends Component {

    state = { ...UserState };

    componentDidMount() {
        this.props.loadJoke();
        console.log(this.props);
    }

    handleChange = (e) => {

        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.props.handleFormChange({
            [name]: value,
        });
        console.log(this.state);

    };
    handleSubmit = () => {

        this.props.addUser(this.props.userData) //сетим в ридакс


        this.props.handleFormChange({ // скидываем значения
            key: 0,
            userName: "",
            userGender: "",
            userCreditCard: "",
            withLoyaltyProgram: false,
            userCoupon: "",
            timeStamp: new Date(),

            formToSend: true,
            timeToSend: 300,
        })



        this.setState({ formToSend: false }) //переключаю стейт для анимации формы
        setTimeout(() => {
            this.setState({ formToSend: true })
        }, this.state.timeToSend);



    };
    changeSwitch = () => {
        if (this.props.userData.withLoyaltyProgram) this.props.handleFormChange({ withLoyaltyProgram: false })
        else this.props.handleFormChange({ withLoyaltyProgram: true })
    }
    validateSubmit = () => {

        if (this.props.userData.userName.length === 0) {
            alert('UserName should be written')
            return
        }
        if (this.props.userData.userGender === "") {
            alert('Putting down a gender is necessarily')
            return
        }
        if ([...this.props.userData.userCreditCard].filter(el => el !== " " && el !== "_" ? true : false).length < 16) {
            alert('Error, put down a user card is necessarily')
            return
        }
        this.handleSubmit()
    }
    validateInput = (e) => {


        let target = e.target
        let value = target.value
        let name = target.name
        const nameRegExp = /^[a-zA-Z\-]+$/;


        console.log(name);

        if (name === 'userName') {
            let valid = value.match(nameRegExp)
            console.log(valid)
            if (valid === null) {
                alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
                return
            }
        }
        else if (name === 'userGender') {
            console.log(value)
            if (value == 0) {
                alert('Putting down a gender is necessarily')
                return
            }
        }
        else if (name === 'userCreditCard') {

            if ([...value].filter(el => el !== " " && el !== "_" ? true : false).length < 16) {
                alert('Invalid user credit card')
                return
            }
        }


    }


    render() {

        return (
            <CSSTransition
                in={this.state.formToSend}
                timeout={this.state.timeToSend}
                mountOnEnter={true}
                classNames='form'
                unmountOnExit={true}
            >


                <div>
                    <div className="Registration-Form">
                        <label className="Registration-Form__Item">
                            Enter your name
                            <InputMask

                                type="text"
                                className="Registration-Form__Input"
                                value={this.props.userData.userName}
                                name="userName"
                                onChange={this.handleChange}
                                onBlur={this.validateInput} />
                        </label>

                        <label className="Registration-Form__Item">
                            Enter your gender

                        <FormControl className={'Select-form'}>
                                <Select
                                    className={'Select-form__Select'}
                                    onChange={this.handleChange}
                                    onBlur={this.validateInput}
                                    value={this.props.userData.userGender}
                                    name="userGender">
                                    <MenuItem value="0">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>

                                </Select>
                            </FormControl>
                        </label>

                        <label className="Registration-Form__Item">
                            Enter your credit card
                            <InputMask
                                mask="9999 9999 9999 9999"
                                className="Registration-Form__Input"
                                type="text"
                                value={this.props.userData.userCreditCard}
                                name="userCreditCard"

                                onChange={this.handleChange}
                                onBlur={this.validateInput} />

                        </label>
                        <FormGroup className="Registration-Form__Item">
                            <FormControlLabel

                                label="Loyalty program"
                                control={<Switch
                                    color="secondary"
                                    labelplacement="start"
                                    onChange={this.changeSwitch}
                                    value={this.props.userData.userCoupon}
                                />}

                            />
                        </FormGroup>

                        <CSSTransition
                            in={this.props.userData.withLoyaltyProgram}
                            timeout={300}
                            mountOnEnter={true}
                            classNames='coupon'
                            unmountOnExit={true}
                        >
                            <label className="Registration-Form__Item">
                                Coupon
                                <input
                                    className="Registration-Form__Input"
                                    type="text"
                                    value={this.props.userData.userCoupon}
                                    name="userCoupon"
                                    onClick={() => {


                                    }}
                                    onChange={this.handleChange}
                                />
                            </label>

                        </CSSTransition>

                        <button className="Registration-Form__Button" onClick={this.validateSubmit}>submit </button>

                    </div>


                    {/* проверка на валидность цитати */}
                    {this.props.jokeStatus ? <div className="Registration-Form Quote-container" display="none">
                        <p>{this.props.joke}</p>
                    </div> : null}


                </div>
            </CSSTransition>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        joke: state.jokeReducer.value,
        jokeStatus: state.jokeReducer.status,
        userData: state.addUserReducer
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        loadJoke: () => dispatch(loadJoke()),
        addUser: (userState) => dispatch(addUser(userState)),
        handleFormChange: (formData) => dispatch(handleFormChange(formData)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration);