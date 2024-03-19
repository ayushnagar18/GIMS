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
exports.resetPassword = exports.getPasswordOTP = exports.ChangePass = exports.ApproveLeave = exports.getLeaves = exports.getLeave = exports.getTimesheetActivity = exports.getTimesheet = exports.deleteleave = exports.applyLeave = exports.deletetimesheet = exports.uploadTimesheet = exports.login = exports.getUsers = exports.deleteUser = exports.addUser = void 0;
var postgres_1 = require("../db/postgres");
var jsonwebtoken_1 = require("jsonwebtoken");
var utils_1 = require("../utils");
var uuidv4 = require("uuid").v4;
var bcrypt = require("bcryptjs");
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email_1, role_1, password, teammemberId_1, userId_1, rows, UID, err_1, err_2;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, email_1 = _a.email, role_1 = _a.role, password = _a.password, teammemberId_1 = _a.teammemberId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("SELECT COUNT(*) FROM usertable")];
                case 2:
                    rows = (_b.sent()).rows;
                    console.log(rows[0].count, email_1, role_1, password, teammemberId_1);
                    UID = ("000" + (parseInt(rows[0].count) + 1)).slice(-3);
                    userId_1 = "GIMS".concat(UID);
                    bcrypt.hash(password, 10).then(function (hash) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, postgres_1.default.query("INSERT INTO usertable(userid,emailid,password,role,teammemberid) VALUES($1,$2,$3,$4,$5);", [userId_1, email_1, hash, role_1, teammemberId_1])];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/, res.status(200).json({ message: "User added", userId: userId_1 })];
                case 3:
                    err_1 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_1.message }).end()];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_2 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_2.message }).end()];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.addUser = addUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM usertable WHERE userid = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "User Deleted" })];
                case 3:
                    err_3 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_3.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUser = deleteUser;
function getUsers(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT userId,name,usertable.role,team.role as jobtitle FROM usertable INNER JOIN team ON usertable.teammemberId = team.Id;")];
                case 1:
                    users = _a.sent();
                    return [2 /*return*/, res.status(200).json(users.rows)];
            }
        });
    });
}
exports.getUsers = getUsers;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userId, password, email, user, rows, rows, checkPass, token, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    _a = req.body, userId = _a.userId, password = _a.password, email = _a.email;
                    if (!((userId || email) && password)) {
                        return [2 /*return*/, res
                                .json({ message: "Some Error occured Please Try Again Later" })
                                .end()];
                    }
                    user = void 0;
                    if (!userId) return [3 /*break*/, 2];
                    return [4 /*yield*/, postgres_1.default.query("SELECT userId , role , password FROM usertable WHERE userId = $1", [userId])];
                case 1:
                    rows = (_b.sent()).rows;
                    user = rows[0];
                    _b.label = 2;
                case 2:
                    if (!email) return [3 /*break*/, 4];
                    return [4 /*yield*/, postgres_1.default.query("SELECT userId,emailid,role , password FROM usertable WHERE emailid = $1", [email])];
                case 3:
                    rows = (_b.sent()).rows;
                    user = rows[0];
                    _b.label = 4;
                case 4:
                    if (!user) {
                        return [2 /*return*/, res.json({ message: "Account Not Found" }).end()];
                    }
                    if (!user) return [3 /*break*/, 6];
                    return [4 /*yield*/, bcrypt.compare(password, user === null || user === void 0 ? void 0 : user.password)];
                case 5:
                    checkPass = _b.sent();
                    if (!checkPass) {
                        return [2 /*return*/, res.json({ message: "Invalid Credentials" }).end()];
                    }
                    token = jsonwebtoken_1.sign({ user: user }, process.env.JWT_SECRET || "secret", {
                        expiresIn: "1h",
                    });
                    res.cookie("token", token, {
                      httpOnly: true,
                      sameSite: "none",
                      maxAge: 1000 * 60 * 60 * 24 * 365,
                      secure: true,
                    });
                    return [2 /*return*/, res.json({ message: "User logged in", user: user ,token:token}).end()];
                case 6: return [2 /*return*/, res.end()];
                case 7:
                    error_1 = _b.sent();
                    return [2 /*return*/, res.json({ message: error_1.message }).end()];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
function uploadTimesheet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, starttime, endtime, noOfhours, description, updatedOn, activity, err_4, err_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, starttime = _a.starttime, endtime = _a.endtime, noOfhours = _a.noOfhours, description = _a.description, updatedOn = _a.updatedOn, activity = _a.activity;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO timesheet(id,activity,starttime,endtime,noofhours,updatedOn,userid,description) VALUES ($1 ,$2 , $3 , $4 , $5 , $6,$7,$8);", [
                            uuidv4(),
                            activity,
                            starttime,
                            endtime,
                            noOfhours,
                            updatedOn,
                            req.user.userid,
                            description,
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_4 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_4.message }).end()];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_5 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_5.message }).end()];
                case 6: return [2 /*return*/, res.status(200).json({ message: "TimeSheet Uploaded" })];
            }
        });
    });
}
exports.uploadTimesheet = uploadTimesheet;
function deletetimesheet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM timesheet WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "timesheet Deleted" })];
                case 3:
                    err_6 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_6.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deletetimesheet = deletetimesheet;
