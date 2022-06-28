import React from "react";
import styled from "styled-components";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function ExpenceCards({ color, sales_data }) {
    const options = {
        maintainAspectRatio: false,
        responsive: true,

        plugins: {
            legend: {
                display: false,
            },
            drawBorder: false,
            label: {
                display: false,
            },
            title: {
                display: false,
                text: "",
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
            y: {
                stacked: true,
                ticks: {
                    display: false,
                },

                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
    };

    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const data = {
        labels,
        datasets: [
            {
                label: false,
                data: sales_data,
                // fill: true,
                backgroundColor: color,
                borderColor: color,
                backgroundColor: color,
                tension: 0.4,
                pointRadius: 1,
                borderRadius: 0,
                barThickness: 0.5,
            },
        ],
    };
    return (
        <Container>
            <Top>
                <Icon color={color}>
                    <span>
                        {" "}
                        <i className="fa-solid fa-dollar-sign"></i>
                    </span>
                </Icon>
                <Content>
                    <LabelTitle>Revenue</LabelTitle>
                    <LabelDescription>
                        <span>
                            <i className="fa-solid fa-arrow-up"></i> 15%
                        </span>{" "}
                        more than last week
                    </LabelDescription>
                </Content>
            </Top>
            <Grafh>
                <Line options={options} data={data} />
            </Grafh>
            <Amount></Amount>
        </Container>
    );
}

export default ExpenceCards;

const Container = styled.div`
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
`;
const Top = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const Grafh = styled.div`
    max-height: 60px;
    /* max-width: 200px; */
`;
const Amount = styled.p``;
const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    min-width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #b1b1b111;
    margin-right: 10px;
    span {
        height: 25px;
        width: 25px;
        min-width: 25px;
        display: flex;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.color};
    }
    i {
        font-size: 14px;
        color: #fff;
    }
`;
const Content = styled.div``;
const LabelTitle = styled.h4`
    margin-bottom: 6px;
`;
const LabelDescription = styled.p`
    font-size: 12px;
    color: #6b6e71;
    font-weight: 400;
    span {
        color: #60ce34;
        font-weight: 500;
        font-size: inherit;
    }
    i {
        font-size: 12px;
        color: #60ce34;
    }
`;
