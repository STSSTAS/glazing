const glazingData = [
    {
      id: "wood",
      slideImg: "src/assets/img/glazing/icons/1.png",
      linkClass: "tree_link",
      descr: "Wooden glazing",
      info: {
        // Данные холодного остекления
        cold: {
          constructionThickness: "42-58 мм",
          glazing: "polished glass (4 - 5 mm thick)",
          thermalInsulation: "0,07 м^2 * С/Вт",
          soundInsulation: "20-27 дБ",
          price: 120,
          img: "src/assets/img/glazing/img_cold.png",
        },
        // Данные теплого остекления
        warm: {
          constructionThickness: "58-78 мм",
          glazing: "single-chamber and double-chamber double-glazed windows",
          thermalInsulation: "0,63 - 1,05 м^2 * С/Вт",
          soundInsulation: "up to 5th grade",
          price: 130,
          img:"src/assets/img/glazing/img_warm.png",
        },
      },
    },
    {
      id: "Aluminium",
      slideImg: "src/assets/img/glazing/icons/2.png",
      linkClass: "aluminum_link",
      descr: "Aluminum glazing",
      info: {
        // Данные холодного остекления
        cold: {
          constructionThickness: "40-50 мм",
          glazing: "polished glass (4 - 5 mm thick)",
          thermalInsulation: "0,07 м^2 * С/Вт",
          soundInsulation: "20-27 дБ",
          price: 220,
          img:"src/assets/img/glazing/aluminum/cold.jpg",
        },
        // Данные теплого остекления
        warm: {
          constructionThickness: "60-68 мм",
          glazing: "single-chamber and double-chamber double-glazed windows",
          thermalInsulation: "0,63 - 1,05 м^2 * С/Вт",
          soundInsulation: "up to 5th grade",
          price: 230,
          img:"src/assets/img/glazing/aluminum/warm.jpg",
        },
      },
    },
  ];
  
  export default glazingData;
  