function applyLeave(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, startDate, endDate, noOfDays, userId, reason, updatedOn, err_7, err_8;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, startDate = _a.startDate, endDate = _a.endDate, noOfDays = _a.noOfDays, userId = _a.userId, reason = _a.reason, updatedOn = _a.updatedOn;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO leave(id,startDate,endDate,noofdays,updatedOn,userid,reason,isapproved) VALUES ($1 ,$2 , $3 , $4 , $5 , $6,$7,$8);", [
                            uuidv4(),
                            startDate,
                            endDate,
                            noOfDays,
                            updatedOn,
                            userId,
                            reason,
                            "PENDING",
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_7 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_7.message }).end()];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_8 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_8.message }).end()];
                case 6: return [2 /*return*/, res.status(200).json({ message: "Leave Applied" })];
            }
        });
    });
}
exports.applyLeave = applyLeave;
function deleteleave(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM leave WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Leave Deleted" })];
                case 3:
                    err_9 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_9.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteleave = deleteleave;
function getTimesheet(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, timesheet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM timesheet WHERE userid = $1 ORDER BY starttime DESC;", [id])];
                case 1:
                    timesheet = _a.sent();
                    return [2 /*return*/, res.status(200).json(timesheet.rows)];
            }
        });
    });
}
exports.getTimesheet = getTimesheet;
function getTimesheetActivity(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, timesheet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT activity,sum(noofhours) as hours FROM timesheet WHERE userid = $1  GROUP BY activity ;", [id])];
                case 1:
                    timesheet = _a.sent();
                    return [2 /*return*/, res.status(200).json(timesheet.rows)];
            }
        });
    });
}
exports.getTimesheetActivity = getTimesheetActivity;
function getLeave(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, leave;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM leave WHERE userid = $1 ORDER BY startDate DESC;", [id])];
                case 1:
                    leave = _a.sent();
                    return [2 /*return*/, res.status(200).json(leave.rows)];
            }
        });
    });
}
exports.getLeave = getLeave;
function getLeaves(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var leave;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM leave INNER JOIN usertable ON usertable.userid = leave.userid ORDER BY startDate DESC;")];
                case 1:
                    leave = _a.sent();
                    return [2 /*return*/, res.status(200).json(leave.rows)];
            }
        });
    });
}
exports.getLeaves = getLeaves;
function ApproveLeave(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, status;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, status = _a.status;
                    return [4 /*yield*/, postgres_1.default.query("UPDATE leave SET isapproved = $1 WHERE id = $2", [
                            status,
                            id,
                        ])];
                case 1:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Leave status updated" })];
            }
        });
    });
}
exports.ApproveLeave = ApproveLeave;
function ChangePass(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var password;
        var _this = this;
        return __generator(this, function (_a) {
            password = req.body.password;
            bcrypt.hash(password, 10).then(function (hash) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, postgres_1.default.query("UPDATE usertable SET password = $1 WHERE userid = $2", [
                                hash,
                                req.user.userid,
                            ])];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/, res.status(200).json({ message: "Password Updated" })];
        });
    });
}
exports.ChangePass = ChangePass;
function getPasswordOTP(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var email, user, passwordOTP, userid, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    email = req.body.email;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM usertable WHERE emailid = $1", [email])];
                case 1:
                    user = (_a.sent()).rows;
                    if (user.length === 0)
                        throw new Error("Email Not found");
                    if (user[0].password === null)
                        throw new Error("Account not found");
                    passwordOTP = (0, utils_1.generateOTP)();
                    return [4 /*yield*/, postgres_1.default.query("UPDATE usertable SET passwordOTP = $1 WHERE userid = $2", [passwordOTP, user[0].userid])];
                case 2:
                    _a.sent();
                    userid = user[0].userid;
                    return [4 /*yield*/, (0, utils_1.sendForgotResetMail)({
                            name: userid,
                            email: email,
                            verificationOTP: passwordOTP,
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Verification OTP sent to mail" })];
                case 4:
                    err_10 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_10.message }).end()];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getPasswordOTP = getPasswordOTP;
function resetPassword(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, otp, email, password, user, pass, err_11;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, otp = _a.otp, email = _a.email, password = _a.password;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM usertable WHERE emailid = $1", [email])];
                case 1:
                    user = (_b.sent()).rows;
                    if (user.length === 0) {
                        return [2 /*return*/, res.status(404).json({ message: "Email Not Found" }).end()];
                    }
                    ;
                    if (user[0].password === null)
                        throw new Error("Account not found");
                    if (!(user[0].passwordotp === otp)) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, bcrypt.hash(password, 13)];
                case 3:
                    pass = _b.sent();
                    return [4 /*yield*/, postgres_1.default.query("UPDATE usertable SET password = $1 WHERE emailid = $2", [pass, email])];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    err_11 = _b.sent();
                    return [2 /*return*/, res.status(404).json({ message: err_11.message }).end()];
                case 6: return [2 /*return*/, res.status(200).json({ message: "Password Changed" })];
            }
        });
    });
}
exports.resetPassword = resetPassword;
