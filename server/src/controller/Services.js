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
exports.updateStatus = exports.completeTask = exports.AssignRequirement = exports.getAssignedTasks = exports.getRequirement = exports.getRequirementsByUser = exports.deleteRequirement = exports.deleteService = exports.getservice = exports.getRequirements = exports.addRequirement = exports.getService = exports.addService = void 0;
var postgres_1 = require("../db/postgres");
var utils_1 = require("../utils");
var fs = require("fs");
var uuidv4 = require("uuid").v4;
function addService(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name_1,price, type_1, imgpath_1, imgfile, filenames_1, imgfiletype_1, date_1;
        var _this = this;
        return __generator(this, function (_b) {
            try {
                _a = req.body, name_1 = _a.name, type_1 = _a.type;
                price = _a.price;
                imgpath_1 = "./public/services";
                imgfile = req.files;
                filenames_1 = name_1.split("@#$@");
                date_1 = Date.now().toString();
                try {
                    imgfile.map(function (img, ind) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    imgfiletype_1 = (_a = img.mimetype) === null || _a === void 0 ? void 0 : _a.split("/")[1];
                                    return [4 /*yield*/, fs.rename("".concat(imgpath_1, "/").concat(img.filename), "".concat(imgpath_1, "/").concat(type_1 + "_" + ind.toString() + date_1 + "." + imgfiletype_1), function () { })];
                                case 1:
                                    _b.sent();
                                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO services(id,servicetype,imglocation,name,price) VALUES ($1 ,$2 , $3,$4,$5);", [
                                            uuidv4(),
                                            type_1,
                                            "".concat(type_1 + "_" + ind.toString() + date_1.toString() + "." + imgfiletype_1),
                                            filenames_1[ind],
                                            price
                                        ])];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (err) {
                    return [2 /*return*/, res.json({ message: err.message }).end()];
                }
            }
            catch (err) {
                return [2 /*return*/, res.json({ message: err.message }).end()];
            }
            return [2 /*return*/, res.json({ message: "Service added" }).end()];
        });
    });
}
exports.addService = addService;
function getService(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var services;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM services;")];
                case 1:
                    services = _a.sent();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.setHeader("Access-Control-Allow-Origin", "*");
                    return [2 /*return*/, res.status(200).json(services.rows)];
            }
        });
    });
}
exports.getService = getService;
function addRequirement(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, name_2, email, designation, companyname, mobile, address, fieldofservice, requirements,hours,price, id, fileloc, filepath, file, filetype, err_1, err_2;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 10, , 11]);
                    _b = req.body, name_2 = _b.name, email = _b.email, designation = _b.designation, companyname = _b.companyname, mobile = _b.mobile, address = _b.address, fieldofservice = _b.fieldofservice, requirements = _b.requirements,hours = _b.hours,price = _b.price, id = _b.id;
                    fileloc = void 0;
                    if (!req.file) return [3 /*break*/, 2];
                    filepath = "./public/requirements";
                    file = req.file;
                    filetype = (_a = file.mimetype) === null || _a === void 0 ? void 0 : _a.split("/")[1];
                    fileloc = "".concat(companyname + "requirement." + filetype);
                    return [4 /*yield*/, fs.rename("".concat(filepath, "/").concat(file.filename), "".concat(filepath, "/").concat(companyname + "requirement." + filetype), function () { })];
                case 1:
                    _c.sent();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 8, , 9]);
                    if (!(id !== "undefined")) return [3 /*break*/, 4];
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO requirements(id,name,email,designation,companyname,mobile,address,fieldofservice,requirements,hours,price,filelocation,date,serviceid,status) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)", [
                            uuidv4(),
                            name_2,
                            email,
                            designation,
                            companyname,
                            mobile,
                            address,
                            fieldofservice,
                            requirements,
                            hours,
                            price,
                            fileloc,
                            new Date().toISOString(),
                            id,
                            "PENDING",
                        ])];
                case 3:
                    _c.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, postgres_1.default.query("INSERT INTO requirements(id,name,email,designation,companyname,mobile,address,fieldofservice,requirements,filelocation,date,status) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)", [
                        uuidv4(),
                        name_2,
                        email,
                        designation,
                        companyname,
                        mobile,
                        address,
                        fieldofservice,
                        requirements,
                        hours,
                        price,
                        fileloc,
                        new Date().toISOString(),
                        "PENDING",
                    ])];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6: return [4 /*yield*/, (0, utils_1.submitTaskMail)({ name: name_2, email: email, requirements: requirements })];
                case 7:
                    _c.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_1 = _c.sent();
                    return [2 /*return*/, res.json({ message: err_1.message }).end()];
                case 9: return [3 /*break*/, 11];
                case 10:
                    err_2 = _c.sent();
                    return [2 /*return*/, res.json({ message: err_2.message }).end()];
                case 11: return [2 /*return*/, res.json({ message: "Requirement submitted succesfully" }).end()];
            }
        });
    });
}
exports.addRequirement = addRequirement;
function getRequirements(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var requirements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM requirements;")];
                case 1:
                    requirements = _a.sent();
                    return [2 /*return*/, res.status(200).json(requirements.rows)];
            }
        });
    });
}
exports.getRequirements = getRequirements;
function getservice(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, service;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM services WHERE id = $1;", [
                            id,
                        ])];
                case 1:
                    service = _a.sent();
                    return [2 /*return*/, res.status(200).json(service.rows)];
            }
        });
    });
}
exports.getservice = getservice;
function deleteService(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM services WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Service Deleted" })];
                case 3:
                    err_3 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_3.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteService = deleteService;
function deleteRequirement(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM requirements WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Requirement Deleted" })];
                case 3:
                    err_4 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_4.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteRequirement = deleteRequirement;
function getRequirementsByUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, requirement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM requirements WHERE completedby = $1;", [id])];
                case 1:
                    requirement = _a.sent();
                    return [2 /*return*/, res.status(200).json(requirement.rows)];
            }
        });
    });
}
exports.getRequirementsByUser = getRequirementsByUser;
function getRequirement(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, requirement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM requirements WHERE id = $1;", [id])];
                case 1:
                    requirement = _a.sent();
                    return [2 /*return*/, res.status(200).json(requirement.rows[0])];
            }
        });
    });
}
exports.getRequirement = getRequirement;
function getAssignedTasks(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var requirements;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT requirements.name as rname , team.name as uname , status , companyname FROM requirements INNER JOIN usertable ON requirements.completedby = usertable.userid INNER JOIN team on usertable.teammemberid = team.id")];
                case 1:
                    requirements = _a.sent();
                    return [2 /*return*/, res.status(200).json(requirements.rows)];
            }
        });
    });
}
exports.getAssignedTasks = getAssignedTasks;
function AssignRequirement(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userid, requirementId, err_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, userid = _a.userid, requirementId = _a.requirementId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("UPDATE requirements SET completedby = $1 WHERE id = $2;", [userid, requirementId])];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Task Assigned" })];
                case 3:
                    err_5 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_5.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.AssignRequirement = AssignRequirement;
