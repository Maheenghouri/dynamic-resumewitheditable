document.addEventListener("DOMContentLoaded", () => {
     
    const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");

    if (resumeData) {
       
        document.getElementById("phone").textContent = `📞 ${resumeData.phone}`;
        const linkedin = document.getElementById("linkedin").querySelector("a");
        linkedin.textContent = resumeData.linkedin;
        linkedin.href = resumeData.linkedin;

        document.getElementById("email").textContent = `📧 ${resumeData.email}`;
        const website = document.getElementById("website").querySelector("a");
        website.textContent = resumeData.website;
        website.href = resumeData.website;

        
        document.getElementById("name").textContent = resumeData.name;
        document.getElementById("role").textContent = resumeData.role;

        
        document.getElementById("about").textContent = resumeData.about;
 
        const skillsList = document.getElementById("skills-list");
        skillsList.innerHTML = "";  
        resumeData.skills.split(",").forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });

        
        const toolsList = document.getElementById("tools-list");
        toolsList.innerHTML = "";  
        resumeData.tools.split(",").forEach(tool => {
            const li = document.createElement("li");
            li.textContent = tool.trim();
            toolsList.appendChild(li);
        });

         
        const workExperienceDiv = document.getElementById("work-experience");
        workExperienceDiv.innerHTML = "";  
        resumeData.experience.split(";").forEach(exp => {
            const p = document.createElement("p");
            p.textContent = exp.trim();
            workExperienceDiv.appendChild(p);
        });

        
        const educationDiv = document.getElementById("education");
        educationDiv.innerHTML = "";  gb
        resumeData.education.split(";").forEach(edu => {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${edu.split("-")[0].trim()}</strong><br>${edu.split("-")[1]?.trim() || ""}`;
            educationDiv.appendChild(p);
        });
    }
});
