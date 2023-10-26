from flask import Flask, request, render_template, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run-aircanvas', methods=['POST'])
def run_aircanvas():
    try:
        result = subprocess.check_output(['python', 'aircanvasML.py'])
        return jsonify({"result": result.decode('utf-8')})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run()
