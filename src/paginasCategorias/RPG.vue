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
                {titulo: 'Dragon Age Inquisition',
                link:'https://images5.alphacoders.com/556/thumb-1920-556193.jpg',
                descricao:' Jogo Inquisition',
                preco: 84.99},

                {titulo: 'Ni No Kuni II',
                link:'http://www.nerdediva.com.br/wp-content/uploads/2018/07/ni-no-kuni-ii-revenant-kingdom-listing-thumb-01-ps4-us-23mar18.png',
                descricao:' Jogo Ni',
                preco: 282.90},

                {titulo: 'Dark Souls III',
                link:'http://www.tegonity.com/wp-content/uploads/2016/08/maxresdefault-19.jpg',
                descricao:' Jogo Dark',
                preco: 94.99},

                {titulo: 'Horizon Zero Dawn',
                link:'https://images6.alphacoders.com/718/thumb-1920-718467.jpg',
                descricao:' Jogo Horizon',
                preco: 76.49},

                {titulo: 'Final Fantasy XV',
                link:'https://i.ytimg.com/vi/BmBaphCMljk/maxresdefault.jpg',
                descricao:' Jogo Final Fantasy',
                preco: 129.99},

                {titulo: 'Bloodborne',
                link:'https://img3.goodfon.com/wallpaper/nbig/4/e2/plashch-oruzhie-bloodborne-okhotnik-gorod-from-software-krov.jpg',
                descricao:' Jogo Bloodborne',
                preco: 59.90},

                {titulo: 'The Elder Scrools V',
                link:'https://http2.mlstatic.com/the-elder-scrolls-v-skyrim-legendary-edition-pc-key-digital-D_NQ_NP_745882-MLB27908296454_082018-F.jpg',
                descricao:' Jogo Elder',
                preco: 89.90},

                {titulo: 'Mass Effect 3',
                link:'https://stmed.net/sites/default/files/mass-effect-3-hd-wallpapers-33349-9373358.jpg',
                descricao:' Jogo Mass Effect',
                preco: 119.99},

                {titulo: 'Valkyria Chronicles 4',
                link:'https://rpgvaliant.com/wp-content/uploads/2017/12/Valkyria-Chronicles-4-1.jpg',
                descricao:' Jogo Valkyria',
                preco: 99.90},

                {titulo: 'Halo Wars 2',
                link:'https://m.media-amazon.com/images/I/91-0DniWIRL._SS500_.jpg',
                descricao:' Jogo Halo',
                preco: 89.90},

                {titulo: 'Shadow Tatics: B. of the S.',
                link:'https://store-images.s-microsoft.com/image/apps.15763.13926932623714994.e99e2da9-6f94-49e2-a65f-83115d004826.c03faa02-3400-45d3-b8f0-f79b130a3bec',
                descricao:' Jogo Shadow',
                preco: 99.99},

                {titulo: 'XCOM 2',
                link:'http://www.psmania.sk/attachments/xcom2-jpg.21186/',
                descricao:' Jogo XCOM',
                preco: 119.89},
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
