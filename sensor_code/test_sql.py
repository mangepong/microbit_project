import mysql.connector
from mysql.connector import Error
from mysql.connector import errorcode

connection = mysql.connector.connect(host='remotemysql.com',
                                     database='xInF7OKL5i',
                                     user='xInF7OKL5i',
                                     password='gUDs83QPoS')

sql = """INSERT INTO microbitdata (id, temp, light) VALUES (%s, %s, %s)"""

val = (2, 56, 687)

cursor = connection.cursor()
cursor.execute(sql, val)

connection.commit()
