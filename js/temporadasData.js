// ===== Westworld: API local de temporadas =====
// Fuentes principales (directores/guiones/fechas por episodio, datos por temporada y portadas):
// - Lista de episodios (tabla por temporada): https://en.wikipedia.org/wiki/List_of_Westworld_episodes

const temporada1 = {
  id: 1,
  titulo: "The Maze",
  anio: 2016,
  numEpisodios: 10,
  caratula: "./img/posters/westworld-season1.jpg",
  creadores: ["Jonathan Nolan", "Lisa Joy"],
  linkTrailer: "https://www.youtube.com/embed/kEkZdgWu7mM?si=tTaMTQW9GXPK-z7y",
  musica: "Ramin Djawadi",
  cadena: "HBO",
  duracionTipica: "≈ 55–70 min",
  resumen:
    "Westworld: Un parque temático futurista ambientado en el lejano oeste permite a los visitantes cumplir hasta sus fantasías mas oscuras.",
  episodios: [
    {
      nro: 1,
      titulo: "The Original",
      director: "Jonathan Nolan",
      guion: [
        "Historia: Jonathan Nolan, Lisa Joy, Michael Crichton",
        "Teleplay: Jonathan Nolan, Lisa Joy",
      ],
      estreno: "2016-10-02",
      duracionMin: 68,
      sinopsis:
        "Se introduce el parque; anomalías en los anfitriones revelan el inicio de un despertar.",
    },
    {
      nro: 2,
      titulo: "Chestnut",
      director: "Richard J. Lewis",
      guion: ["Jonathan Nolan", "Lisa Joy"],
      estreno: "2016-10-09",
      duracionMin: 60,
      sinopsis:
        "Nuevos huéspedes llegan al parque; comienzan a verse efectos de la actualización ‘Reveries’.",
    },
    {
      nro: 3,
      titulo: "The Stray",
      director: "Neil Marshall",
      guion: ["Daniel T. Thomsen", "Lisa Joy"],
      estreno: "2016-10-16",
      duracionMin: 60,
      sinopsis:
        "Un anfitrión desaparecido y pistas sobre Wyatt complican las operaciones del parque.",
    },
    {
      nro: 4,
      titulo: "Dissonance Theory",
      director: "Vincenzo Natali",
      guion: ["Ed Brubaker", "Jonathan Nolan"],
      estreno: "2016-10-23",
      duracionMin: 60,
      sinopsis:
        "El Hombre de Negro persigue el laberinto; Maeve comienza a cuestionar su realidad.",
    },
    {
      nro: 5,
      titulo: "Contrapasso",
      director: "Jonny Campbell",
      guion: ["Historia: Dominic Mitchell, Lisa Joy", "Teleplay: Lisa Joy"],
      estreno: "2016-10-30",
      duracionMin: 60,
      sinopsis:
        "Pariah y El Lazo revelan otra capa del juego; Dolores da un paso hacia la autonomía.",
    },
    {
      nro: 6,
      titulo: "The Adversary",
      director: "Frederick E.O. Toye",
      guion: ["Halley Gross", "Jonathan Nolan"],
      estreno: "2016-11-06",
      duracionMin: 60,
      sinopsis:
        "Bernard investiga anomalías internas mientras Maeve acelera su despertar.",
    },
    {
      nro: 7,
      titulo: "Trompe L'Oeil",
      director: "Frederick E.O. Toye",
      guion: ["Halley Gross", "Jonathan Nolan"],
      estreno: "2016-11-13",
      duracionMin: 60,
      sinopsis:
        "Se revelan identidades ocultas y cambia el equilibrio de poder en Delos.",
    },
    {
      nro: 8,
      titulo: "Trace Decay",
      director: "Stephen Williams",
      guion: ["Charles Yu", "Lisa Joy"],
      estreno: "2016-11-20",
      duracionMin: 60,
      sinopsis:
        "Cubrir huellas tiene costo; los hosts recuerdan más de lo que deberían.",
    },
    {
      nro: 9,
      titulo: "The Well-Tempered Clavier",
      director: "Michelle MacLaren",
      guion: ["Dan Dietz", "Katherine Lingenfelter"],
      estreno: "2016-11-27",
      duracionMin: 60,
      sinopsis:
        "Las líneas temporales convergen; el ‘laberinto’ adquiere nuevo significado.",
    },
    {
      nro: 10,
      titulo: "The Bicameral Mind",
      director: "Jonathan Nolan",
      guion: ["Lisa Joy", "Jonathan Nolan"],
      estreno: "2016-12-04",
      duracionMin: 69,
      sinopsis:
        "Clímax: el plan de Ford culmina y los anfitriones toman el control.",
    },
  ],
};

