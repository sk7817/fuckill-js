import Fuckill from "../lib/fuckill.esmodule"

new Fuckill({
    el: '#app',
    data: {
        testtext: 'xxxxxxxxxxxxxxxxxx'
    },
    methods: {
        clickFn () {
            alert(6666)
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