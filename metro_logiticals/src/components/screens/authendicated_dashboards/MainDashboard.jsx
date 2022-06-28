import React from "react";
import styled from "styled-components";
import ExpenceCards from "../../includes/dashboard/ExpenceCards";
import FilterCard from "../../includes/dashboard/FilterCard";

function MainDashboard() {
    const data = [
        { id: 1, color: "#61cf35", sales_data: [7, 5, 5, 3, 5, 2, 5, 4, 3, 5] },
        { id: 2, color: "#141c26", sales_data: [4, 5, 6, 5, 5, 4, 5, 6, 7, 5] },
        { id: 3, color: "#61cf35", sales_data: [2, 5, 6, 6, 7, 3, 5, 4, 3, 7] },
        { id: 4, color: "#ec3832", sales_data: [6, 7, 8, 5, 5, 4, 5, 3, 4, 2] },
    ];
    return (
        <Container>
            <TopSection>
                <ExpenseSection>
                    {data.map((data) => (
                        <ExpenceCardCover key={data.id}>
                            <ExpenceCards
                                color={data.color}
                                sales_data={data.sales_data}
                            />
                        </ExpenceCardCover>
                    ))}
                </ExpenseSection>
                <FilterSection>
                    <FilterCard />
                </FilterSection>
            </TopSection>
        </Container>
    );
}

export default MainDashboard;

const Container = styled.div`
    padding: 24px;
    background-color: #f9f9f9;
    min-height: calc(100vh - 70px);
`;
const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
    gap: 10px;
`;
const ExpenseSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const FilterSection = styled.div`
    min-width: 200px;
    max-width: 200px;
    /* padding: 20px;
    border: 1px solid #000; */
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
`;
const ExpenceCardCover = styled.div`
    width: 25%;
    min-width: 220px;
`;
