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
                {titulo: 'Jump Force',
                link:'https://compilacaonerd.com.br/wp-content/uploads/2019/02/jump-force-cover.jpg',
                descricao:' Jogo Jump',
                preco: 129.99},

                {titulo: 'Mortal Kombat 11',
                link:'https://wallpapersite.com/images/wallpapers/mortal-kombat-11-4096x2048-scorpion-cover-art-2019-4k-17236.jpg',
                descricao:' Jogo Mortal',
                preco: 159.99},

                {titulo: 'UFC 3',
                link:'https://wallpapercave.com/wp/wp2504562.jpg',
                descricao:' Jogo UFC',
                preco: 99.87},

                {titulo: 'Tekken 7',
                link:'https://wallpapercave.com/wp/wp2632805.jpg',
                descricao:' Jogo Tekken',
                preco: 129.99},

                {titulo: 'Soul Calibur VI',
                link:'https://nostalgiaking.com/wp-content/uploads/2018/10/soul-calibur-vi.jpg',
                descricao:' Jogo Calibur',
                preco: 109.89},

                {titulo: 'Injustice 2',
                link:'https://4.bp.blogspot.com/-PWNK9pd1hwM/W1EQTacUlPI/AAAAAAAAAuU/wRbv3p3JhjoJKJoeGdj49wAPTNDml7qKQCLcBGAs/s1600/cover.png',
                descricao:' Jogo Injustice',
                preco: 114.99},

                {titulo: 'Street Fighter V',
                link:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTB4BNUT-Ry-cEg41OeYwWi8Xs7i2SFDnvFe9sQTqlDCeYrYivA',
                descricao:' Jogo Street',
                preco: 219.99},

                {titulo: 'Super Smash Bros Ultimate',
                link:'https://images2.alphacoders.com/927/thumb-1920-927337.png',
                descricao:' Jogo Smash',
                preco: 289.99},

                {titulo: 'Dragon Ball Fighterz',
                link:'https://www.animeunited.com.br/wp-content/uploads/2018/03/dragon-ball-fighterz-listing-thumb-02-ps4-us-31oct17.png',
                descricao:' Jogo Dragon',
                preco: 179.87},

                {titulo: 'The King of Fighter XIV',
                link:'https://vignette.wikia.nocookie.net/snk/images/b/b8/KOF-XIV.png/revision/latest?cb=20160426174150',
                descricao:' Jogo The King',
                preco: 129.89},

                {titulo: 'J-Stars Victory Vs+',
                link:'https://i1.wp.com/operationrainfall.com/wp-content/uploads/2015/10/maxresdefault-1.jpg',
                descricao:' Jogo J-Stars',
                preco: 145.95},

                {titulo: 'Naruto Shippuden UNS 4',
                link:'https://stmed.net/sites/default/files/naruto-shippuden%3A-ultimate-ninja-storm-4-hd-wallpapers-33416-1002136.jpg',
                descricao:' Jogo Naruto',
                preco: 99.89},
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
