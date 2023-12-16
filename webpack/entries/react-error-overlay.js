/* eslint-disable */
import { reportBuildError, setEditorHandler, startReportingRuntimeErrors } from "react-error-overlay";
import launchEditorEndpoint from "react-dev-utils/launchEditorEndpoint";

setEditorHandler((errorLocation) => {
  fetch(
    `${launchEditorEndpoint}?fileName=${window.encodeURIComponent(
      errorLocation.fileName,
    )}&lineNumber=${window.encodeURIComponent(errorLocation.lineNumber || 1)}&colNumber=${window.encodeURIComponent(
      errorLocation.colNumber || 1,
    )}`,
  );
});

startReportingRuntimeErrors({
  onError() {
    if (module.hot) {
      module.hot.addStatusHandler((status) => {
        if (status === 'apply') {
          window.location.reload();
        }
      });
    }
  },
});

const ws = new WebSocket(`ws://${window.location.host}/ws`);

ws.onopen = () => {
  console.log('ws open');
};

ws.onmessage = (event) => {
  const { type = 'log', message } = JSON.parse(event.data);

  console[type](message);

  if (type === 'error') {
    reportBuildError(message);
  }
};
