 /* global Vue */

 const FilmBlock = Vue.defineComponent({
     name: 'FilmBlock',
     props: ['title', 'description', 'year'],
     template: `  
     
        <div>
            <h1 style="font-family: 'Arial';">{{ $props.title }} </h1>
            <p>{{ $props.description }}</p>
        <div/>
        `
        
 })
 
 export default FilmBlock