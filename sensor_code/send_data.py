#Change the id to the id you want the sensor to have.
#
#
import microbit
import radio

radio.on()
microbit.display.off()
id = "1"


while True:
    temp = microbit.temperature()
    light = microbit.display.read_light_level()
    radio.send(id + " " + str(temp) + " " + str(light))
    #print(id + " " + str(temp) + " " + str(light))
    if microbit.button_a.get_presses():
        microbit.display.scroll(id)
    microbit.sleep(5000)