const temporada2 = {
  id: 2,
  titulo: "The Door",
  anio: 2018,
  numEpisodios: 10,
  caratula: "./img/posters/westworld-season2.jpg",
  creadores: ["Jonathan Nolan", "Lisa Joy"],
  linkTrailer: "https://www.youtube.com/embed/fYaR2Xu2SG8?si=MxbDTuduc42OD6Ew",
  musica: "Ramin Djawadi",
  cadena: "HBO",
  duracionTipica: "≈ 55–75 min (final extendido)",
  resumen:
    "Tras encontrar el centro del Laberinto, los anfitriones se rebelan contra sus captores mientras buscan un nuevo propósito.",
  episodios: [
    {
      nro: 1,
      titulo: "Journey into Night",
      director: "Richard J. Lewis",
      guion: ["Lisa Joy", "Roberto Patino"],
      estreno: "2018-04-22",
      duracionMin: 70,
      sinopsis:
        "Semanas tras la masacre, se libra una guerra; Bernard y Charlotte cooperan a la fuerza.",
    },
    {
      nro: 2,
      titulo: "Reunion",
      director: "Vincenzo Natali",
      guion: ["Carly Wray", "Jonathan Nolan"],
      estreno: "2018-04-29",
      duracionMin: 60,
      sinopsis:
        "Flashbacks muestran la financiación del parque; en el presente, Dolores reúne aliados.",
    },
    {
      nro: 3,
      titulo: "Virtù e Fortuna",
      director: "Richard J. Lewis",
      guion: ["Roberto Patino", "Ron Fitzgerald"],
      estreno: "2018-05-06",
      duracionMin: 59,
      sinopsis:
        "Se revelan otros parques; las facciones chocan por el control de Peter Abernathy.",
    },
    {
      nro: 4,
      titulo: "The Riddle of the Sphinx",
      director: "Lisa Joy",
      guion: ["Gina Atwater", "Jonathan Nolan"],
      estreno: "2018-05-13",
      duracionMin: 71,
      sinopsis:
        "Experimentos de inmortalidad exponen el proyecto secreto de Delos.",
    },
    {
      nro: 5,
      titulo: "Akane no Mai",
      director: "Craig Zobel",
      guion: ["Dan Dietz"],
      estreno: "2018-05-20",
      duracionMin: 59,
      sinopsis: "Maeve entra a Shōgunworld y descubre otro reflejo del parque.",
    },
    {
      nro: 6,
      titulo: "Phase Space",
      director: "Tarik Saleh",
      guion: ["Carly Wray"],
      estreno: "2018-05-27",
      duracionMin: 59,
      sinopsis:
        "Realidad y simulación se entrecruzan; los bandos se reagrupan.",
    },
    {
      nro: 7,
      titulo: "Les Écorchés",
      director: "Nicole Kassell",
      guion: ["Jordan Goldberg", "Ron Fitzgerald"],
      estreno: "2018-06-03",
      duracionMin: 59,
      sinopsis:
        "La ‘Cradle’ revela su propósito; aumentan las pérdidas en ambos frentes.",
    },
    {
      nro: 8,
      titulo: "Kiksuya",
      director: "Uta Briesewitz",
      guion: ["Carly Wray", "Dan Dietz"],
      estreno: "2018-06-10",
      duracionMin: 60,
      sinopsis:
        "Akecheta narra la historia de Ghost Nation y del ‘Valley Beyond’.",
    },
    {
      nro: 9,
      titulo: "Vanishing Point",
      director: "Stephen Williams",
      guion: ["Roberto Patino"],
      estreno: "2018-06-17",
      duracionMin: 60,
      sinopsis:
        "El pasado del Hombre de Negro sale a la luz con consecuencias fatales.",
    },
    {
      nro: 10,
      titulo: "The Passenger",
      director: "Frederick E.O. Toye",
      guion: ["Jonathan Nolan", "Lisa Joy"],
      estreno: "2018-06-24",
      duracionMin: 90,
      sinopsis:
        "Convergencia en la Forge; decisiones definitivas para humanos y anfitriones.",
    },
  ],
};

