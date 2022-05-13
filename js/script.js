const app = new Vue(
    {
        el: '#app',
        data: {
            randomEmail: [],
        },
        methods: {

        },
        created() {
            for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                    const randomEmailAPI = response.data.response;
                    this.randomEmail.push(randomEmailAPI);
                })
            }
        },
    }
)