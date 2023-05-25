const { createApp } = Vue


createApp({
    data() {
        return {
            step: 'newcustmen'
        }
    },
    methods: {
        newcustmen() {
            this.step = 'newcustmen'
            localStorage.setItem('step', 'newcustmen')
        },
        oldcustmen() {
            this.step = 'oldcustmen'
            localStorage.setItem('step', 'oldcustmen')
        }
    },
    watch: {
    },
    mounted() {
        this.step = localStorage.getItem('step')
    },
}).mount('#app')


