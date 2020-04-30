from tinydb import TinyDB, Query
from tinydb.operations import delete
from flask import Flask
from flask_cors import CORS

db = TinyDB('db.json')
app = Flask(__name__)
CORS(app)

@app.route('/setFinished')
def set_finished():
    db.insert({'finished': True})
    return "set finished" 

@app.route('/checkFinished')
def check_finished():
    values = db.all()
    print(values)
    value = None
    if len(values) != 0:
        value = values[0]
        # reset the counter to None
        db.purge()
        return str(value['finished'])
    else:
        return 'False'

app.run()
