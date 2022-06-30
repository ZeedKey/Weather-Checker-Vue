export function debounce(callee: (event: Event)=>void, timeoutMs: number) {
    let lastCall: number;
    let lastCallTimer:number;

    return function perform(event: Event) {
      let previousCall = lastCall;
      lastCall = Date.now();
      if (previousCall && lastCall - previousCall <= timeoutMs) {
        clearTimeout(lastCallTimer);
      }
      lastCallTimer = setTimeout(() => callee(event), timeoutMs);
    };
  }