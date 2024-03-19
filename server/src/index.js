"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv = require("dotenv");
var postgres_1 = require("./db/postgres");
var team_1 = require("./controller/team");
var product_1 = require("./controller/product");
var Services_1 = require("./controller/Services");
var Career_1 = require("./controller/Career");
var User_1 = require("./controller/User");
var utils_1 = require("./utils");
dotenv.config();
var app = (0, express_1.default)();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var multer = require("multer");
var upload = multer({ dest: "./public/images/" });
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
// Add team member
var whitelist = [
    // "https://gimsindia.in",
    // "http://www.gimsindia.in",
    "http://localhost:3000",
];
var corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));
app.get("/service", Services_1.getService);
app.get("/service/:id", Services_1.getservice);
app.get("/teammembers", team_1.getMembers);
app.get("/teammember/:id", team_1.getMember);
app.get("/teammember/email/:email", team_1.getMemberByEmail);
app.get("/product", product_1.getproducts);
app.get("/product/:id", product_1.getproduct);
app.get("/faq/:id", product_1.getfaq);
app.get("/image/:id", product_1.getImages);
app.get("/careers", Career_1.getcareers);
app.get("/career/:id", Career_1.getcareer);
app.post("/addrequirement", multer({ dest: "./public/requirements" }).single("requirement"), Services_1.addRequirement);
app.post("/uploadresume", multer({ dest: "./public/applications" }).single("resume"), Career_1.uploadresume);
app.get("/users", User_1.getUsers);
app.post("/login", User_1.login);
app.post("/forgotpassword", User_1.getPasswordOTP);
app.post("/resetpassword", User_1.resetPassword);
app.post("/completeTask", Services_1.completeTask);
app.post("/addservice", 
// function (req, res, next) {
//     (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "TECHNICIAN"]);
// }, 
multer({ dest: "./public/services" }).any("serviceImg", 10), Services_1.addService);
app.get("/requirement",
 function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "TECHNICIAN"]);
}, Services_1.getRequirements);
app.get("/tasks/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, Services_1.getRequirementsByUser);
app.post("/assigntask", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, Services_1.AssignRequirement);
app.post("/updatestatus", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, Services_1.updateStatus);
app.get("/assignedtasks", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, Services_1.getAssignedTasks);
app.get("/requirement/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "TECHNICIAN"]);
}, Services_1.getRequirement);
app.post("/addcareer", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "HR"]);
}, Career_1.addCareer);
app.put("/career", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "HR"]);
}, Career_1.updatecareer);
app.get("/application", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "HR"]);
}, Career_1.getApplications);
app.post("/uploadtimesheet",
//  function (req, res, next) {
//     (0, utils_1.authMiddleware)(req, res, next, [
//         "ADMIN",
//         "ENGINEER",
//         "MARKETING",
//         "INTERN",
//         "HR",
//         "TECHNICIAN",
//     ]);
// },
 User_1.uploadTimesheet);
app.delete("/timesheet/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, User_1.deletetimesheet);
app.get("/timesheet/:id",
//  function (req, res, next) {
//     (0, utils_1.authMiddleware)(req, res, next, [
//         "ADMIN",
//         "ENGINEER",
//         "MARKETING",
//         "INTERN",
//         "HR",
//         "TECHNICIAN",
//     ]);
// }, 
User_1.getTimesheet);
app.get("/timesheetactivity/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER"]);
}, User_1.getTimesheetActivity);
app.post("/applyleave", User_1.applyLeave);
app.get("/leave/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, User_1.getLeave);
app.delete("/leave/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, User_1.deleteleave);
app.get("/leaves", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, User_1.getLeaves);
app.post("/approveleave", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, User_1.ApproveLeave);
app.delete("/faq/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, product_1.deletefaq);
app.put("/product", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, product_1.updateproduct);
app.delete("/product/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, product_1.deleteproduct);
app.post("/addproduct", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, multer({ dest: "./public/products" }).any("uploadedproduct", 2), product_1.addproduct);
app.post("/upload/faq",
//  function (req, res, next) {
//     (0, utils_1.authMiddleware)(req, res, next, [
//         "ADMIN",
//         "ENGINEER",
//         "MARKETING",
//         "INTERN",
//         "HR",
//         "TECHNICIAN",
//     ]);
// }, 
product_1.addfaq);
app.post("/upload/image", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, multer({ dest: "./public/products" }).any("uploadedImg", 10), product_1.addImage);
app.delete("/service/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN", "ENGINEER", "TECHICIAN"]);
}, Services_1.deleteService);
app.delete("/requirement/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, Services_1.deleteRequirement);
app.post("/addmember", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, upload.any("uploadedImages", 2), team_1.addmember);
app.put("/member", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, team_1.updatemember);
app.delete("/deletemember/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, team_1.deleteMember);
app.post("/adduser", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, User_1.addUser);
app.post("/changepass", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, [
        "ADMIN",
        "ENGINEER",
        "MARKETING",
        "INTERN",
        "HR",
        "TECHNICIAN",
    ]);
}, User_1.ChangePass);
app.delete("/user/:id", function (req, res, next) {
    (0, utils_1.authMiddleware)(req, res, next, ["ADMIN"]);
}, User_1.deleteUser);
postgres_1.default.connect().then(function () {
    console.log("Connected to database");
    app.listen(8000, function () {
        return console.log("Listening on port " + 8000);
    });
});
