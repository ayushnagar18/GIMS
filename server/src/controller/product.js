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
exports.getImages = exports.addImage = exports.deletefaq = exports.addfaq = exports.getfaq = exports.deleteproduct = exports.getproduct = exports.getproducts = exports.updateproduct = exports.addproduct = void 0;
var postgres_1 = require("../db/postgres");
var fs = require("fs");
var uuidv4 = require("uuid").v4;
function addproduct(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, name_1, type, description, technicalspecs, presentInHomePage, serialno, youtubeId, imgpath, brochurepath, imgfile, brochureimgloc, brochurefile, brochureimgfiletype, imgfiletype, imgloc, err_1, err_2;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 8, , 9]);
                    _c = req.body, name_1 = _c.name, type = _c.type, description = _c.description, technicalspecs = _c.technicalspecs, presentInHomePage = _c.presentInHomePage, serialno = _c.serialno, youtubeId = _c.youtubeId;
                    imgpath = "./public/products";
                    brochurepath = "./public/products";
                    imgfile = req.files[0];
                    brochureimgloc = void 0;
                    if (!(req.files.length > 1)) return [3 /*break*/, 2];
                    brochurefile = req.files[1];
                    brochureimgfiletype = (_a = brochurefile.mimetype) === null || _a === void 0 ? void 0 : _a.split("/")[1];
                    brochureimgloc = "".concat(name_1 + "brochure." + brochureimgfiletype);
                    return [4 /*yield*/, fs.rename("".concat(brochurepath, "/").concat(brochurefile.filename), "".concat(brochurepath, "/").concat(name_1 + "brochure." + brochureimgfiletype), function () { })];
                case 1:
                    _d.sent();
                    _d.label = 2;
                case 2:
                    imgfiletype = (_b = imgfile.mimetype) === null || _b === void 0 ? void 0 : _b.split("/")[1];
                    imgloc = "".concat(name_1 + "." + imgfiletype);
                    return [4 /*yield*/, fs.rename("".concat(imgpath, "/").concat(imgfile.filename), "".concat(imgpath, "/").concat(name_1 + "." + imgfiletype), function () { })];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _d.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO product(id,name,type,description,image,brochure,technicalspecs,presentInHomePage,serialno,youtubeId) VALUES ($1 ,$2 , $3 , $4 , $5 , $6,$7,$8,$9,$10);", [
                            uuidv4(),
                            name_1,
                            type,
                            description,
                            imgloc,
                            brochureimgloc,
                            technicalspecs,
                            presentInHomePage,
                            serialno,
                            youtubeId,
                        ])];
                case 5:
                    _d.sent();
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _d.sent();
                    return [2 /*return*/, res.json({ message: err_1.message }).end()];
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_2 = _d.sent();
                    return [2 /*return*/, res.json({ message: err_2.message }).end()];
                case 9: return [2 /*return*/, res.status(200).json({ message: "Product added" })];
            }
        });
    });
}
exports.addproduct = addproduct;
function updateproduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, name, type, description, technicalspecs, presentInHomePage, serialno, youtubeId, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, id = _a.id, name = _a.name, type = _a.type, description = _a.description, technicalspecs = _a.technicalspecs, presentInHomePage = _a.presentInHomePage, serialno = _a.serialno, youtubeId = _a.youtubeId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("UPDATE product SET name = $1,serialno = $2,type=$3,description = $4,technicalspecs= $5,presentInHomePage= $6,youtubeId = $7 WHERE id = $8;", [
                            name,
                            serialno,
                            type,
                            description,
                            technicalspecs,
                            presentInHomePage,
                            youtubeId,
                            id,
                        ])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_3.message }).end()];
                case 4: return [2 /*return*/, res.status(200).json({ message: "Product Updated" })];
            }
        });
    });
}
exports.updateproduct = updateproduct;
function getproducts(_, res) {
    return __awaiter(this, void 0, void 0, function () {
        var team;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, postgres_1.default.query("SELECT * FROM product ORDER BY serialno ASC;")];
                case 1:
                    team = _a.sent();
                    return [2 /*return*/, res.status(200).json(team.rows)];
            }
        });
    });
}
exports.getproducts = getproducts;
function getproduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, product;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM product WHERE id = $1;", [
                            id,
                        ])];
                case 1:
                    product = _a.sent();
                    return [2 /*return*/, res.status(200).json(product.rows)];
            }
        });
    });
}
exports.getproduct = getproduct;
function deleteproduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM product WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Product Deleted" })];
                case 3:
                    err_4 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_4.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteproduct = deleteproduct;
