from flask import Flask, jsonify, send_file, send_from_directory, render_template
from livereload import Server
import json

app = Flask(__name__)


# Load students from JSON file
def load_students():
    with open("students.json", "r") as f:
        return json.load(f)


@app.route("/")
def serve_app():
    return send_file("app.html")


@app.route("/students")
def get_students():
    students = load_students()
    return jsonify(students)


@app.route('/student/<string:student_id>')
def get_student(student_id):
    students = load_students()
    student = next((s for s in students if s['id'] == student_id), None)
    if student:
        return send_file('students.html')
    return jsonify({"error": "Student not found"}), 404
  
  
@app.route("/<path:filename>")
def serve_static(filename):
    return send_from_directory("static", filename)


if __name__ == "__main__":
    server = Server(app.wsgi_app)
    server.watch("static/*")
    server.serve(debug=True)
