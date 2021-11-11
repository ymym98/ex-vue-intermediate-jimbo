import { format } from "date-fns";
//const MOON_ADJUSTMENT = 1;

/**
 * 野球チームを表す部品用のクラス.
 */
export class Team {
  constructor(
    //ID
    private _id: number,
    //球団名
    private _teamName: string,
    //本拠地
    private _headquarters: string,
    //発足日
    private _inauguration: Date,
    //歴史
    private _history: string
  ) {}

  get formatInauguration(): string {
    return format(this.inauguration, "yyyy年MM月dd日");
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get teamName(): string {
    return this._teamName;
  }

  public set teamName(teamName: string) {
    this._teamName = teamName;
  }

  public get headquarters(): string {
    return this._headquarters;
  }

  public set headquarters(headquarters: string) {
    this._headquarters = headquarters;
  }

  public get inauguration(): Date {
    return this._inauguration;
  }

  public set inauguration(inauguration: Date) {
    this._inauguration = inauguration;
  }

  public get history(): string {
    return this._history;
  }

  public set history(history: string) {
    this._history = history;
  }
}
