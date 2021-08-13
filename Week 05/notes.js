// vue.js , raybo.org/slides_vue3
//installation, script vd app

<script src="https://unpkg.com/vue@next"></script>

//install npm install vue@next
//creating a project, terminal or GUI, vue create project
//developer tools, chrome - go.raybo.org/2Ci6
//go.raybo.org/2Cgl
//go.raybo.org/2Cgm

//basic set-up

//HTML
<div id="app">
    <h1> {{ name }} </h1>
</div>

//JS
const App = { 
    data() {
        return {
            name:'bamboo thermal coat'
        }
    }
}

Vue.creatApp(App.mount('#app')

Vue.createApp({
    data() {
        return {
            name: 'polo shirt'
        }
    }
}).mount('#anotherApp')

//Using Directives (command)
<img v-bind:src="imgSrc" v-bind:alt="some image">


