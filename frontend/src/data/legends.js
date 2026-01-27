import messiImg from "../assets/legends/messi.jpg";
import iniestaImg from "../assets/legends/iniesta.jpg";
import ronaldinhoImg from "../assets/legends/ronaldihno.jpg";

import messiVideo from "../assets/legends/videos/messi.mp4";
import iniestaVideo from "../assets/legends/videos/iniesta.mp4";
import ronaldinhoVideo from "../assets/legends/videos/ronaldihno.mp4";

const legends = [
  {
    id: 1,
    name: "Lionel Messi",
    position: "Napadač",
    image: messiImg,
    video: messiVideo,
    description: "Najveći igrač u istoriji FC Barcelone.",
  },
  {
    id: 2,
    name: "Andres Iniesta",
    position: "Vezni igrač",
    image: iniestaImg,
    video: iniestaVideo,
    description: "Mozak Barcelonine igre i simbol tiki-taka fudbala.",
  },
  {
    id: 3,
    name: "Ronaldinho",
    position: "Napadač",
    image: ronaldinhoImg,
    video: ronaldinhoVideo,
    description:
      "Jedan od najtalentovanijih igrača ikada, simbol magije i radosti fudbala u Barceloni.",
  },
];

export default legends;
