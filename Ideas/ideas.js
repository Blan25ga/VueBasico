new Vue({
    el: '#app',
    data: {
        idea_txt: '',
        prioridad: '',
        lista_ideas: [
            { 'id': 0, 'idea': 'Primera Idea', 'prioridad': 'B' },
            { 'id': 1, 'idea': 'Segunda Idea', 'prioridad': 'N' },
            { 'id': 2, 'idea': 'Tercera Idea', 'prioridad': 'M' },

        ],
        search_text: '',
        lista_ideas_servidor: [],

    },
    watch: {
        search_text: function (val) {
            this.BuscarIdeas(val);
        }
    },
    methods: {
        AgregarIdea: function () {
            var idea = {
                'id': this.lista_ideas.length,
                'idea': this.idea_txt,
                'prioridad': this.prioridad
            };
            this.lista_ideas.push(idea);
        },
        BuscarIdeas: function (valor) {
            this.lista_ideas = this.lista_ideas.filter(
                (value) => {
                    return value.idea.toLowerCase().indexOf(valor.toLowerCase()) >= 0;
                }
            );
        },
        EliminarIdea: function (idea_id) {
            let.index = this.lista_ideas.findIndex(e => e.id === idea_id);
            this.lista_ideas.splice(index, 1);
        },
        CargarDatosServidor: function () {
            var self = this;
            axios.get('https://nuenapp.com/api/idea/lista/').then(
                function (response) {
                    self.lista_ideas_servidor = response.data;
                }
            )
        }

    },
});



