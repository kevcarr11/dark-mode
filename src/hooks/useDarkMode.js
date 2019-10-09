import { useLocalStorage } from './useLocalStorage';
import React, { useEffect } from "react";

function useDarkMode() {

  const [someValue, setSomeValue] = useLocalStorage(drkMode);

  useEffect(() => {
  <body className={`${someValue ? "dark-mode" : ""}`} />
  }, [someValue])
  
  return [someValue, setSomeValue]
}


export default useDarkMode
