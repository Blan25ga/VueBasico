new Vue({
    el: '#app',
    data: {
        idea_txt: '',
        prioridad: '',
        lista_ideas: [
            { 'id': 0, 'idea': 'Primera Idea', 'prioridad': 'B' },
            { 'id': 1, 'idea': 'Segunda Idea', 'prioridad': 'N' },
            { 'id': 2, 'idea': 'Tercera Idea', 'prioridad': 'm' },

        ],
        search_text: '',

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
        BuscarIdeas: function (val) {

        }
    });


