document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var profilePictureInput = document.getElementById("profile-picture");
    var profilePicturePreview = document.getElementById("profile-picture-preview");
    var profilePictureData = '';
    profilePictureInput.addEventListener("change", function (event) {
        var _a;
        var target = event.target;
        var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    profilePictureData = e.target.result;
                    profilePicturePreview.style.backgroundImage = "url(".concat(profilePictureData, ")");
                }
            };
            reader.readAsDataURL(file);
        }
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var experience = document.getElementById("experience").value;
        var skills = document.getElementById("skills").value;
        generateResume({ name: name, email: email, phone: phone, experience: experience, skills: skills, profilePicture: profilePictureData });
    });
    function generateResume(data) {
        resumeOutput.innerHTML = "\n            <h2>Resume</h2>\n            ".concat(data.profilePicture ? "<img src=\"".concat(data.profilePicture, "\" alt=\"Profile Picture\">") : '', "\n            <p><strong>Name:</strong> ").concat(data.name, "</p>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Contact:</strong> ").concat(data.phone, "</p>\n            <h3>Experience</h3>\n            <p>").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n        ");
        resumeOutput.style.display = 'block';
    }
});
