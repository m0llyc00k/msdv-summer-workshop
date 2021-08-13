 /* global Vue */

const app = Vue.createApp({
    data: function () {
        return {
            name: 'Molly',
            tempName: 'Molly'
        }
    },
    methods: {
      changeName: function (event) {
        event.preventDefault();
        
        this.name = this.tempName;
      }
    }
})

app.mount('#app')