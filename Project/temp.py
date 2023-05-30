from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/sum', methods=['POST'])
def result():
  data = request.get_json()
  values = data['values']
  sum = sum(values)
  return jsonify({'sum': sum})

if __name__ == '__main__':
  app.run()
ptype=int()
rfailure=int()
oxygen=0
def clan():
    ans=" "
    if ptype == "Neonate":
        if rfailure == "Hypoxemic":
            if oxygen < 25:
                ans = "PC-CMV"
            elif 25 <= oxygen < 45:
                ans = "PC-ACV and VC-CMV"
        elif rfailure == "Hypercapnic":
            if oxygen < 20:
                ans = "PC-SIMV"
            elif 20 <= oxygen < 45:
                ans = "PC-AMV and VC-SIMV"
        elif rfailure == "Perioperative":
            if oxygen < 23:
                ans = "PC-CMV"
            elif 23 <= oxygen < 45:
                ans = "PC-ACV and VC-CMV"
    elif ptype == "Pediatric":
        if rfailure == "Hypoxemic":
            if oxygen < 20:
                ans = "PC-ACV"
            elif 20 <= oxygen < 40:
                ans = "PC-AMV and VC-SIMV"
        elif rfailure == "Hypercapnic":
            if oxygen < 18:
                ans = "PC-AMV"
            elif 18 <= oxygen < 45:
                ans = "PC-AMV and VC-SIMV+"
        elif rfailure == "Perioperative":
            if oxygen < 16:
                ans = "PC-CMV"
            elif 16 <= oxygen < 40:
                ans = "PC-APRV and VC-AUC"
    elif ptype == "Adult":
        if rfailure == "Hypoxemic":
            if oxygen < 23:
                ans = "PC-MMV"
            elif 23 <= oxygen < 43:
                ans = "PC-CMV and VC-SIMV"
        elif rfailure == "Hypercapnic":
            if oxygen < 19:
                ans = "PC-ACV"
            elif 19 <= oxygen < 45:
                ans = "PC-AMV and VC-SIMV"
        elif rfailure == "Perioperative":
            if oxygen < 23:
                ans = "PC-CMV"
            elif 23 <= oxygen < 45:
                ans = "PC-ACV and VC-CMV"
    return jsonify({'sum': ans})



