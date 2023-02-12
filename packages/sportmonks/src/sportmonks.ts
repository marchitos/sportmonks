import { SportMonksConf } from "./client";
import { SportMonksCore } from "./core";
import { SportMonksFootball } from "./football";
import { SportMonksOdds } from "./odds";

export class SportMonks {
    private _core: SportMonksCore;
    private _football: SportMonksFootball;
    private _odds: SportMonksOdds;
    constructor(private conf: SportMonksConf) {
        this._core = new SportMonksCore(conf);
        this._football = new SportMonksFootball(conf);
        this._odds = new SportMonksOdds(conf);
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