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
exports.deleteMember = exports.getMembers = exports.getMemberByEmail = exports.getMember = exports.updatemember = exports.addmember = void 0;
var postgres_1 = require("../db/postgres");
var fs = require("fs");
function addmember(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, name, role, serialno, industryexperience, researchexperience, designskills, projectmanagement, creativity, programmingskills, industryknowledge, manufacturing, selfmotivation, stamina, reflex, intelligence, healingfactor, sarcasm, speed, email, linkedin, number, imgpath, imgfile, herofile, imgfiletype, heroimgfiletype, imgname, imgloc, heroimgloc, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _c = req.body, name = _c.name, role = _c.role, serialno = _c.serialno, industryexperience = _c.industryexperience, researchexperience = _c.researchexperience, designskills = _c.designskills, projectmanagement = _c.projectmanagement, creativity = _c.creativity, programmingskills = _c.programmingskills, industryknowledge = _c.industryknowledge, manufacturing = _c.manufacturing, selfmotivation = _c.selfmotivation, stamina = _c.stamina, reflex = _c.reflex, intelligence = _c.intelligence, healingfactor = _c.healingfactor, sarcasm = _c.sarcasm, speed = _c.speed, email = _c.email, linkedin = _c.linkedin, number = _c.number;
                    imgpath = "./public/images";
                    imgfile = req.files[0];
                    herofile = req.files[1];
                    imgfiletype = (_a = imgfile.mimetype) === null || _a === void 0 ? void 0 : _a.split("/")[1];
                    heroimgfiletype = (_b = herofile.mimetype) === null || _b === void 0 ? void 0 : _b.split("/")[1];
                    imgname = "";
                    return [4 /*yield*/, name.split(" ").map(function (nam) {
                            imgname += nam;
                        })];
                case 1:
                    _d.sent();
                    imgloc = "".concat(imgname + "." + imgfiletype);
                    heroimgloc = "".concat(imgname + "hero." + heroimgfiletype);
                    return [4 /*yield*/, fs.rename("".concat(imgpath, "/").concat(imgfile.filename), "".concat(imgpath, "/").concat(imgname + "." + imgfiletype), function () { })];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, fs.rename("".concat(imgpath, "/").concat(herofile.filename), "".concat(imgpath, "/").concat(imgname + "hero." + heroimgfiletype), function () { })];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO Team(name,serialno,role,image,heroimg,industryexperience,researchexperience,designskills,projectmanagement,creativity,programmingskills,industryknowledge,manufacturing,selfmotivation,stamina,reflex,intelligence,healingfactor,sarcasm,speed,email,linkedin,number) VALUES ($1 ,$2 , $3 , $4 , $5 , $6 , $7 , $8 , $9 , $10 ,$11 ,$12 , $13 , $14 , $15,$16 , $17 , $18 , $19,$20,$21,$22 ,$23);", [
                            name,
                            serialno,
                            role,
                            imgloc,
                            heroimgloc,
                            industryexperience,
                            researchexperience,
                            designskills,
                            projectmanagement,
                            creativity,
                            programmingskills,
                            industryknowledge,
                            manufacturing,
                            selfmotivation,
                            stamina,
                            reflex,
                            intelligence,
                            healingfactor,
                            sarcasm,
                            speed,
                            email,
                            linkedin,
                            number,
                        ])];
                case 5:
                    _d.sent();
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _d.sent();
                    return [2 /*return*/, res.json({ message: err_1.message }).end()];
                case 7: return [2 /*return*/, res.status(200).json({ message: "Team Member added" })];
            }
        });
    });
}
exports.addmember = addmember;
function updatemember(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, role, serialno, industryexperience, researchexperience, designskills, projectmanagement, creativity, programmingskills, industryknowledge, manufacturing, selfmotivation, stamina, reflex, intelligence, healingfactor, sarcasm, speed, email, linkedin, number, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, name = _a.name, role = _a.role, serialno = _a.serialno, industryexperience = _a.industryexperience, researchexperience = _a.researchexperience, designskills = _a.designskills, projectmanagement = _a.projectmanagement, creativity = _a.creativity, programmingskills = _a.programmingskills, industryknowledge = _a.industryknowledge, manufacturing = _a.manufacturing, selfmotivation = _a.selfmotivation, stamina = _a.stamina, reflex = _a.reflex, intelligence = _a.intelligence, healingfactor = _a.healingfactor, sarcasm = _a.sarcasm, speed = _a.speed, email = _a.email, linkedin = _a.linkedin, number = _a.number;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("UPDATE Team SET name = $1,serialno = $2,role=$3,industryexperience = $4,researchexperience = $5,designskills = $6,projectmanagement = $7,creativity = $8,programmingskills = $9,industryknowledge = $10,manufacturing = $11,selfmotivation = $12,stamina = $13,reflex = $14,intelligence = $15,healingfactor = $16,sarcasm = $17,speed = $18,email = $19,linkedin = $20,number = $21 WHERE id = $22;", [
                            name,
                            serialno,
                            role,
                            industryexperience,
                            researchexperience,
                            designskills,
                            projectmanagement,
                            creativity,
                            programmingskills,
                            industryknowledge,
                            manufacturing,
                            selfmotivation,
                            stamina,
                            reflex,
                            intelligence,
                            healingfactor,
                            sarcasm,
                            speed,
                            email,
                            linkedin,
                            number,
                            id,
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_2.message }).end()];
                case 4: return [2 /*return*/, res.status(200).json({ message: "Team Member Updated" })];
            }
        });
    });
}
exports.updatemember = updatemember;
function getMember(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, team;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM Team WHERE id = $1", [id])];
                case 1:
                    team = _a.sent();
                    return [2 /*return*/, res.status(200).json(team.rows[0])];
            }
        });
    });
}
exports.getMember = getMember;
function getMemberByEmail(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, team;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.params.email;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM Team WHERE email = $1", [email])];
                case 1:
                    team = _a.sent();
                    return [2 /*return*/, res.status(200).json(team.rows[0])];
            }
        });
    });
}
exports.getMemberByEmail = getMemberByEmail;
function getMembers(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var team;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM Team ORDER BY serialno ASC;")];
                case 1:
                    team = _a.sent();
                    return [2 /*return*/, res.status(200).json(team.rows)];
            }
        });
    });
}
exports.getMembers = getMembers;
function deleteMember(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM Team WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_3.message }).end()];
                case 4: return [2 /*return*/, res.status(200).json({ message: "Team Member Deleted" })];
            }
        });
    });
}
exports.deleteMember = deleteMember;
