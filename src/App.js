import React, { useState } from "react";
import Menu from "./elements/menu";
import AppRoutes from "./Routes/Routes";

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div 
      data-theme={isDark ? 'dark' : 'light'}
      className={`${isDark ? 'bg-[#121217] text-white' : 'bg-white text-[#121217]'}`}
    >
      <Menu isDark={isDark} setIsDark={setIsDark} />

      <AppRoutes isDark={isDark} />

    </div>
  );
}

export default App;
