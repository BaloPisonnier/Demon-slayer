let questions = [
  {
    numb: 1,
    question: "Quel est le souffle de Tanjirō ?",
    answer: "C. Souffle de l'eau",
    options: [
      "A. Souffle de la brume",
      "B. Souffle de la terre",
      "C. Souffle de l'eau",
      "D. Souffle de la bête",
    ],
  },
  {
    numb: 2,
    question: "Qui a été transformé en démon dans la famille de Tanjirō ?",
    answer: "A. Nezuko Kamado",
    options: [
      "A. Nezuko Kamado",
      "B. Inosuke Hashibira",
      "C. Obanai Igoro",
      "D. Mitsuri Kanroji",
    ],
  },
  {
    numb: 3,
    question: "Avec quel mouvement Tanjirō combat le demon du Marais ?",
    answer: "B. Souffle de l'Eau 8e Mouvement",
    options: [
      "A. Souffle de l'Eau 3e Mouvement",
      "B. Souffle de l'Eau 8e Mouvement",
      "C. Souffle de l'Eau 7e Mouvement",
      "D. Souffle de l'Eau 5e Mouvement",
    ],
  },
  {
    numb: 4,
    question: "Qui est la 11e lune démoniaque ?",
    answer: "B. Rui",
    options: ["A. Doma", "B. Rui", "C. Rokuro", "D. Akaza"],
  },
  {
    numb: 5,
    question: "Quel est le premier démon affronté par Tanjirō ?",
    answer: "A. Le démon du temple",
    options: [
      "A. Le démon du temple",
      "B. Le démon de la maison tambour",
      "C. Le démon du Marai",
      "D. Muzan",
    ],
  },
  {
    numb: 6,
    question: "Le père de Tanjirō se nomme ?",
    answer: "B. Tanjûrō",
    options: ["A. Tanjurō", "B. Tanjûrō", "C. Tonjuro", "D. Tanjunō"],
  },
  {
    numb: 7,
    question: "Pourquoi Mitsuri est devenu un pilier ?",
    answer: "C. Pour trouver l'homme de sa vie",
    options: [
      "A. Pour protéger les humains",
      "B. Pour tuer les démons",
      "C. Pour trouver l'homme de sa vie",
      "D. Pour se vanger",
    ],
  },
  {
    numb: 8,
    question: "Quel démon a massacré la famille du protagniste ?",
    answer: "C. Muzan",
    options: ["A. Doma", "B. Genya", "C. Muzan", "D. Akaza"],
  },
  {
    numb: 9,
    question:
      "Quel signe témoigne de l'évolution de Tanjirō en tant que pourfonfeur ?",
    answer: "C. Sa cicatrice",
    options: [
      "A. Son sabre",
      "B. Son kimono",
      "C. Sa cicatrice",
      "D. Son pouvoir surnaturel",
    ],
  },
  {
    numb: 10,
    question:
      "Un duo de personnage posséde le même symbole sur leurs vêtements ?",
    answer: "B. Giyu et Sabito",
    options: [
      "A. Rengoku et Zenistu",
      "B. Giyu et Sabito",
      "C. Tamayo et Kie",
      "D. Genya et Sanemi",
    ],
  },
  {
    numb: 11,
    question: "Quel autre personnage possède le même odorat que Tanjirō ?",
    answer: "D. Sakonji Urokodaki",
    options: [
      "A. Tokito Muichiro",
      "B. Nezuko Kamado",
      "C. Obanie Iguro",
      "D. Sakonji Urokodaki",
    ],
  },
  {
    numb: 12,
    question: "Muzan ne tolère pas qu'on rappelle qu'il a..?",
    answer: "A. Unvisge pâle",
    options: [
      "A. Un visge pâle",
      "B. Un chapeau blanc",
      "C. Un air de fritôche",
      "D. Un pantalon blanc",
    ],
  },
  {
    numb: 13,
    question: "Sur base de quoi sont desinés les masques des pourfondeurs ?",
    answer: "A. Leurs visages",
    options: [
      "A. Leurs visages",
      "B. Les chats",
      "C. Leurs souffles",
      "D. Les renards",
    ],
  },
  {
    numb: 14,
    question: "Quel est le souffle le plus puissant de Demon Slayer ?",
    answer: "C. Souffle du soleil",
    options: [
      "A. Souffle de la brume",
      "B. Souffle de la terre",
      "C. Souffle du soleil",
      "D. Souffle de la bête",
    ],
  },
  {
    numb: 15,
    question: "à quel endroit se déroule la séléction final ?",
    answer: "B. Mont Fujikasane",
    options: [
      "A. Mont Natagumo",
      "B. Mont Fujikasane",
      "C. Mont Ujikasane",
      "D. Mont Nagomoto",
    ],
  },
  {
    numb: 16,
    question: "Pourquoi Inosuke porte t-il une tête de sanglier ?",
    answer: "A. Parce qu'il a été élevé par eux",
    options: [
      "A. Parce qu'il a été élevé par eux",
      "B. Parce qu'il les aime",
      "C. Il n'a pas d'autre masque",
      "D. Il voulait devenir un sanglier",
    ],
  },
  {
    numb: 17,
    question: "Quel est le souffle de Kanao ?",
    answer: "B. Souffle de la fleur",
    options: [
      "A. Souffle de la brume",
      "B. Souffle de la fleur",
      "C. Souffle de l'eau",
      "D. Souffle de la bête",
    ],
  },
  {
    numb: 18,
    question: "Dans quel domaine a était recueillie Kanao ?",
    answer: "A. Le domaine des papillons",
    options: [
      "A. Le domaine des papillons",
      "B. Le domaine des pavillons",
      "C. Le domaine des padillons",
      "D. Le domaine des papilons",
    ],
  },
  {
    numb: 19,
    question: "Où se situe l'endroit où vit Urokodaki ?",
    answer: "A. Mont Sagiri",
    options: [
      "A. Mont Sagiri",
      "B. Mont Sagori",
      "C. Mont Fujikasane",
      "D. Mont Sakonji",
    ],
  },
  {
    numb: 20,
    question:
      "Juste avant que Tanjirō ne parte pour son voyage en tant que pourfendeur de démons, Sakonji redresse les vêtements de son élève et lui dit :",
    answer: "A. Adieu",
    options: ["A. Adieu", "B. Courage", "C. Au revoir", "D. Bonne chance"],
  },
];

