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
                {titulo: "The Division 2",
                link: 'https://www.4kwallpapersapp.com/wp-content/uploads/2019/01/1a2d8db8-9b3c-4ecd-8897-4fc5a6bcefe4_TheDivision2_1.jpg',
                descricao: 'Jogo Tom',
                preco: '119,99'},

                {titulo: "Gears 5",
                link: 'https://images4.alphacoders.com/102/1020934.jpg',
                descricao: 'Jogo Gears',
                preco: '189,99'},

                {titulo: "Rage 2",
                link: 'https://wallpapercave.com/wp/wp4335363.png',
                descricao: 'Jogo Rage',
                preco: '129,99'},

                {titulo: "Crackdown 3",
                link: 'https://wallpapersite.com/images/wallpapers/crackdown-3-3840x2160-xbox-one-2017-4k-7778.jpg',
                descricao: 'Jogo Crack',
                preco: '109,99'},

                {titulo: "Anthem",
                link: 'https://images3.alphacoders.com/929/thumb-1920-929416.jpg',
                descricao: 'Jogo Anthem',
                preco: '116,99'},

                {titulo: "Doom Eternal",
                link: 'https://i.redd.it/z0n9pvpyzan21.png',
                descricao: 'Jogo Doom',
                preco: '128,99'},

                {titulo: 'Sniper Elite 4',
                link:'https://stmed.net/sites/default/files/sniper-elite-4-hd-wallpapers-33632-4796826.jpg',
                descricao:' Jogo Sniper',
                preco: '129,99'},

                {titulo: 'Battlefield 1',
                link:'https://wallpaperplay.com/walls/full/1/1/0/227480.jpg',
                descricao:' Jogo Battlefield',
                preco: '89,99'},

                {titulo: 'Call Of Duty WWII',
                link:'https://paladins.it/wp-content/uploads/2017/04/call-of-duty-leak-diretta-gamesoul-1280x720.jpg',
                descricao:' Jogo Battlefield',
                preco: '119,90'},

                {titulo: 'Killing Floor',
                link:'https://wallpapercave.com/wp/wp2130913.jpg',
                descricao:' Jogo Killing',
                preco: '69,90'},

                {titulo: 'Call Of Duty Black Ops III ',
                link:'https://images2.alphacoders.com/597/thumb-1920-597965.jpg',
                descricao:' Jogo Black Ops',
                preco: '76,89'},

                {titulo: "Rainbow Six Siege",
                link:'https://images7.alphacoders.com/521/thumb-1920-521305.png',
                descricao:' Jogo Rainbow',
                preco: '89,90'},   
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
