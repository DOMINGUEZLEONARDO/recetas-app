import React from 'react'
import '../styles/App.css'


export const RecetaCard = ({ nota }) => {
  console.log('nota', nota)


  // Crear un objeto Date a partir de la fecha ISO
  const fecha = new Date(nota.display_date);

  // Obtener el día del mes
  const dia = fecha.getDate();

  // Crear un array con los nombres de los meses
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  // Obtener el nombre del mes
  const nombreMes = meses[fecha.getMonth()];

  // Obtener el año
  const anio = fecha.getFullYear();

  // Formatear la fecha como "1 de julio de 2023"
  const fechaFormateada = `${dia} de ${nombreMes} de ${anio}`;


  // console.log('url',nota.promo_items.basic.url)
  return (

    <article className='mod-caja-nota lugares w-100-mobile'>
      <section id className='cont-figure'>
        <a className='figure'>
          <picture id className="content-pic picture">
            <img
              className='content-img'
              src={nota.promo_items.basic.url}
              alt={nota.headlines.basic}
            />
          </picture>
        </a>
      </section>
      <div className='mod-caja-nota__descrip'>
        <h2 className='com-title-acu'>
          <a>
            <b>{nota.headlines.basic}</b>
          </a>
        </h2>
        <h4 className='com-date'>{fechaFormateada}</h4>
      </div>
    </article>



  )
}