function getfaq(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, faq;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM faq WHERE productId = $1;", [
                            id,
                        ])];
                case 1:
                    faq = _a.sent();
                    return [2 /*return*/, res.status(200).json(faq.rows)];
            }
        });
    });
}
exports.getfaq = getfaq;
function addfaq(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, question, answer, productId, err_5, err_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, question = _a.question, answer = _a.answer, productId = _a.productId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("INSERT INTO faq(id,question,answer,productId) VALUES ($1 ,$2 , $3 , $4 );", [uuidv4(), question, answer, productId])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_5 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_5.message }).end()];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_6 = _b.sent();
                    return [2 /*return*/, res.json({ message: err_6.message }).end()];
                case 6: return [2 /*return*/, res.status(200).json({ message: "FAQ added" })];
            }
        });
    });
}
exports.addfaq = addfaq;
function deletefaq(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, postgres_1.default.query("DELETE FROM faq WHERE id = $1;", [id])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "faq Deleted" })];
                case 3:
                    err_7 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_7.message }).end()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deletefaq = deletefaq;
function addImage(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productId_1, imgpath_1, imgfile, product_1, date_1, err_8;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    productId_1 = req.body.productId;
                    imgpath_1 = "./public/products";
                    imgfile = req.files;
                    return [4 /*yield*/, postgres_1.default.query("SELECT name FROM product where id = $1", [productId_1])];
                case 1:
                    product_1 = _a.sent();
                    date_1 = Date.now().toString();
                    try {
                        imgfile.map(function (img, ind) { return __awaiter(_this, void 0, void 0, function () {
                            var imgfiletype;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, ((_a = img.mimetype) === null || _a === void 0 ? void 0 : _a.split("/")[1])];
                                    case 1:
                                        imgfiletype = _b.sent();
                                        return [4 /*yield*/, fs.rename("".concat(imgpath_1, "/").concat(img.filename), "".concat(imgpath_1, "/").concat(product_1.rows[0].name +
                                                "_" +
                                                ind.toString() +
                                                date_1 +
                                                "." +
                                                imgfiletype), function () { })];
                                    case 2:
                                        _b.sent();
                                        return [4 /*yield*/, postgres_1.default.query("INSERT INTO image(id,location,productId) VALUES ($1 ,$2 , $3);", [
                                                uuidv4(),
                                                "".concat(product_1.rows[0].name +
                                                    "_" +
                                                    ind.toString() +
                                                    date_1 +
                                                    "." +
                                                    imgfiletype),
                                                productId_1,
                                            ])];
                                    case 3:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    catch (err) {
                        return [2 /*return*/, res.json({ message: err.message }).end()];
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_8 = _a.sent();
                    return [2 /*return*/, res.json({ message: err_8.message }).end()];
                case 3: return [2 /*return*/, res.json({ message: "Images uploaded" }).end()];
            }
        });
    });
}
exports.addImage = addImage;
function getImages(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, faq;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, postgres_1.default.query("SELECT * FROM image WHERE productId = $1;", [
                            id,
                        ])];
                case 1:
                    faq = _a.sent();
                    return [2 /*return*/, res.status(200).json(faq.rows)];
            }
        });
    });
}
exports.getImages = getImages;
