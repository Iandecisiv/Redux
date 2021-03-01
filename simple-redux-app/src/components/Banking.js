import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, Input } from 'reactstrap';



const Banking = () => {
    const [amount, setAmount] = useState("");
    const dispatch = useDispatch();
    const handleDeposit = () => {
        dispatch({ type: "DEPOSIT", amount: parseInt(amount) });
    };
    const handleWithdraw = () => {
        dispatch({ type: "WITHDRAW", amount: parseInt(amount) });
    };
    const handleCollectInterest = () => {
        dispatch({ type: "COLLECT_INTEREST", });
    };
    const handleDelete = () => {
        dispatch({ type: "DELETE_ACCOUNT", });
    };
    const handleAccountChange = () => {

    };

  return (
    <FormGroup>
      <Input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" classNmae="form-control"/>
      <Button onClick={handleDeposit} color="success">Deposit</Button>
      <Button onClick={handleWithdraw} color="primary">Withdraw</Button>
      <Button onClick={handleCollectInterest} color="warning">Collect Interest</Button>
      <Button onClick={handleDelete} color="danger">Delete Account</Button>
      <Button onClick={handleAccountChange} color="secondary">Change Account Type</Button>
      </FormGroup>
  )
}

const deposit = {
    type: "DEPOSIT",
    amount: 20
};

const withdraw = {
    type: "WITHDRAW",
    amount: 3
};

const collectInterest = {
    type: "COLLECT_INTEREST",
};

const deleteAccount = {
    type: "DELETE_ACCOUNT",
};





export default Banking;