import radio
import microbit


radio.on()

while True:
    microbit.sleep(300000)
    incoming = radio.receive()
    print(incoming)
