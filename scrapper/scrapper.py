import requests
from datetime import datetime, timedelta
from bs4 import BeautifulSoup
import os
import re

# Obtener la fecha actual
now = datetime.now()

# Restarle 90 días a la fecha actual
limit_date = now - timedelta(days=90)

url_origin_image = "https://apod.nasa.gov/apod/"

# Iterar sobre cada fecha en el rango de fechas desde la fecha límite hasta la fecha actual
for i in range(90):
    date = limit_date + timedelta(days=i)
    formatted_date = date.strftime("%Y%m%d")
    # Agregar los guiones
    formatted_date_organized = '-'.join([formatted_date[:4], formatted_date[4:6], formatted_date[6:]])
    # Imprimir la fecha formateada '2023-02-08'
    # print(formatted_data_organized)

    # Construir la URL de la página de APOD correspondiente a cada fecha
    url = f"https://apod.nasa.gov/apod/ap{formatted_date[2:]}.html"

    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    for link in soup.find_all('a'):
        href = link.get('href')
        if href and re.match(r'image/.*\.(jpeg|jpg|png)$', href):
            response = requests.get(f"{url_origin_image}{href}")
            filename = f"Day {formatted_date_organized}.jpg"
            with open(os.path.join(os.getcwd(), filename), 'wb') as f:
                f.write(response.content)