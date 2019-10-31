import radio
import microbit

radio.config(length=251)
radio.on()

while True:
    incoming = radio.receive()
    if incoming:
        print(incoming)