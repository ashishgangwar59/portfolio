import { useEffect, useState } from "react";

export default function TypingName() {
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "Ashish Kumar";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative">
      {displayedText}
      {displayedText.length < fullName.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
