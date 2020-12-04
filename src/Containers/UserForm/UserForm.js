import React from 'react';

import styles from './styles.scss'
import InputMask from "react-input-mask";
import { CSSTransition } from "react-transition-group";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const UserForm = ({
    joke, jokeStatus, userData, validateInput, validateSubmit, handleChange,changeSwitch
}) => {

    return (
        <div>
            <div className="Registration-Form">
                <label className="Registration-Form__Item">
                    Enter your name
                            <InputMask

                        type="text"
                        className="Registration-Form__Input"
                        value={userData.userName}
                        name="userName"
                        onChange={handleChange}
                        onBlur={validateInput} />
                </label>

                <label className="Registration-Form__Item">
                    Enter your gender

                        <FormControl className={'Select-form'}>
                        <Select
                            className={'Select-form__Select'}
                            onChange={handleChange}
                            onBlur={validateInput}
                            value={userData.userGender}
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
                        value={userData.userCreditCard}
                        name="userCreditCard"

                        onChange={handleChange}
                        onBlur={validateInput} />

                </label>
                <FormGroup className="Registration-Form__Item">
                    <FormControlLabel

                        label="Loyalty program"
                        control={<Switch
                            color="secondary"
                            labelplacement="start"
                            onChange={changeSwitch}
                            value={userData.userCoupon}
                        />}

                    />
                </FormGroup>

                <CSSTransition
                    in={userData.withLoyaltyProgram}
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
                            value={userData.userCoupon}
                            name="userCoupon"
                            onClick={() => {


                            }}
                            onChange={handleChange}
                        />
                    </label>

                </CSSTransition>

                <button className="Registration-Form__Button" onClick={validateSubmit}>submit </button>

            </div>


            {/* проверка на валидность цитати */}
            {jokeStatus ? <div className="Registration-Form Quote-container" display="none">
                <p>{joke}</p>
            </div> : null}


        </div>
    )
};