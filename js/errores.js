try {
    console.log('se ejecuta la parte del codigo')
    noexiste
} catch (error) {
    console.log(error)
} finally {
    console.log('se ejecutara siempre al final de un bloque try catch')
}