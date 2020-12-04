import React, { Component } from 'react';

import InputMask from "react-input-mask";
import { CSSTransition } from "react-transition-group";

import { connect } from "react-redux";


import { UserForm } from "../../Containers/UserForm/UserForm";
import { addUser, loadJoke, handleFormChange } from '../../Action/action';




class Registration extends Component {



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
        console.log(this.props.userData);

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



        this.props.handleFormChange({ formToSend: false }) //переключаю стейт для анимации формы
        setTimeout(() => {
            this.props.handleFormChange({ formToSend: true })
        }, this.props.userData.timeToSend);



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
                in={this.props.userData.formToSend}
                timeout={this.props.userData.timeToSend}
                mountOnEnter={true}
                classNames='form'
                unmountOnExit={true}
            >

                <UserForm
                    joke={this.props.joke}
                    jokeStatus={this.props.jokeStatus}
                    userData={this.props.userData}
                    validateInput={this.validateInput}
                    validateSubmit={this.validateSubmit}
                    handleChange={this.handleChange}
                    changeSwitch = {this.changeSwitch}


                />

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