import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Ваш заголовок */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Ваш підвал */}
      </footer>
    </div>
  );
};

export default Layout; // Переконайтеся, що компонент експортується за замовчуванням
