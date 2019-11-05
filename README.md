# MicroBit Project

I will continue to update in this readme file when I need to.



### Source for drag n' drop
https://www.kirupa.com/html5/drag.htm


### Get started

You need to install the following to be able to run it:

* Python3
* NodeJs
* node-express

You will have to download a program called "Mu". It's a python program that let's you flash your sensors.
Then in the folder source_code there will be 3 files. You need to choose one of your sensors to be a "reciever".
Flash the reciever.py file unto the "reciever sensor" and have it plugged into a PC all the time.
For the rest of the sensors you can flash the send_data.py file to them but change the id for each sensors in the code using Mu.
Then you will have to start the script send_data_to_database.py in a terminal with the command "python3 send_data_to_database.py" on the same PC or raspberry pi that you have your "reciever"connected to. On another PC that is connected to the internet can you now start the NodeJs server for the website. Type in "node index.js" at the start of the project folder and the server should start. Now you can open a browser and type in "localhost:1337" and the website will come up.

#### Tips
If you press the A button on the sensor it will display the ID, and if you hit the reset button at the back of the sensor you will restart the sensor.
