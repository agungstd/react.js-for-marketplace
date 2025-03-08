/**
 * Web Vitals reporting function
 * Reports Core Web Vitals metrics to the provided callback function
 * 
 * @param {Function} onPerfEntry - Callback function to handle performance metrics
 */
const reportWebVitals = async (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    try {
      // Use dynamic import with await for better error handling
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      
      // Report each metric
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      
      console.log('Web Vitals metrics reported successfully');
    } catch (error) {
      console.error('Failed to load web-vitals:', error);
    }
  }
};

export default reportWebVitals;