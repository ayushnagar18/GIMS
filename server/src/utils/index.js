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
exports.generateOTP = exports.submitTaskMail = exports.completeTaskMail = exports.sendForgotResetMail = exports.authMiddleware = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var mail_1 = require("./mail");
var authMiddleware = function (req, res, next, roles) { return __awaiter(void 0, void 0, void 0, function () {
    var token, decodedToken, _a, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                token = req.headers.authorization;
                if (!token) {
                    throw new Error("Auth failed");
                }
                decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "secret");
                if (!roles.includes(decodedToken.user.role)) return [3 /*break*/, 2];
                _a = req;
                return [4 /*yield*/, decodedToken.user];
            case 1:
                _a.user = _b.sent();
                next();
                return [3 /*break*/, 3];
            case 2: return [2 /*return*/, res.status(403).json({ message: "Unauthorized" })];
            case 3: return [3 /*break*/, 5];
            case 4:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(401).json({ message: "Auth failed" })];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.authMiddleware = authMiddleware;
var sendForgotResetMail = function (_a) {
    var name = _a.name, email = _a.email, verificationOTP = _a.verificationOTP;
    return __awaiter(void 0, void 0, void 0, function () {
        var body;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    body = "Hello <b>".concat(name, "</b>,<br><br>\n  In case you forgot your password,<p>your OTP for reset password is\n  <strong>").concat(verificationOTP, "</strong></p>");
                    return [4 /*yield*/, (0, mail_1.mail)({
                            email: email,
                            sub: "Forgot your password  | Gims Pvt Ltd",
                            body: body,
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.sendForgotResetMail = sendForgotResetMail;
var completeTaskMail = function (_a) {
    var name = _a.name, email = _a.email, remarks = _a.remarks, requirements = _a.requirements, link = _a.link;
    return __awaiter(void 0, void 0, void 0, function () {
        var body;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (link) {
                        body = "Requirement Name : ".concat(name, " <br> Requirement Details : ").concat(requirements, " <br>\n    Remarks : ").concat(remarks, " <br> required files : ").concat(link);
                    }
                    else {
                        body = "Requirement Name : ".concat(name, " <br> Requirement Details : ").concat(requirements, " <br>\n    Remarks : ").concat(remarks);
                    }
                    return [4 /*yield*/, (0, mail_1.mail)({
                            email: email,
                            sub: "Gims Pvt Ltd | Requirement Status ",
                            body: body,
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.completeTaskMail = completeTaskMail;
var submitTaskMail = function (_a) {
    var name = _a.name, email = _a.email, requirements = _a.requirements;
    return __awaiter(void 0, void 0, void 0, function () {
        var body;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    body = "Hello <b>".concat(name, "</b> Your requirement is submitted sucessfully. Our team will look into it and get back to you\n  <br> <b>Requirement Details :<b> ").concat(requirements);
                    return [4 /*yield*/, (0, mail_1.mail)({
                            email: email,
                            sub: "Gims Pvt Ltd | Requirement Submission ",
                            body: body,
                        })];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
};
exports.submitTaskMail = submitTaskMail;
var generateOTP = function () {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
exports.generateOTP = generateOTP;
