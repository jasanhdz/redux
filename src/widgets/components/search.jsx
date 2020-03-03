import React from "react";
import { Prompt } from "react-router";
import "./search.css";

const Search = props => (
  <form className="Search" onSubmit={props.handleSubmit}>
    <Prompt when={false} message="¿Estás seguro de querer dejar la página?">
      <input
        ref={props.setRef}
        type="text"
        className="Search-input"
        placeholder="Busca tu video favorito"
        name="search"
        onChange={props.handleChange}
        value={props.value}
        // defaultValue="Luis Fonsi"
      />
    </Prompt>
  </form>
);

export default Search;
