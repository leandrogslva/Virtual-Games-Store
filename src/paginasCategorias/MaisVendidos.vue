<template>
    <div id="main">
        <content-component :allGames="allGames"></content-component>
    </div>   
</template>

<script>
import Content from '../components/Content'

export default {
    data(){
        return{
            allGames:[

                {titulo: 'Dying Light 2',
                link:'https://images2.alphacoders.com/926/thumb-1920-926738.jpg',
                descricao:' Jogo Light',
                preco: 159.99},

                {titulo: 'Devil May Cry 5',
                link:'https://images6.alphacoders.com/926/thumb-1920-926723.jpg',
                descricao:' Jogo Devil',
                preco: 139.99},

                {titulo: 'Days Gone',
                link:'https://m.media-amazon.com/images/M/MV5BMzdhNThjYzEtMDRmNi00MmY2LWJkMWItZWUzY2ZjOTcwOTQyXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
                descricao:' Jogo Days',
                preco: 179.99},

                {titulo: 'Mortal Kombat 11',
                link:'https://wallpapersite.com/images/wallpapers/mortal-kombat-11-4096x2048-scorpion-cover-art-2019-4k-17236.jpg',
                descricao:' Jogo Mortal',
                preco: 159.99},

                {titulo: 'Street Fighter V',
                link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTB4BNUT-Ry-cEg41OeYwWi8Xs7i2SFDnvFe9sQTqlDCeYrYivA',
                descricao:' Jogo Street',
                preco: 219.99},

                {titulo: "The Division 2",
                link: 'https://www.4kwallpapersapp.com/wp-content/uploads/2019/01/1a2d8db8-9b3c-4ecd-8897-4fc5a6bcefe4_TheDivision2_1.jpg',
                descricao: 'Jogo Tom',
                preco: 119.99},

                {titulo: "Gears 5",
                link: 'https://images4.alphacoders.com/102/1020934.jpg',
                descricao: 'Jogo Gears',
                preco: 189.99},

                {titulo: "Crackdown 3",
                link: 'https://wallpapersite.com/images/wallpapers/crackdown-3-3840x2160-xbox-one-2017-4k-7778.jpg',
                descricao: 'Jogo Crack',
                preco: 109.99},

                {titulo:'Resident Evil 2', 
                link:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_2_Remake.jpg/220px-Resident_Evil_2_Remake.jpg", 
                descricao:'Jogo Resident 2',
                preco: 119.99},

                {titulo:"The Evil Within 2", 
                link:"https://http2.mlstatic.com/poster-do-game-the-evil-within-2-2017-D_NQ_NP_707584-MLB25952602197_092017-F.jpg", 
                descricao:"Jogo The Evil",
                preco: 159.90},

                {titulo: 'Dark Souls III',
                link:'http://www.tegonity.com/wp-content/uploads/2016/08/maxresdefault-19.jpg',
                descricao:' Jogo Dark',
                preco: 94.99},
                
                {titulo: 'Halo Wars 2',
                link:'https://m.media-amazon.com/images/I/91-0DniWIRL._SS500_.jpg',
                descricao:' Jogo Halo',
                preco: 89.90},
            ]
        }
    },

    components:{
        'content-component': Content
    }
}
</script>

<style>
    
</style>
