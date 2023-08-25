import { React, useRef, useEffect } from "react";
import { ColorType, createChart } from "lightweight-charts";
// import { data } from "jquery";
function LineGraph() {

    const chartContainerRef = useRef();

    useEffect(() => {

        let StockSymbol = "SBIN";
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
                            const closePrice = timeSeries[time]["4. close"];
                            if (closePrice) {
                                cdata.push({ time: time, value: parseFloat(closePrice) });
                            }
                        }
                    }

                    console.log(cdata);

                    const chart = createChart(chartContainerRef.current, {
                        layout: {
                            background: { type: ColorType.Solid, color: "white" }
                        },

                        width: chartContainerRef.current.clientWidth,
                        height: window.innerHeight * 0.7,
                    });

                    const newSeries = chart.addAreaSeries({
                        lineColor: "#2962FF",
                        topColor: "#2962FF",
                        bottomColor: "rgba(41, 98, 255, 0.28)"
                    });

                    cdata.sort((a, b) => a.time.localeCompare(b.time));

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

export default LineGraph;