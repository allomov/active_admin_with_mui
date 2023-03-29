// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"

import * as React from "react";
import ReactDOM from "react-dom/client";
import SimpleForm from "./SimpleForm";

export const initializeReactComponents = () => {
    const container = document.getElementById("react-form-root");
    const root = ReactDOM.createRoot(container);

    root.render(
      React.createElement(SimpleForm)
    );
};

if (document.readyState !== "loading") {
  initializeReactComponents();
} else {
  document.addEventListener("DOMContentLoaded", initializeReactComponents);
}
