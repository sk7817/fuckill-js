import Fuckill from "../lib/fuckill.esmodule"

console.log(Fuckill)

window.fuck = new Fuckill({
    el: '#app',
    data: {
        person: {
            name: 'chendong',
            sex: true,
            avatar: './avatar.png'
        },
        bol: true,
        testtext: 'xxxxxxxxxxxxxxxxxx'
    },
    methods: {
        clickFn () {
            this.clickText = this.bol ? '点按钮还原':'点按钮变化'
            this.bol = !this.bol
        },
        editSex () {
            this.person.sex = !this.person.sex
        }
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
    created () {
        console.log('created')
    },
    mounted () {
        console.log('mounted')
    }
})