let imgTable = [
  {
    number: 1,
    img: "img/Zenitsu_anime_design.webp",
  },
  {
    number: 2,
    img: "img/Tengen_anime.webp",
  },
  {
    number: 3,
    img: "img/Nezuko_anime_design.webp",
  },
  {
    number: 4,
    img: "img/Sanemi_anime_design.webp",
  },
  {
    number: 5,
    img: "img/Nezuko_anime_design.webp",
  },
  {
    number: 6,
    img: "img/Muzan_Kibutsuji_anime.webp",
  },
  {
    number: 7,
    img: "img/Inosuke_anime_design.webp",
  },
  {
    number: 8,
    img: "img/Shinobu_anime.webp",
  },
  {
    number: 9,
    img: "img/Obanai_anime.webp",
  },
  {
    number: 10,
    img: "img/Muichiro_anime.webp",
  },
  {
    number: 11,
    img: "img/Mitsuri_anime.webp",
  },
  {
    number: 12,
    img: "img/Kyojuro_anime.webp",
  },
  {
    number: 13,
    img: "img/Kanao_anime.webp",
  },
  {
    number: 14,
    img: "img/Gyomei_anime.webp",
  },
  {
    number: 15,
    img: "img/Giyuu_anime.webp",
  },
  {
    number: 16,
    img: "img/Sanemi_anime_design.webp",
  },
  {
    number: 17,
    img: "img/Tanjirou_anime_design.webp",
  },
];
