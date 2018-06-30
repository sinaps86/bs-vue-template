export function Timer(initial_time, tick = 1000, callBack, tickCallBack) {
  this.initial_time = initial_time;
  this.timer_id = "";
  this.tick = tick;
  this.residue_time = initial_time;
  this.callBack = callBack;
  this.tickCallBack = tickCallBack;
  this.loop = false;

  this.startTimer = function (loop = false) {
    this.loop = loop;
    this.timer_id = setInterval(this.timing, this.tick, this);
  };

  this.timing = function (context) {
    if (context.residue_time - 1 > 0) {
      context.residue_time -= 1;
      context.tickCallBack && context.tickCallBack();
    } else {
      context.residue_time = context.initial_time;
      context.callBack() && context.callBack();
      !context.loop && clearInterval(context.timer_id);
    }
  }
}
