import requests

def trivia_fetch(number):
    url = f"http://numbersapi.com/{number}?json"
    response = requests.get(url)

    if response.status_code == 200:
      data = response.json()
      return data
    else:
      return { "number": number, "text": "Ningun test encontrado." }
  
def main():
  print("Bienvenidos a la trivia!")

  try:
    entrada_de_usuario = int(input("Ingrese un numero valido: "))
    entrada_trivia = trivia(entrada_de_usuario)
    print(f"Acerca de trivia  {entrada_trivia['number']}: {entrada_trivia['text']}")

  except ValueError:
    print("Ingrese un numero valido")

if __name__ == "__main__":
    main()

