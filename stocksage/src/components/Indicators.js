import timeseries from 'timeseries-analysis';

const SimpleMovingAverage = (data,candle) => {
    const filteredArray = data.map((data)=>[data.time ,data.close]);

    var seriesArray = new timeseries.main(filteredArray);

    var processed = seriesArray.ma({period : candle}).output();

    processed = processed.map((data)=>data[1]);

    data = data.map((data, i)=>({...data,sma:processed[i]}));

    return data;
}

export default SimpleMovingAverage;