// Did she say hallo?

function validateHello(greetings){
    let hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    return hellos.some(el => greetings.toLowerCase().includes(el))
  }