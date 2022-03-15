const app = Vue.createApp({
    data() {
        // const sound = require('@/sound.mp3')
        return {
            // minute: 45,
            // second: 00,
            minutes: 00,
            secondes: 05,
            countdown: 45*60 + 0,
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            timer: null,
            audio: new Audio('https://cloud.ccllssd.com/wl/?id=gFVFeIaYd5Gj6xfS00LhGK7LSLFtd2OY&fmode=download')
            // audio: new Audio(this.sound)
        }
    },
    
    methods: {
        start () {
            this.countdown = this.minutes * 60 + this.secondes
            this.timer = setInterval(() => {
                if (this.countdown == 0) {
                    this.audio.play()
                    clearInterval(this.timer)
                    // this.reset()
                    return 
                }
                this.countdown -= 1
                this.secondes = this.countdown % 60
                this.minutes = (this.countdown - this.secondes) / 60
            }, 1000)
        },
        stopPlay () {
            this.reset()
        },
        reset () {
            this.minutes = 00,
            this.secondes = 05,
            this.countdown = this.minutes*60 + this.secondes,
            this.timer = null,
            this.audio.pause()
        },
        beforeDestroy() {
            clearInterval(this.timer)
        },
    }
});

app.mount("#app")