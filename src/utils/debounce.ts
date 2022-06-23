export function debounce(callee: ()=>void, timeoutMs: number) {
    let lastCall: number;
    let lastCallTimer:number;

    return function perform(...args) {
      let previousCall = lastCall;
  
      // ...а в переменной текущего вызова —
      // временную метку нынешнего момента.
      lastCall = Date.now();
  
      // Нам это будет нужно, чтобы потом сравнить,
      // когда была функция вызвана в этот раз и в предыдущий.
      // Если разница между вызовами меньше, чем указанный интервал,
      // то мы очищаем таймаут...
      if (previousCall && lastCall - previousCall <= timeoutMs) {
        clearTimeout(lastCallTimer);
      }
  
      // ...который отвечает за непосредственно вызов функции-аргумента.
      // Обратите внимание, что мы передаём все аргументы ...args,
      // который получаем в функции perform —
      // это тоже нужно, чтобы нам не приходилось менять другие части кода.
      lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  
      // Если таймаут был очищен, вызова не произойдёт;
      // если он очищен не был, то callee вызовется.
      // Таким образом мы как бы «отодвигаем» вызов callee
      // до тех пор, пока «снаружи всё не подуспокоится».
    };
  }