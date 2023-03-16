export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    /*watch: {
        name(){
            console.log('name被改变了')
        }
    }*/
}

export const mixin2 = {
    data(){
        return{
            x: 100,
            y: 200
        }
    }
}