const app = Vue.createApp({
    data() {
        return {
            minute: 45,
            second: 00,
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            timer: null

        }
    },
    mounted: function () {
        sum = this.minute * 60 + this.second
        this.timer = setInterval(() => {
            if (sum == 0) { return }
            sum -= 1
            this.second = sum % 60
            this.minute = (sum - this.second) / 60
        }, 1)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    },
    // methods: {
    //     async getuser() {
    //         const res = await fetch('https://randomuser.me/api')
    //         const { results } = await res.json()
        
    //         console.log(results)

    //         this.minute = results[0].name.first
    //         this.second = results[0].name.last
    //         this.email = results[0].email
    //         this.gender = results[0].gender
    //         this.picture = results[0].picture.large
    //     },
    // }
});

app.mount("#app")