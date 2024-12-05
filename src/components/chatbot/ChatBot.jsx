/*eslint-disable*/
import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    const script = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    script.async = true;
    script.src = "https://embed.tawk.to/67494d772480f5b4f5a5835c/1idr5d6ps";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    if (s0.parentNode) {
      s0.parentNode.insertBefore(script, s0);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  return null;
};

export default Chatbot;

//'https://embed.tawk.to/67494d772480f5b4f5a5835c/1idr5d6ps
