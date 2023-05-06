from flask import Flask,request,jsonify,json
from pymongo import MongoClient
from flask_cors import CORS
from dotenv import load_dotenv
import datetime
import os

# Load environment variables from .env fileload_dotenv()
load_dotenv()
app = Flask(__name__)
CORS(app)


mongo_uri = os.environ.get('MONGO_URI') # Enter the connection URL to MongoDB. although they can connect another database
client = MongoClient(mongo_uri)
db = client.test # enter the name of the database to enter the data


@app.route('/', methods=['GET'])
def Home():
    response = {
        "Name": "John Developer",
        "Status": "200",
    }
    return response


@app.route('/add', methods=['POST'])
def Agregar():
    Data = request.json["Enviar"]
    errors = {'Name': [], 'Season': [], 'Date': [], 'Number': []}
    existing_name = db.python.find_one({'Name': Data['Name']})
    # FORMATO DE LA FECHA
    date_format = '%Y-%m-%d'

    if existing_name:
        errors['Name'].append('That name is already found')
    
    if not Data['Name']:
        errors['Name'].append('This field is required')

    if not Data['Season']:
        errors['Season'].append('This field is required')

    if not Data['Date']:
       errors['Date'].append('This field is required')
    else:
        try:
            datetime.datetime.strptime(Data['Date'], date_format)
        except ValueError:
            errors['Date'].append('Wrong date format, should be YYYY-MM-DD')

    if not Data['Number']:
        errors['Number'].append('This field is required')
    elif not Data['Number'].isdigit():
        errors['Number'].append('This field should only contain numbers')

    if len(Data['Name']) > 15:
        errors['Name'].append('The Name field cannot be longer than 15 characters')

    season_options = ["spring", "summer", "fall", "winter"]
    if not Data['Season'] or Data['Season'].lower() not in season_options:
        errors['Season'].append('You must enter: ' + ', '.join(season_options))

    if any(errors.values()):
        return jsonify({'errors': errors}),422

    _id = db.forms_resource_practices.insert_one({
        'Name': Data['Name'], 
        'Season': Data['Season'].lower(),
        'Date': Data['Date'], 
        'Number': Data['Number'],  
    })

    return jsonify({'id': str(_id.inserted_id)}),200


if __name__ == '__main__':
    app.run(debug=True)