function completeTask(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, remarks, link, id, requirement, _b, name_3, requirements, err_6, err_7;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, email = _a.email, remarks = _a.remarks, link = _a.link, id = _a.id;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 8, , 9]);
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM requirements WHERE id = $1;", [id])];
                case 2:
                    requirement = _c.sent();
                    _b = requirement.rows[0], name_3 = _b.name, requirements = _b.requirements;
                    return [4 /*yield*/, (0, utils_1.completeTaskMail)({
                            name: name_3,
                            email: email,
                            remarks: remarks,
                            link: link,
                            requirements: requirements,
                        })];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, postgres_1.default.query("UPDATE requirements SET status = $1 , completedon = $2 WHERE id = $3;", ["COMPLETED", new Date().toISOString(), id])];
                case 5:
                    _c.sent();
                    return [3 /*break*/, 7];
                case 6:
                    err_6 = _c.sent();
                    return [2 /*return*/, res.json({ message: err_6.message }).end()];
                case 7: return [2 /*return*/, res.status(200).json({ message: "Task Completed" })];
                case 8:
                    err_7 = _c.sent();
                    return [2 /*return*/, res.json({ message: err_7.message }).end()];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.completeTask = completeTask;
function updateStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, status, requirementId, err_8;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, status = _a.status, requirementId = _a.requirementId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("UPDATE requirements SET status = $1 WHERE id = $2;", [
                            status,
                            requirementId,
                        ])];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Status Updated" })];
                case 3:
                    err_8 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_8.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateStatus = updateStatus;
