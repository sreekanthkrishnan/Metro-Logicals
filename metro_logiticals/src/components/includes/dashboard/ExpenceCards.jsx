import React from "react";
import styled from "styled-components";
import { LineChart, Line, Tooltip, Area, AreaChart } from "recharts";

function ExpenceCards({ data }) {
    return (
        <Container>
            <Top>
                <Icon color={data.color}>
                    <span>
                        {" "}
                        <i className="fa-solid fa-dollar-sign"></i>
                    </span>
                </Icon>
                <Content>
                    <LabelTitle>{data.name}</LabelTitle>
                    <LabelDescription>
                        <span>
                            <i className="fa-solid fa-arrow-up"></i> 15%
                        </span>{" "}
                        more than last week
                    </LabelDescription>
                </Content>
            </Top>
            <Grafh>
                {
                    <AreaChart width={200} height={60} data={data.sales_data}>
                        <defs>
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor={data.gradient}
                                    stopOpacity={0.2}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={data.gradient}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor={data.gradient}
                                    stopOpacity={0.5}
                                />
                                <stop
                                    offset="95%"
                                    stopColor={data.gradient}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke={data.color}
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />

                        {/* <Tooltip /> */}
                    </AreaChart>
                }
            </Grafh>
            <Amount>{data.sales_numbers.toLocaleString()}</Amount>
        </Container>
    );
}

export default ExpenceCards;

const Container = styled.div`
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    height: 100%;
`;
const Top = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const Grafh = styled.div`
    max-height: 60px;
    /* max-width: 200px; */
`;
const Amount = styled.p`
    font-size: 18px;
    font-weight: 700;
`;
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
    font-size: 16px;
    font-weight: 600;
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
