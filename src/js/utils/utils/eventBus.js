const events = {};

let port;

const eventBus = {};

function on(eventName, cb) {
  if (!events[eventName]) {
    events[eventName] = [];
  }
  events[eventName].push(cb);

  return eventBus;
}

function notify(eventName, value) {
  _.each(events[eventName], cb => {
    console.log(`[eventBus][${eventName}]`, { value });
    cb(value);
  });
}

const fakePort = {
  postMessage: () => null,
};

function connectToPort() {
  if (!chrome || !chrome.extension) {
    return fakePort;
  }

  const portConn = chrome.extension.connect({
    name: "eventBus",
  });

  return portConn;
}

function trigger(eventName, value, _port) {

  if (_port) {
    port = _port;
  }

  if (!port) {
    port = connectToPort();
  }

  try {
    port.postMessage({
      type: 'eventBus',
      eventName,
      value,
    });
  } catch(e) {
    port = connectToPort();

    port.postMessage({
      type: 'eventBus',
      eventName,
      value,
    });
  }

  notify(eventName, value);

  return eventBus;
}

function off(eventName, fn) {
  _.each(events[eventName], (cb, i) => {
    if (cb === fn) {
      events[eventName].splice(i, 1);
    }
    if (_.isEmpty(events[eventName])) {
      delete events[eventName];
    }
  });

  return eventBus;
}

function setPort(p) {
  port = p;
}

eventBus.on = on;
eventBus.trigger = trigger;
eventBus.notify = notify;
eventBus.off = off;
eventBus.__events = events;
eventBus.setPort = setPort;

export default eventBus;
