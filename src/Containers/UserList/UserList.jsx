import React from 'react';
import styles from './styles.scss';
import { connect } from 'react-redux'


const UserList = ({users}) => {
    console.log(users)
    return (
        <div className="User-list__Container">
            <h2 className="Title">User list</h2>
            <div className="User-list">
                {users.map((e, index) => {
                    return (
                        <div className="User-list__Item" key={index}>
                            <p className="User-list__Name"> <b>Name:</b> {e.userName}</p>
                            <p className="User-list__Gender"><b>Gener:</b>  {e.userGender}</p>
                            <p className="User-list__CreditCard"><b>Credit card: </b> {e.userCreditCard}</p>
                            {e.withLoyaltyProgram ? <p className="User-list__LoyaltyProgram"><b> Coupon:</b> {e.userCoupon}</p> :
                                <p className="User-list__LoyaltyProgram">{e.userCoupon} <b>Coupon:</b>  No coupon</p>}

                            <p className="User-list__Date"><b>Added on:</b>  {e.timeStamp.getDate().toString()}.{e.timeStamp.getMonth().toString()}.{e.timeStamp.getFullYear().toString()}</p>

                        </div>
                    )
                })}
            </div>

        </div>
    )

}

const mapStateToPtops = (state) => {

    return{
        users:state.usersReducer.users
    }
}

export default connect(mapStateToPtops)(UserList);