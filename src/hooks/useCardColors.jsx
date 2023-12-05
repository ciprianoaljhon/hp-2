import React from "react";
import { RiHeartsLine } from "react-icons/ri";
import {
  FaMagic,
  FaEye,
  FaSkull,
  FaCompass,
  FaBook,
  FaQuestionCircle,
  FaRocket,
  FaUser,
  FaBalanceScale,
  FaFlask,
  FaLandmark,
  FaPlane,
  FaLaugh,
  FaTheaterMasks,
  FaRegLaugh,
  FaGavel,
} from "react-icons/fa";

const useCardColors = () => {
  const reactIconClass = "react-icon";

  const colors = {
    default: {
      icon: <RiHeartsLine className={reactIconClass} />,
      color: "",
    },
    romance: {
      icon: <RiHeartsLine color="#FF0000" className={reactIconClass} />,
      color: "#FFD2E5",
    },
    fantasy: {
      icon: <FaMagic color="#800080" className={reactIconClass} />,
      color: "#E6E6FA",
    },
    mystery: {
      icon: <FaEye color="#A9A9A9" className={reactIconClass} />,
      color: "#BFD3C1",
    },
    horror: {
      icon: <FaSkull color="#000000" className={reactIconClass} />,
      color: "#AFAFAF",
    },
    adventure: {
      icon: <FaCompass color="#DAA520" className={reactIconClass} />,
      color: "#8B4513",
    },
    fiction: {
      icon: <FaBook color="#0000FF" className={reactIconClass} />,
      color: "#ADD8E6",
    },
    "non-fiction": {
      icon: <FaBook color="#FFA500" className={reactIconClass} />,
      color: "#FFEBCD",
    },
    "mystery / thriller": {
      icon: <FaQuestionCircle color="#FF4500" className={reactIconClass} />,
      color: "#F0F8FF",
    },
    "science fiction (sci-fi)": {
      icon: <FaRocket color="#3CB371" className={reactIconClass} />,
      color: "#F5FFFA",
    },
    biography: {
      icon: <FaUser color="#4B0082" className={reactIconClass} />,
      color: "#F8F8FF",
    },
    philosophy: {
      icon: <FaBalanceScale color="#FF1493" className={reactIconClass} />,
      color: "#FFFACD",
    },
    science: {
      icon: <FaFlask color="#008000" className={reactIconClass} />,
      color: "#F0FFF0",
    },
    history: {
      icon: <FaLandmark color="#CD853F" className={reactIconClass} />,
      color: "#FAEBD7",
    },
    travel: {
      icon: <FaPlane color="#000080" className={reactIconClass} />,
      color: "#F5F5DC",
    },
    comedy: {
      icon: <FaLaugh color="#FFD700" className={reactIconClass} />,
      color: "#FFFFE0",
    },
    drama: {
      icon: <FaTheaterMasks color="#800000" className={reactIconClass} />,
      color: "#FFE4E1",
    },
    "graphic novels/comics": {
      icon: <FaRegLaugh color="#8B0000" className={reactIconClass} />,
      color: "#FAFAD2",
    },
    crime: {
      icon: <FaGavel color="#800000" className={reactIconClass} />,
      color: "#FFF0F5",
    },
  };

  return colors;
};

export default useCardColors;
