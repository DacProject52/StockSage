import timeseries from 'timeseries-analysis';

export function SimpleMovingAverage(data, candle) {
    const filteredArray = data.map((data) => [data.time, data.close]);

    var seriesArray = new timeseries.main(filteredArray);

    var processed = seriesArray.ma({ period: candle }).output();

    processed = processed.map((data) => data[1]);

    data = data.map((data, i) => ({ ...data, sma: processed[i] }));

    return data;
}

export function Markers(data) {

    data = data.map((cdata, i, arr) => {

        let long = false;
        let short = false;

        if (arr[i]?.smaSmall > arr[i]?.smaBig && arr[i - 1]?.smaSmall < arr[i - 1]?.smaBig) {
            long = true;
        } else {
            long = false;
        }

        if (arr[i]?.smaSmall < arr[i]?.smaBig && arr[i - 1]?.smaSmall > arr[i - 1]?.smaBig) {
            short = true;
        } else {
            short = false;
        }

        return { ...cdata, long, short };
    });

    return data;
}