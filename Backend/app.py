from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MySQL database connection
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "SreenuAruru@2640",
    "database": "iadb"
}

# Connect to MySQL database
def get_db_connection():
    connection = mysql.connector.connect(**db_config)
    return connection

# 1. POST API for PDF or image upload
@app.route('/upload', methods=['POST'])
def upload_file():
    files = request.files.getlist('files')
    uploaded_files = []
    
    for file in files:
        if file and (file.filename.endswith('.pdf') or file.filename.endswith(('.png', '.jpg', '.jpeg'))):
            file_path = os.path.join('uploads', file.filename)
            file.save(file_path)
            uploaded_files.append(file.filename)
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO files (filename, filetype, filepath, created_at) VALUES (%s, %s, %s, %s)", 
                           (file.filename, file.content_type, file_path, datetime.now()))
            conn.commit()
            cursor.close()
            conn.close()

    return jsonify({"message": "Files uploaded successfully", "files": uploaded_files}), 201

# 2. POST API for feedback
@app.route('/feedback', methods=['POST'])
def submit_feedback():
    user_feedback = request.json.get('feedback')
    if user_feedback:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO feedback (user_feedback, created_at) VALUES (%s, %s)", (user_feedback, datetime.now()))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "Feedback submitted successfully"}), 201
    return jsonify({"message": "Feedback cannot be empty"}), 400

# 3. DELETE API for deleting PDF or image
@app.route('/delete/file/<int:file_id>', methods=['DELETE'])
def delete_file(file_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT filepath FROM files WHERE id = %s", (file_id,))
    file_record = cursor.fetchone()

    if file_record:
        os.remove(file_record[0])  # Remove file from the filesystem
        cursor.execute("DELETE FROM files WHERE id = %s", (file_id,))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "File deleted successfully"}), 200

    cursor.close()
    conn.close()
    return jsonify({"message": "File not found"}), 404

# 4. DELETE API for deleting feedback
@app.route('/delete/feedback/<int:feedback_id>', methods=['DELETE'])
def delete_feedback(feedback_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM feedback WHERE id = %s", (feedback_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"message": "Feedback deleted successfully"}), 200

# 5. GET API for getting all PDFs and images
@app.route('/files', methods=['GET'])
def get_files():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM files")
    files = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(files), 200

# 6. GET API for getting all feedback
@app.route('/feedback', methods=['GET'])
def get_feedback():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM feedback")
    feedback = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(feedback), 200

if __name__ == '__main__':
    app.run(debug=True)
