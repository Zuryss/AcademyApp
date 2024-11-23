from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para permitir peticiones desde tu frontend Angular

@app.route('/elementos', methods=['GET'])
def obtener_elementos():
    elementos = [
        {"id": 1, "nombre": "Elemento 1", "descripcion": "Descripción del elemento 1"},
        {"id": 2, "nombre": "Elemento 2", "descripcion": "Descripción del elemento 2"},
    ]
    return jsonify(elementos)  # Retorna los datos en formato JSON

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
