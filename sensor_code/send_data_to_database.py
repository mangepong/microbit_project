#!/usr/bin/python
import os, sys
import serial
import time
import csv
import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode

connection = mysql.connector.connect(host='remotemysql.com',
                                     database='xInF7OKL5i',
                                     user='xInF7OKL5i',
                                     password='gUDs83QPoS')

sql = """INSERT INTO microbitdata (id, temp, light) VALUES (%s, %s, %s)"""

ser = serial.Serial('/dev/ttyACM0', 115200)

    


while True:
    line = ser.read(9)
    output = line.decode("utf-8")
    print(output.split())
    val = (output.split())
    cursor = connection.cursor()
    cursor.execute(sql, val)

    connection.commit()
#with open("data.csv", "a") as csvFile:
#    writer = csv.writer(csvFile)
#    writer.writerow(output.split())
        
#csvFile.close()

