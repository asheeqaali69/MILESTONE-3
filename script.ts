interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
    profilePicture: string;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    const profilePictureInput = document.getElementById("profile-picture") as HTMLInputElement;
    const profilePicturePreview = document.getElementById("profile-picture-preview") as HTMLDivElement;
    let profilePictureData: string = '';

    profilePictureInput.addEventListener("change", function(event: Event) {
        const target = event.target as HTMLInputElement;
        const file: File | undefined = target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e: ProgressEvent<FileReader>) {
                if (e.target?.result) {
                    profilePictureData = e.target.result as string;
                    profilePicturePreview.style.backgroundImage = `url(${profilePictureData})`;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    form.addEventListener("submit", function(event: Event) {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        generateResume({name, email, phone, experience, skills, profilePicture: profilePictureData});
    });

    function generateResume(data: ResumeData): void {
        resumeOutput.innerHTML = `
            <h2>Resume</h2>
            ${data.profilePicture ? `<img src="${data.profilePicture}" alt="Profile Picture">` : ''}
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Contact:</strong> ${data.phone}</p>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Skills</h3>
            <p>${data.skills}</p>
        `;
        resumeOutput.style.display = 'block';
    }
});