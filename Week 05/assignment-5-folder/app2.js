 /* global Vue */
 /* global fetch */
      //props are pieces of data that we can pass into our component and access in our template

import FilmBlock from './Components/filmblock.js'
 
const app = Vue.createApp({
    components: {
        FilmBlock
    },
    data: function () {
        return {
            films: [],
            searchQuery: null,
            searchQueryInput: '',
        }

    },
    
    methods: {
        // filteredFilms: function(){
        //     if(this.searchQuery == '') {
        //         return this.films;
        //     } else {
        // return this.films.filter(function(film) {
        //     return film.indexOf(this.searchQuery) >= 0;
        // });
        //     }
        // },
        searchFilms(event){
            event.preventDefault();
            this.searchQuery = this.searchQueryInput;
        },
        reset(){
            this.searchQuery = null;
        }
    },
    
    computed: {
      filteredFilms(){
        if(this.searchQuery){
            return this.films.filter((film)=>{
                return this.searchQuery.toLowerCase().split(' ').every(v => film.title.toLowerCase().includes(v))
            })
        } else {
            return this.films;
        }
      }
    },
    // computed: {
    //     filteredFilms: function(){
    //         return this.films.filter((film) => {
    //             return film.title.match(this.search)
    //         });
    //     }
    // },
    
    mounted(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(json => {
            this.films = json;
        })
    }
})



// export default {
//     data() {
//         return {
//             films: [],
//             search: '',
//         }
//     }
// }
            
            // let films = json;
            
            // films.filter(film => {
            //     if(film.title.includes('the')){
            //         return true
            //     } else {
            //         return false
                
            //      })
                 
//     console.log(films)
// }

app.mount('#app');