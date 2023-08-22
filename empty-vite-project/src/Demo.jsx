import React, { useEffect, useRef } from 'react';
import './Demo.css'
let tvScriptLoadingPromise;

function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_98f64') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "in",
            enable_publishing: false,
            withdateranges: true,
            allow_symbol_change: true,
            studies: ["STD;SMA","STD;SMA"],
            container_id: "tradingview_98f64"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_98f64' />
      <div className="tradingview-widget-copyright">
        <span className="blue-text">Copyright Protected</span>
      </div>
    </div>
  );
}

export default TradingViewWidget;