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
const urls_1 = require("./urls");
const writeSingleResponse = (url, filename = 'resp') => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(url);
    const data = res.data;
    const json = JSON.stringify(data, null, 4);
    fs_1.default.writeFileSync(`../responses/${filename}.json`, json);
});
const callNwrite = (() => __awaiter(void 0, void 0, void 0, function* () {
    writeSingleResponse(urls_1.urls.songsterr, 'songsterr');
    writeSingleResponse(urls_1.urls.discogs, 'discogs');
    writeSingleResponse(urls_1.urls.lyricsovh, 'lyricsovh');
    writeSingleResponse(urls_1.urls.theaudiodb, 'theaudiodb');
}))();
//# sourceMappingURL=index.js.map