const temporada3 = {
  id: 3,
  titulo: "The New World",
  anio: 2020,
  numEpisodios: 8,
  caratula: "./img/posters/westworld-season3.jpg",
  creadores: ["Jonathan Nolan", "Lisa Joy"],
  linkTrailer: "https://www.youtube.com/embed/YEiTVgwJQuM?si=6MFwzkl4SOOaVWyf",
  musica: "Ramin Djawadi",
  cadena: "HBO",
  duracionTipica: "≈ 55–75 min",
  resumen:
    "Después de los eventos de la segunda temporada, Dolores entabla una relación con Caleb y aprende cómo se trata a los robots en el mundo real.",
  episodios: [
    {
      nro: 1,
      titulo: "Parce Domine",
      director: "Jonathan Nolan",
      guion: ["Lisa Joy", "Jonathan Nolan"],
      estreno: "2020-03-15",
      duracionMin: 70,
      sinopsis:
        "Dolores sale al mundo real y apunta a Rehoboam; Bernard vive oculto.",
    },
    {
      nro: 2,
      titulo: "The Winter Line",
      director: "Richard J. Lewis",
      guion: ["Matthew Pitts", "Lisa Joy"],
      estreno: "2020-03-22",
      duracionMin: 60,
      sinopsis:
        "Maeve despierta en una simulación; Bernard retorna al parque por respuestas.",
    },
    {
      nro: 3,
      titulo: "The Absence of Field",
      director: "Amanda Marsalis",
      guion: ["Denise Thé"],
      estreno: "2020-03-29",
      duracionMin: 60,
      sinopsis: "Charlotte lucha con su identidad; Caleb se alía con Dolores.",
    },
    {
      nro: 4,
      titulo: "The Mother of Exiles",
      director: "Paul Cameron",
      guion: ["Jordan Goldberg", "Lisa Joy"],
      estreno: "2020-04-05",
      duracionMin: 70,
      sinopsis:
        "Copias estratégicas cambian el tablero; se intensifica el choque con Serac.",
    },
    {
      nro: 5,
      titulo: "Genre",
      director: "Anna Foerster",
      guion: ["Karrie Crouse", "Jonathan Nolan"],
      estreno: "2020-04-12",
      duracionMin: 60,
      sinopsis:
        "Un fármaco altera percepciones mientras se publica el ‘plan’ de Rehoboam.",
    },
    {
      nro: 6,
      titulo: "Decoherence",
      director: "Jennifer Getzinger",
      guion: ["Suzanne Wrubel", "Lisa Joy"],
      estreno: "2020-04-19",
      duracionMin: 60,
      sinopsis:
        "Personajes clave enfrentan sus pasados y consecuencias del caos global.",
    },
    {
      nro: 7,
      titulo: "Passed Pawn",
      director: "Helen Shaver",
      guion: ["Gina Atwater"],
      estreno: "2020-04-26",
      duracionMin: 60,
      sinopsis:
        "El origen de Caleb reconfigura la lucha por el control del sistema.",
    },
    {
      nro: 8,
      titulo: "Crisis Theory",
      director: "Jennifer Getzinger",
      guion: ["Denise Thé", "Jonathan Nolan"],
      estreno: "2020-05-03",
      duracionMin: 75,
      sinopsis:
        "Final: el plan de Dolores/Caleb redefine el mundo y su futuro incierto.",
    },
  ],
};

