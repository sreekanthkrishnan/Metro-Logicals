import React, { useState } from "react";
import styled from "styled-components";

function FilterCard() {
    const [fromDate, setFromDate] = useState();
    return (
        <Container>
            <Title>Filter</Title>
            <Label for="from_input">From</Label>
            <FromInput id="from_input" type="date" placeholder="" />
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
`;
const FromInput = styled.input`
    display: block;
    border: 1px solid #000;
    width: 100%;
`;
