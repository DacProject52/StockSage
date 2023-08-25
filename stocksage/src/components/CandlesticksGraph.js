import { React, useRef, useEffect, useState } from "react";
import { ColorType, createChart } from "lightweight-charts";
// import { data } from "jquery";
function CandlestickGraph() {

    const chartContainerRef = useRef();

    useState(() => {

        let StockSymbol = "BHEL";
        const API_KEY = "NZN41D9WW5X46MPB";
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}.BSE&outputsize=full&apikey=${API_KEY}`;
        // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&apikey=${API_KEY}`;

        fetch(API_Call)
            .then(
                response => response.json()
            )
            .then((data) => {
                if (data["Time Series (Daily)"]) {
                    const timeSeries = data["Time Series (Daily)"];
                    const cdata = [];

                    for (const time in timeSeries) {
                        if (timeSeries.hasOwnProperty(time)) {
                            const openPrice = timeSeries[time]["1. open"];
                            const highPrice = timeSeries[time]["2. high"];
                            const lowPrice = timeSeries[time]["3. low"];
                            const closePrice = timeSeries[time]["4. close"];
                            if (openPrice && highPrice && lowPrice && closePrice) {
                                cdata.push({ open: parseFloat(openPrice), high: parseFloat(highPrice), low: parseFloat(lowPrice), close: parseFloat(closePrice), time: time });
                            }
                        }
                    }

                    cdata.sort((a, b) => a.time.localeCompare(b.time));

                    console.log(cdata);

                    const chart = createChart(chartContainerRef.current, {
                        layout: {
                            background: { type: ColorType.Solid, color: "white" }
                        },

                        width: chartContainerRef.current.clientWidth,
                        height: window.innerHeight * 0.7,
                    });

                    const newSeries = chart.addCandlestickSeries({
                        upColor: "#26a69a",
                        downColor: "#ef5350",
                        borderVisible: false,
                        wickUpColor: "#26a69a",
                        wickDownColor: "#ef5350"
                    });

                    newSeries.setData(cdata);

                    return () => {
                        chart.remove();
                    }

                }
                else {
                    console.error("Time series data not found in API response.");
                }
            })
            .catch(
                function (error) {
                    console.error(error);
                });
    }, []);


    return (
        <div ref={chartContainerRef}>
        </div>
    );
}

export default CandlestickGraph;