const temporada4 = {
  id: 4,
  titulo: "The Choice",
  anio: 2022,
  numEpisodios: 8,
  caratula: "./img/posters/westworld-season4.jpg",
  creadores: ["Jonathan Nolan", "Lisa Joy"],
  linkTrailer: "https://www.youtube.com/embed/Uc1COwFI6SI?si=jwuJFTlg3vvbzvxK",
  musica: "Ramin Djawadi",
  cadena: "HBO",
  duracionTipica: "≈ 50–60 min",
  resumen:
    "Siete años después de la guerra, la humanidad parece ser libre aunque algunos sospechan que intentan recuperar el control de los humanos.",
  episodios: [
    {
      nro: 1,
      titulo: "The Auguries",
      director: "Richard J. Lewis",
      guion: ["Lisa Joy", "Will Soodik"],
      estreno: "2022-06-26",
      duracionMin: 52,
      sinopsis:
        "Años después, nuevas identidades y un plan oculto reactivan el conflicto.",
    },
    {
      nro: 2,
      titulo: "Well Enough Alone",
      director: "Craig William Macneill",
      guion: ["Matthew Pitts", "Christina Ham"],
      estreno: "2022-07-03",
      duracionMin: 48,
      sinopsis: "Una red silenciosa de sustituciones humanas sale a la luz.",
    },
    {
      nro: 3,
      titulo: "Années Folles",
      director: "Hanelle M. Culpepper",
      guion: ["Kevin Lau", "Suzanne Wrubel"],
      estreno: "2022-07-10",
      duracionMin: 55,
      sinopsis:
        "Temperance espeja al viejo parque mientras Bernard ejecuta ‘el único camino’.",
    },
    {
      nro: 4,
      titulo: "Generation Loss",
      director: "Paul Cameron",
      guion: ["Kevin Lau", "Suzanne Wrubel"],
      estreno: "2022-07-17",
      duracionMin: 50,
      sinopsis:
        "Revelaciones sobre Caleb y un giro temporal alteran la guerra.",
    },
    {
      nro: 5,
      titulo: "Zhuangzi",
      director: "Craig William Macneill",
      guion: ["Wes Humphrey", "Lisa Joy"],
      estreno: "2022-07-24",
      duracionMin: 59,
      sinopsis:
        "El libre albedrío tambalea en una ciudad escrita como narrativa.",
    },
    {
      nro: 6,
      titulo: "Fidelity",
      director: "Andrew Seklir",
      guion: ["Jordan Goldberg", "Alli Rock"],
      estreno: "2022-07-31",
      duracionMin: 57,
      sinopsis:
        "Lealtad y repetición: Caleb corre entre versiones de sí mismo.",
    },
    {
      nro: 7,
      titulo: "Metanoia",
      director: "Meera Menon",
      guion: ["Desa Larkin-Boutte", "Denise Thé"],
      estreno: "2022-08-07",
      duracionMin: 52,
      sinopsis:
        "Asaltos a la Torre y a Olympiad; se aproxima el final del juego.",
    },
    {
      nro: 8,
      titulo: "Que Será, Será",
      director: "Richard J. Lewis",
      guion: ["Alison Schapker", "Jonathan Nolan"],
      estreno: "2022-08-14",
      duracionMin: 60,
      sinopsis:
        "Extinción y última oportunidad: una nueva ‘prueba’ en el Sublime.",
    },
  ],
};

// Colección completa y helpers sencillos
const westworld = [temporada1, temporada2, temporada3, temporada4];
