
import { JSDOM } from "jsdom";
import fetch from 'node-fetch'
import fs from "fs"
import path from 'path'

// Obtener la fecha actual
const now = new Date();

// Restarle 90 días a la fecha actual
const limitDate = new Date(now.getTime() - (90 * 24 * 60 * 60 * 1000));

const urlOriginImage = "https://apod.nasa.gov/apod/"

// Iterar sobre cada fecha en el rango de fechas desde la fecha límite hasta la fecha actual
for (let i = 0, date = limitDate; i < 90; i++, date.setDate(date.getDate() + 1)) {
  const fecha = new Date(date);
  const fechaFormateada = fecha.toISOString().slice(0, 10);
  // imprime la fecha formateada '2023-02-08'
  // console.log(fechaFormateada); 

  // Construir la URL de la página de APOD correspondiente a cada fecha
  const url = `https://apod.nasa.gov/apod/ap${date
    .toISOString()
    .slice(2, 10)
    .replace(/-/g, '')}.html`;
    

  // reemplaza con la ruta a tu directorio de salida
  const currentDir = process.cwd(); 

  JSDOM.fromURL(url).then(dom => {
    const links = dom.window.document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href.match(/image\/.*\.(jpeg|jpg|png)$/i)) {
        fetch(`${urlOriginImage}${href}`)
          .then(res => {
            const filename = `Day ${fechaFormateada}.jpg`;
            const dest = fs.createWriteStream(path.join(currentDir, filename));
            res.body.pipe(dest);
          })
          .catch(err => console.error(err));
      }
    });
  }).catch(err => console.error(err));
}