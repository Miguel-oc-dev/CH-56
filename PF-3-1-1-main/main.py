try:

    numero1 = float(input("Ingrese el primer número: "))
    numero2 = float(input("Ingrese el segundo número: "))

    print("La suma de los números es: ", numero1 + numero2)

    # Operaciones Extra
    while True:
        print("Escoja otra operación: ")
        print("1: Resta")
        print("2: Multiplicar")
        print("3: Dividir el primero sobre el segundo")
        print("4: Modulo (num1 % num2)")
        print("5: Agrega 3 numeros")
        print("6: Multiples operaciones con 3 o más numeros")
        print("0: Salir...")

        eleccion = input("Ingrese el numero de la operacion: ")

        if eleccion == "0":
            print("Finalizando programa...")
            break
        elif eleccion == "1":
            print("Resultado: ", numero1 - numero2)
        elif eleccion == "2":
            print("Resultado: ", numero1 * numero2)
        elif eleccion == "3":
            if numero2 != 0:
                print("Resultado: ", numero1 / numero2)
            else:
                print("No se puede dividir por cero...")
        elif eleccion == "4":
            if numero2 != 0:
                print("Resultado: ", numero1 % numero2)
            else:
                print("Módulo por cero...")
        elif eleccion == "5":
            numero3 = float(input("Ingrese el tercer número: "))
            print("Resultado: ", numero1 + numero2 + numero3)
        elif eleccion == "6":
            expresion = input("Ingrese la expresión (ej: 2 + 4 - 3 * 2): ")
            try:
                resultado = eval(expresion)
                print("Resultado:", resultado)
            except Exception as e:
                print("Error en la expresión:", e)
        else:
            print("Opción inválida. Intente nuevamente.")

except KeyboardInterrupt:
    print("\nOperación cancelada...")


