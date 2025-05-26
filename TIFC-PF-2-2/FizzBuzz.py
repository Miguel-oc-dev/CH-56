def fizzBuzz(limite):

    """
    Imprime una secuencia del 1 al número dado.
    Sustituye múltiplos de 3 por 'Fizz',
    múltiplos de 5 por 'Buzz',
    y múltiplos de ambos por 'FizzBuzz'. :D
    """

    for num in range(1, limite + 1):
        if num % 3 == 0 and num % 5 == 0:
            print("FizzBuzz")
        elif num % 3 == 0:
            print("Fizz")
        elif num % 5 == 0:
            print("Buzz")
        else:
            print(num)

# Cambiar el valor por el limite que deseas.
fizzBuzz(100000)