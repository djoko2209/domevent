

//kita buat sebuah fungsi untuk
//memunculkan modal

const showModal = () => {
    //kita dapatkan element modal 
    //yang mau dimunculkan
    let modal = document.getElementById('modalMenu')

    //kita atur styling element modalnya
    modal.style.display = 'flex'

}

const closeModal = () => {
    let modal = document.getElementById('modalMenu')
    modal.style.display = 'none'
}

//kita ambil dulu element yang diinginkan
let showcase = document.getElementById('wrapper_showcase')


//kita inject element nya dengan syntax HTML
//showcase.innerHTML += `
//<img src="https://picsum.photos/seed/19/300" />
//`

for (var i = 0; i < 36; i++) {
    showcase.innerHTML += `
        <img src='https://picsum.photos/seed/${100 + i}/100' alt='gambar ke ${i}'/>
    
    `

}