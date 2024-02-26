function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}

    // Pegar a tag img

    // substituir a imagem

    // se tiver lghth mode imagem lighth
    // se não manter a imagem normal

    const img = document.querySelector('#profile img')
    
    if(html.classList.contains('light')) {

        img.setAttribute('src', 'assets/avatar-light.png')
        img.setAttribute('alt', 'Imagen de Mayk Brito usando camiseta preta e usando óculos escuro em um fundo degrade do roxo para o azul.')

    } else {
        img.setAttribute('src', 'assets/avatar.png')
        img.setAttribute('alt', 'Imagen de Mayk Brito usando camiseta preta em um fundo amarelo.')
    }


}

