<template>
    <div id="main">
        <content-component :allGames="allGames"></content-component>
    </div>
</template>

<script>
import Content from '../components/Content'

export default {
    components: {
        'content-component': Content
    },
    data(){
        return{
            allGames:[
                {titulo:'OutLast 2', 
                link:'https://images.g2a.com/newlayout/323x433/1x1x0/cc925a9f3df9/5912cd36ae653a8473125315', 
                descricao:'Blake e Lynn se separam em um acidente de helicóptero, e Blake tem que encontrar sua esposa enquanto viaja através de uma aldeia habitada por uma seita chamada Testamento do Novo Ezequiel',
                preco: 34.99},

                {titulo:'Residente Evil 7', 
                link:"https://steamcdn-a.akamaihd.net/steam/apps/418370/header.jpg?t=1559666246", 
                descricao:'A busca do civil Ethan Winters por sua esposa Mia, o leva a uma mansão agrícola aparentemente abandonada e habitada pela família Baker',
                preco: 47.99},

                {titulo:'Resident Evil 2', 
                link:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Resident_Evil_2_Remake.jpg/220px-Resident_Evil_2_Remake.jpg", 
                descricao:'Jogo Resident 2',
                preco: 119.99},

                {titulo:"Agony", 
                link:"https://steamcdn-a.akamaihd.net/steam/apps/487720/header.jpg?t=1557228289", 
                descricao:"Jogo Agony",
                preco: 79.99},

                {titulo:"Man of Medan", 
                link:"https://4.bp.blogspot.com/-v0qWhYY11kI/XAgRGT_8uZI/AAAAAAAAg_o/ZlCJp2CcAjscKED6odtb4DO8cMkyYiVdwCLcBGAs/s1600/manofmedan.jpg", 
                descricao:"Jogo Man",
                preco: 149.99},

                {titulo:"The Evil Within 2", 
                link:"https://http2.mlstatic.com/poster-do-game-the-evil-within-2-2017-D_NQ_NP_707584-MLB25952602197_092017-F.jpg", 
                descricao:"Jogo The Evil",
                preco: 159.90},
                
                {titulo:"GTFO",
                link:"https://steamcdn-a.akamaihd.net/steam/apps/493520/header.jpg?t=1561667153",
                descricao:"Jogo GTFO",
                preco: 109.99},

                {titulo:"Friday The 13th",
                link:"https://steamcdn-a.akamaihd.net/steam/apps/438740/header.jpg?t=1560523879",
                descricao:"Jogo Friday",
                preco: 44.99},

                {titulo:"Maid of Sker",
                link:"https://steamcdn-a.akamaihd.net/steam/apps/826940/header.jpg?t=1558351307",
                descricao:"Jogo Maid",
                preco: 89.99},

                {titulo:"The Beast Inside",
                link:"https://steamcdn-a.akamaihd.net/steam/apps/792300/header.jpg?t=1563225393",
                descricao:"Jogo Beast",
                preco: 129.99},

                {titulo:"Lunacy Saint Rhodes",
                link:"https://steamcdn-a.akamaihd.net/steam/apps/874450/header.jpg?t=1562586474",
                descricao:"Jogo Lunacy",
                preco: 79.99},

                {titulo:"Hide or Die",
                link:"https://steamcdn-a.akamaihd.net/steam/apps/731620/header.jpg?t=1562554727",
                descricao:"Jogo Hide",
                preco: 97.99},
            ], 
        }
    },
}
</script>

<style>

</style>
