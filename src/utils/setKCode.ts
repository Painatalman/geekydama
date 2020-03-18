type Milliseconds = number;

interface KCodeOptions {
  timer: Milliseconds;
  code: number[];
}

interface KCodeState {
  pressedKeys: number[];
  interval?: NodeJS.Timeout;
}

const defaultOptions: KCodeOptions = {
  timer: 2000,
  code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
};

/**
 * Sets a handler for a specific key input, which is the Konami code, by default.
 * (up, up, down, down, left, right, left, right, b, a)
 */
export default function setKCode(
  callback: Function,
  extraOptions: Object = {}
) {
  const options: KCodeOptions = {
    ...defaultOptions,
    ...extraOptions
  };
  const state: KCodeState = {
    pressedKeys: [],
    interval: undefined
  };

  function handleKeyPress(e: KeyboardEvent) {
    const { pressedKeys } = state;
    const { code, timer } = options;

    state.interval && clearTimeout(state.interval);

    const curPos = pressedKeys.length;
    const pressedKey = e.which;

    if (pressedKey !== code[curPos]) {
      pressedKeys.length = 0;

      return;
    }

    pressedKeys.push(pressedKey);
    const hasMatchedCode = curPos + 1 === code.length;

    if (hasMatchedCode) {
      pressedKeys.length = 0;
      callback();
    } else {
      state.interval = setTimeout(() => {
        pressedKeys.length = 0;
      }, timer);
    }
  }

  window.document.addEventListener("keyup", handleKeyPress, false);
}
