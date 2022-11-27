import React from 'react';
import '../App.css';

export default function CV() {

  const Download = () => {
    fetch('jeremycv2021.odt').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'jeremycv2021.odt';
        alink.click();
      })
    })
  }

  return (
    <>
      <h3>Consulter mon CV en ligne</h3>
      <button onClick={Download}>Télécharger</button>
    </>
  )
}