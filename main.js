import React from "react";
import App from "./dist/ssr/app";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import render from "./render";

const main = (req, res, next) => {
  try {
    const html = renderToString(
      <StaticRouter
        location={req.url}
        context={{
          name: "leonidas"
        }}
      >
        <App />
      </StaticRouter>
    );
    res.send(render(html));
  } catch (err) {
    next(err);
  }
};

module.exports = main;
