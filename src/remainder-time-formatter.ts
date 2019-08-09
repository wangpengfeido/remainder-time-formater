/**
 * the configuration fragment item.
 */
interface ConfigItem {
  timeStart?: number;
  timeEnd?: number;
  template?: string;
  render?: Function;
}

export class RemainderTimeFormatter {
  public date: Date;
  public relativeDate: Date;
  public config: ConfigItem[];
  public timeInterval: number;

  /**
   * @param {Date} date the date to calculate
   * @param  {Date} relativeDate the relative date to contrast
   * @param {ConfigItem[]} config the segmented configuration to set the start of the time range(ms),the end of the time range(ms),template or render function
   */
  private constructor({ date, relativeDate, config }: { date: Date; relativeDate: Date; config?: ConfigItem[] }) {
    this.date = date;
    this.relativeDate = relativeDate;
    this.config = config.map(item => {
      return {
        timeStart: item.timeStart,
        timeEnd: item.timeEnd,
        template: item.template,
        render: item.render
      }
    }).sort((a, b) => {
      if (a.timeStart !== b.timeStart) {
        return a.timeStart - b.timeStart;
      }
    });

    this.timeInterval = this.relativeDate.getTime() - this.date.getTime();
  }

  public get YYYY() {

  }

  public getResult() {

  }
}
