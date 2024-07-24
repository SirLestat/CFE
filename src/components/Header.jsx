import React from 'react';

export default function Header(props) {
  return (
    <header>
      <h1>I'm a header, {props.name}</h1>
    </header>
  );
}
