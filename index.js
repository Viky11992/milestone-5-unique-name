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
var _a;
(_a = document
    .getElementById("uniqueName")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // type assertion:
    var dp = document.getElementById("dp");
    var userName = document.getElementById("name");
    var userurl = document.getElementById("userUrl");
    var userNumber = document.getElementById("number");
    var skills = document.getElementById("skills");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var btn = document.getElementById("btn");
    if (userurl &&
        dp &&
        userName &&
        userNumber &&
        skills &&
        education &&
        experience) {
        var userNameVal = userName.value;
        var userNumberVal = userNumber.value;
        var userSkillsVal = skills.value;
        var userEducationVal = education.value;
        var userexperienceVal = experience.value;
        var dpVal = dp.value;
        var picFile = (_a = dp.files) === null || _a === void 0 ? void 0 : _a[0];
        var picFileURL = picFile ? URL.createObjectURL(picFile) : '';
        var userurlval_1 = userurl.value;
        var uniqPath_1 = "resume/".concat(userurlval_1.replace(/\s+/g, ','), "_cv.html");
        var resumeOutputVal = "\n      <h1>".concat(userNameVal, "</h1>\n      ").concat(picFileURL ? "<img src=\"".concat(picFileURL, "\" alt=\"images\">") : '', "\n      <h3>personal info:</h3>\n      <strong>name:</strong><p>").concat(userNameVal, "</p>\n      <strong>number</strong><p>").concat(userNumberVal, "</p>\n         <h3>skills:</h3>\n      <p>").concat(userSkillsVal, "</p>\n         <h3>education:</h3>\n      <p>").concat(userEducationVal, "</p>\n        <h3>experience:</h3>\n      <p>").concat(userexperienceVal, "</p>\n      ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutputVal);
        downloadLink.download = uniqPath_1;
        downloadLink.textContent = "download your resume";
        downloadLink.style.color = "white";
        downloadLink.style.fontSize = "20px";
        downloadLink.style.textDecoration = "none";
        downloadLink.style.textAlign = "center";
        var resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = "".concat(resumeOutputVal);
            resumeOutput.appendChild(downloadLink);
            // create pdf download button:
            var pdfButton = document.createElement("button");
            pdfButton.textContent = "download as pdf";
            pdfButton.addEventListener("click", function () {
                window.print();
            });
            resumeOutput.appendChild(pdfButton);
            // create shareable link:
            var ShareableLink = document.createElement("button");
            ShareableLink.textContent = "Shareable link";
            ShareableLink.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var data, dataVal, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            data = userurlval_1;
                            dataVal = uniqPath_1;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, navigator.clipboard.writeText(dataVal)];
                        case 2:
                            _a.sent();
                            alert("Shareable link copy to clipboard");
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            console.error("failed to copy link", error_1);
                            alert("failed to copy shareable link");
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
            resumeOutput.appendChild(ShareableLink);
        }
    }
});
