document
  .getElementById("uniqueName")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion:



    
    
    const dp = document.getElementById("dp") as HTMLInputElement;
    const userName = document.getElementById("name") as HTMLInputElement;
    const userurl = document.getElementById("userUrl") as HTMLInputElement;
    const userNumber = document.getElementById("number") as HTMLInputElement;
    const skills = document.getElementById("skills") as HTMLTextAreaElement;
    const education = document.getElementById("education") as HTMLTextAreaElement;
    const experience = document.getElementById("experience") as HTMLTextAreaElement;
    const btn = document.getElementById("btn") as HTMLButtonElement;

    

    if (
        userurl &&
        dp &&
      userName &&
      userNumber &&
      skills &&
      education &&
      experience
    ) {
      const userNameVal = userName.value;
      const userNumberVal = userNumber.value;
      const userSkillsVal = skills.value;
      const userEducationVal = education.value;
      const userexperienceVal = experience.value;
     
      const dpVal = dp.value;

      const picFile=  dp.files?.[0];
      const picFileURL=  picFile?URL.createObjectURL(picFile):'';


      

      const resumeOutputVal = `
      <h1>${userNameVal}</h1>
      ${picFileURL? `<img src="${picFileURL}" alt="images">`:''}
      <h3>personal info:</h3>
      <strong>name:</strong><p>${userNameVal}</p>
      <strong>number</strong><p>${userNumberVal}</p>
         <h3>skills:</h3>
      <p>${userSkillsVal}</p>
         <h3>education:</h3>
      <p>${userEducationVal}</p>
        <h3>experience:</h3>
      <p>${userexperienceVal}</p>
      `;
      

        const userurlval = userurl.value;
        const uniqPath= `resume/${userurlval.replace(/\s+/g, ',')}_cv.html`

        const downloadLink= document.createElement("a");
        downloadLink.href="data:text/html;charset=utf-8," + encodeURIComponent(resumeOutputVal)
        downloadLink.download=uniqPath;
        downloadLink.textContent="download your resume"
        downloadLink.style.color="white"
        downloadLink.style.fontSize="20px"
        downloadLink.style.textDecoration="none"
        downloadLink.style.textAlign="center"

  



        const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;

        if (resumeOutput) {
        resumeOutput.innerHTML = `${resumeOutputVal}`
        resumeOutput.appendChild(downloadLink)
        // create pdf download button:
        const pdfButton = document.createElement("button");
        pdfButton.textContent="download as pdf";
        pdfButton.addEventListener("click",()=>{
            window.print()
        })
        resumeOutput.appendChild(pdfButton)
          // create shareable link:
        const ShareableLink = document.createElement("button");
        ShareableLink.textContent="Shareable link";
        

        ShareableLink.addEventListener("click", async()=>{
          const data=userurlval
          const dataVal=uniqPath
        
        try{
          await navigator.clipboard.writeText(dataVal)
          alert("Shareable link copy to clipboard")
        }
        catch(error){
          console.error("failed to copy link", error)
          alert("failed to copy shareable link")
        }})
        resumeOutput.appendChild(ShareableLink)
        
        
    }
  }});
