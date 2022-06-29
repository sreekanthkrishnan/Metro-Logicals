import React, { useState } from "react";
import styled from "styled-components";

function FilterCard() {
    const [fromDate, setFromDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <Container>
            <Title>Filter</Title>
            <Label for="from_input">From</Label>
            <FromInput
                id="from_input"
                type="date"
                placeholder=""
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
            />
            <Label style={{ marginTop: "10px" }} for="end_input">
                To
            </Label>
            <FromInput
                id="end_input"
                type="date"
                placeholder=""
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </Container>
    );
}

export default FilterCard;
const Container = styled.div`
    background-color: #fff;
    padding: 15px;
`;
const Title = styled.div`
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 10px;
`;
const Label = styled.label`
    font-size: 10px;
    display: block;
    margin-bottom: 5px;
    color: #545454;
    font-weight: 500;
`;
const FromInput = styled.input`
    display: block;
    border: 1px solid #d6d9dd;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    color: #2e2e2f;
    font-weight: 500;
`;
