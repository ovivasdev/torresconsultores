$(function () {
  function makeSlug(name) {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ñ/g, "n")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  }

  var attorneys = [
    {
      name: "Anthony Giancarlo Torres Quiroz",
      role: "Abogado y Socio Fundador",
      img: "assets/img/team/team_2_1.jpg",
      description: "Con una sólida formación en Derecho por la UTP y maestría en Ciencias Penales de la Universidad de San Martín de Porres, lidero como socio fundador del Estudio de Abogados Torres Consultores & Asociados S.A.C. Mi enfoque está en la investigación penal, fortaleciendo la defensa y estrategia legal con una meticulosa atención al detalle. Realicé diversos estudios académicos a nivel nacional e internacional en Lavado de Activos, Crimen Organizado e Inteligencia Artificial. La colaboración y el compromiso con la excelencia definen nuestra práctica, asegurando resultados óptimos para nuestros clientes.",
    },
    {
      name: "Hugo Rodolfo Velasquez Zavaleta",
      role: "Abogado",
      img: "assets/img/team/team_2_2.jpg",
      description: "Abogado con más de 20 años de experiencia en el sector público y privado, especializado en procesos judiciales y arbitrales. Posee Maestrías en Derecho Civil y Derecho Constitucional, y una destacada especialización en Argumentación Jurídica, Derecho Procesal, Derecho Constitucional, Derecho Administrativo, Contratación Pública y Procedimientos Sancionadores. Con una trayectoria sólida y un enfoque en proporcionar soluciones legales integrales y efectivas, se destaca por su compromiso con la excelencia y su capacidad para manejar casos complejos con profesionalismo y dedicación.",
    },
    {
      name: "Helena Ursula Murguia Garcia",
      role: "Asesora Legal Externa",
      img: "assets/img/team/team_2_6.jpg",
      description: "Abogada y Magíster en Derecho de la Empresa por la Universidad Peruana de Ciencias Aplicadas, con más de 15 años de experiencia en arbitrajes, derecho administrativo y contratación pública. Ha asesorado a entidades públicas y privadas en la elaboración y revisión de contratos, así como en la defensa y conducción de procesos arbitrales, garantizando estrategias legales sólidas y efectivas. Su trayectoria incluye la gestión de procedimientos complejos en el sector público y privado, siempre con un enfoque orientado a la prevención de riesgos y a la protección de los intereses de sus clientes.",
    },
    {
      name: "Jean Pierre Franklin Curi Carnero",
      role: "Abogado",
      img: "assets/img/team/team_2_3.jpg",
      description: "Abogado con una sólida formación en Ciencias Penales por la Universidad de San Martín de Porres, donde también obtuvo una Maestría en la misma disciplina. Cuenta con un Bachillerato en Derecho, especializado en Derecho Penal, y un curso de posgrado en Derecho Probatorio por la Universidad de Castilla, España. Posee amplios conocimientos en el Nuevo Código Procesal Penal y la Ley N° 30077 - Ley Contra el Crimen Organizado. Se destaca por su iniciativa y capacidad profesional para resolver problemas de manera eficiente, aportando soluciones innovadoras y efectivas en el ámbito legal.",
    },
    {
      name: "Lorely Antoanette Perez Vare",
      role: "Bachiller",
      img: "/assets/img/team/team_2_4.jpg",
      description: "Bachiller en Derecho por la Universidad Nacional Federico Villarreal, con experiencia como Secigrista en la Unidad de Recepción y Saneamiento de Activos del Programa Nacional de Bienes Incautados (PRONABI). Desempeñó prácticas preprofesionales en la Fiscalía Provincial Especializada en Delitos de Corrupción de Funcionarios de Lima, adquiriendo valiosa experiencia en el manejo de casos de corrupción. Destaca por su compromiso con la legalidad y la justicia, aplicando rigurosos conocimientos académicos y habilidades prácticas en cada desafío profesional.",
    },
    {
      name: "Jimena Alejandra Rodriguez Villacorta",
      role: "Asistente",
      img: "assets/img/team/team_2_5.jpg",
      description: "Estudiante de Derecho en décimo ciclo en la Pontificia Universidad Católica del Perú, con especialización en Derecho Penal. Cuenta con experiencia en Derecho Procesal Civil, habiendo trabajado como asistente legal en la redacción de escritos judiciales, gestión de expedientes y análisis jurídico. Se desempeñó como asistente de docencia en Responsabilidad Civil, colaborando en evaluaciones y preparación académica. Como miembro del Equipo de Derechos Humanos de la PUCP, dirigió la Comisión de Recursos Humanos, consolidando su compromiso con los derechos humanos y la ética profesional.",
    },
  ].map(function (p) {
    p.slug = makeSlug(p.name);
    return p;
  });

  console.log(attorneys);

  function getSlugFromHash() {
    return (window.location.hash || "").replace(/^#/, "").trim();
  }

  function renderAttorney(att) {
    if (!att) window.location.href = "staff-de-abogados.html";
    $(".team-about_title").html(att.name);
    $(".team-about_desig").html(att.role);
    $(".team-about_text").html(att.description);
    $(".team-about_img").attr("src", att.img);
  }

  function findAttorneyBySlug(slug) {
    return attorneys.find(function (p) { return p.slug === slug; });
  }

  var currentSlug = getSlugFromHash();
  renderAttorney(findAttorneyBySlug(currentSlug));

  $(window).on("hashchange", function () {
    var slug = getSlugFromHash();
    renderAttorney(findAttorneyBySlug(slug));
  });
});