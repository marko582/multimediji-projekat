import messiImg from "../assets/legends/messi.jpg";
import xaviImg from "../assets/legends/xavi.jpg";
import ronaldinhoImg from "../assets/legends/ronaldihno.jpg"

import messiVideo from "../assets/legends/videos/messi.mp4";
import xaviVideo from "../assets/legends/videos/messi.mp4";
import ronaldinhoVideo from "../assets/legends/videos/messi.mp4";

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
    name: "Xavi Hernandez",
    position: "Vezni igrač",
    image: xaviImg,
    video: xaviVideo,
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
