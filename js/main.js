

const app = Vue.createApp({
    data() {
        return {
            
            // name: "lolo"
            products,
            isActive : false,
            carts:[]

        }
    },
    methods: {
            addToCart(product){

                // console.log(product);

                let check = this.carts.some(item => {
                    return item.product.id == product.id
                })
                console.log(check);

                if(check){
                    this.carts.find(item => {
                        return item.product.id == product.id
                    }).quantity++
                    product.stock--
                }else{
                    product.stock--
                    this.carts.push({
                        product : product ,quantity : 1
                    })
                }
                
            },
            deletCart(cart , index){

                this.carts.splice(index, 1)

                this.products.find(product => {
                    return product.id == cart.product.id
                }).stock += cart.quantity

            },
            addPlus(cart) {

                // console.log(item.quantity);
                cart.quantity++

                this.products.find(product => {
                    return product.id == cart.product.id
                }).stock--


            },
            deleMi(cart) {
                cart.quantity--

                this.products.find(product => {
                    return product.id == cart.product.id
                }).stock++
            },
    },

}).mount("#app")