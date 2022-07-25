"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const songsterr = 'https://www.songsterr.com/a/ra/songs.json?pattern=Marley';
const writeSingleResponse = (url, filename = 'resp') => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(url);
    const data = res.data;
    console.log(typeof data);
    const json = JSON.stringify(data, null, 4);
    fs_1.default.writeFileSync(`./responses/${filename}.json`, json);
});
writeSingleResponse(songsterr);
//# sourceMappingURL=index.js.map