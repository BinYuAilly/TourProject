var vue = new Vue({
    el: '#app',
    data() {
        return {
            text:"tour",
            carImg:[
                {src:'../img/tour3.jpg',no:'first',noUp:'First'},
                {src:'../img/tour0.jpg',no:'second',noUp:'Second'},
                {src:'../img/tour3.jpg',no:'third',noUp:'Third'},
                {src:'../img/tour0.jpg',no:'third',noUp:'Third'}, 
            ]            
        }
    },
    created() {
         
    },
    methods: {
        search(){//搜索
            console.log(1)
        }
    },
})