document.addEventListener("DOMContentLoaded", () => {
  const pdfButton = document.getElementById("download-pdf");

  const opt = {
    margin: 0.2,
    filename: "Rodrigo_portafolio.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, useCORS: true, allowTaint: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  pdfButton.addEventListener("click", (e) => {
    e.preventDefault();

    const mainContent = document.querySelector("main");
    const tempContainer = document.createElement("div");
    const mainClone = mainContent.cloneNode(true);

    // Eliminar la sección de proyectos
    const projectsSection = mainClone.querySelector("#projects");
    if (projectsSection) projectsSection.remove();

    // Reducir márgenes y padding
    mainClone.querySelectorAll("section").forEach((section) => {
      section.style.margin = "0";
      section.style.padding = "0.2in 0";
    });

    // Forzar que "Acerca de Mí" comience en una página nueva
    const aboutSection = mainClone.querySelector("#about");
    if (aboutSection) {
      aboutSection.style.pageBreakBefore = "always";
    }

    tempContainer.appendChild(mainClone);

    html2pdf().set(opt).from(tempContainer).save();
  });
});
