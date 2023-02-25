import { SportMonksConf } from "./client";
import { SportMonksCore } from "./core";
import { SportMonksFootball } from "./football";
import { SportMonksMy } from "./my";
import { SportMonksOdds } from "./odds";

export class SportMonks {
    private _my: SportMonksMy;
    private _core: SportMonksCore;
    private _football: SportMonksFootball;
    private _odds: SportMonksOdds;
    constructor(private conf: SportMonksConf) {
        this._my = new SportMonksMy(conf);
        this._core = new SportMonksCore(conf);
        this._football = new SportMonksFootball(conf);
        this._odds = new SportMonksOdds(conf);
    }
    get my() {
        return this._my;
    }
    get core() {
        return this._core;
    }
    get football() {
        return this._football;
    }
    get odds() {
        return this._odds;
    }
}