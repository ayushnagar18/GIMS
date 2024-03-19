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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApplications = exports.uploadresume = exports.updatecareer = exports.getcareer = exports.getcareers = exports.addCareer = void 0;
var postgres_1 = require("../db/postgres");
var uuidv4 = require("uuid").v4;
var fs = require("fs");
function addCareer(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, description, type, experience, domain, skills, noOfOpenings, location_1, err_1, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, title = _a.title, description = _a.description, type = _a.type, experience = _a.experience, domain = _a.domain, skills = _a.skills, noOfOpenings = _a.noOfOpenings, location_1 = _a.location;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO career(id,title,description,type,experience,domain,skills,postedOn,isActive,noOfOpenings ,totalregistrants,location) VALUES ($1 ,$2 , $3 , $4 , $5 , $6 , $7 , $8 , $9 , $10 ,$11,$12);", [
                            uuidv4(),
                            title,
                            description,
                            type,
                            experience,
                            domain,
                            skills,
                            new Date().toISOString(),
                            true,
                            noOfOpenings,
                            0,
                            location_1,
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_1.message }).end()];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_2 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_2.message }).end()];
                case 6: return [2 /*return*/, res.status(200).json({ message: "Career added" })];
            }
        });
    });
}
exports.addCareer = addCareer;
function getcareers(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var career;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM career;")];
                case 1:
                    career = _a.sent();
                    return [2 /*return*/, res.status(200).json(career.rows)];
            }
        });
    });
}
exports.getcareers = getcareers;
function getcareer(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, career;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM career WHERE id = $1;", [
                            id,
                        ])];
                case 1:
                    career = _a.sent();
                    return [2 /*return*/, res.status(200).json(career.rows)];
            }
        });
    });
}
exports.getcareer = getcareer;
function updatecareer(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, status, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, status = _a.status;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("UPDATE career SET isactive = $1 WHERE id = $2;", [
                            status,
                            id,
                        ])];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Status Updated" })];
                case 3:
                    err_3 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_3.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updatecareer = updatecareer;
function uploadresume(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, name_1, careerId, email, mobilenumber, careertitle, careerdomain, filepath, file_1, filetype, date, err_4, err_5;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 6, , 7]);
                    _b = req.body, name_1 = _b.name, careerId = _b.careerId, email = _b.email, mobilenumber = _b.mobilenumber, careertitle = _b.careertitle, careerdomain = _b.careerdomain;
                    filepath = "./public/applications";
                    file_1 = req.file;
                    filetype = (_a = file_1.mimetype) === null || _a === void 0 ? void 0 : _a.split("/")[1];
                    date = Date.now();
                    return [4 /*yield*/, fs.rename("".concat(filepath, "/").concat(file_1.filename), "".concat(filepath, "/").concat(careerId +
                            "_" +
                            name_1 +
                            "_" +
                            email +
                            "_" +
                            date.toString() +
                            "." +
                            filetype), function () { })];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO application(id,name,email,mobile,resumelocation,careerid,careertitle,careerdomain,appliedOn) VALUES ($1 ,$2 , $3 , $4 , $5 , $6,$7,$8,$9);", [
                            uuidv4(),
                            name_1,
                            email,
                            mobilenumber,
                            "".concat(careerId +
                                "_" +
                                name_1 +
                                "_" +
                                email +
                                "_" +
                                date.toString() +
                                "." +
                                filetype),
                            careerId,
                            careertitle,
                            careerdomain,
                            new Date().toISOString(),
                        ])];
                case 3:
                    _c.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _c.sent();
                    return [2 /*return*/, res.json({ message: err_4.message }).end()];
                case 5: return [3 /*break*/, 7];
                case 6:
                    err_5 = _c.sent();
                    return [2 /*return*/, res.json({ message: err_5.message }).end()];
                case 7: return [2 /*return*/, res.status(200).json({ message: "Resume Uploaded" })];
            }
        });
    });
}
exports.uploadresume = uploadresume;
function getApplications(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var applications;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM application;")];
                case 1:
                    applications = _a.sent();
                    return [2 /*return*/, res.status(200).json(applications.rows)];
            }
        });
    });
}
exports.getApplications = getApplications;
