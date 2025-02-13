document.addEventListener("DOMContentLoaded", () => {
    const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

    if (resumeData) {
         
        (document.getElementById("phone") as HTMLElement).textContent = `📞 ${resumeData.phone}`;
        const linkedin = document.getElementById("linkedin")?.querySelector("a") as HTMLAnchorElement;
        linkedin.textContent = resumeData.linkedin;
        linkedin.href = resumeData.linkedin;
        (document.getElementById("email") as HTMLElement).textContent = `📧 ${resumeData.email}`;

        
        (document.getElementById("name") as HTMLElement).textContent = resumeData.name;
        (document.getElementById("role") as HTMLElement).textContent = resumeData.role;
        (document.getElementById("about") as HTMLElement).textContent = resumeData.about;

     
        const skillsList = document.getElementById("skills-list") as HTMLElement;
        resumeData.skills.split(",").forEach((skill: string) => {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });

     
        const toolsList = document.getElementById("tools-list") as HTMLElement;
        resumeData.tools.split(",").forEach((tool: string) => {
            const li = document.createElement("li");
            li.textContent = tool.trim();
            toolsList.appendChild(li);
        });

         
        const experienceList = document.getElementById("experience-list") as HTMLElement;
        resumeData.experience.split(";").forEach((exp: string) => {
            const p = document.createElement("p");
            p.textContent = exp.trim();
            experienceList.appendChild(p);
        });

        
        const educationList = document.getElementById("education-list") as HTMLElement;
        resumeData.education.split(";").forEach((edu: string) => {
            const p = document.createElement("p");
            p.textContent = edu.trim();
            educationList.appendChild(p);
        });
    }
});
