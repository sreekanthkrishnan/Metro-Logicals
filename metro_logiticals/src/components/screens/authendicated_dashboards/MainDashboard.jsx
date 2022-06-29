import React from "react";
import styled from "styled-components";
import ExpenceCards from "../../includes/dashboard/ExpenceCards";
import FilterCard from "../../includes/dashboard/FilterCard";

function MainDashboard() {
    const data = [
        {
            id: 1,
            color: "#61cf35",
            gradient: "#d4d4d4",
            name: "Revenue",
            sales_numbers: "$23,737,7",
            sales_data: [
                { name: "Page A", uv: 0, pv: 0, amt: 2400 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
                { name: "Page A", uv: 100, pv: 500, amt: 800 },
                { name: "Page A", uv: 200, pv: 500, amt: 400 },
                { name: "Page A", uv: 100, pv: 500, amt: 800 },
                { name: "Page A", uv: 300, pv: 400, amt: 800 },
                { name: "Page A", uv: 200, pv: 500, amt: 1800 },
                { name: "Page A", uv: 100, pv: 100, amt: 2400 },
                { name: "Page A", uv: 500, pv: 500, amt: 800 },
            ],
        },
        {
            id: 2,
            color: "#141c26",
            gradient: "#d3d5d7",
            name: "Load amount",
            sales_numbers: "355 loads",
            sales_data: [
                { name: "Page A", uv: 100, pv: 100, amt: 2400 },
                { name: "Page A", uv: 300, pv: 300, amt: 400 },
                { name: "Page A", uv: 100, pv: 500, amt: 800 },
                { name: "Page A", uv: 500, pv: 500, amt: 800 },
                { name: "Page A", uv: 300, pv: 300, amt: 1800 },
                { name: "Page A", uv: 500, pv: 500, amt: 800 },
                { name: "Page A", uv: 200, pv: 200, amt: 800 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
            ],
        },
        {
            id: 3,
            color: "#61cf35",
            gradient: "#b6efb5",
            name: "Expenses",
            sales_numbers: "$37,377",
            sales_data: [
                { name: "Page A", uv: 300, pv: 300, amt: 2400 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
                { name: "Page A", uv: 200, pv: 200, amt: 400 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
                { name: "Page A", uv: 300, pv: 300, amt: 1800 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
                { name: "Page A", uv: 300, pv: 500, amt: 800 },
                { name: "Page A", uv: 500, pv: 500, amt: 800 },
            ],
        },
        {
            id: 4,
            color: "#ec3832",
            gradient: "#f8cccc",
            name: "Driver expenses",
            sales_numbers: "$75,837,7",
            sales_data: [
                { name: "Page A", uv: 300, pv: 300, amt: 2400 },
                { name: "Page A", uv: 200, pv: 200, amt: 400 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
                { name: "Page A", uv: 100, pv: 500, amt: 800 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },
                { name: "Page A", uv: 300, pv: 300, amt: 1800 },
                { name: "Page A", uv: 400, pv: 400, amt: 800 },

                { name: "Page A", uv: 800, pv: 500, amt: 800 },
            ],
        },
    ];
    return (
        <Container>
            <TopSection>
                <ExpenseSection>
                    {data.map((item) => (
                        <ExpenceCardCover key={item.id}>
                            <ExpenceCards data={item} />
                        </ExpenceCardCover>
                    ))}
                </ExpenseSection>
                <FilterSection>
                    <FilterCard />
                </FilterSection>
            </TopSection>
            <MiddleSection>
                <RevenueSection></RevenueSection>
                <FuelSection></FuelSection>
            </MiddleSection>
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
    height: 100%;
`;
const MiddleSection = styled.div``;
const RevenueSection = styled.div``;
const FuelSection = styled.div``;
