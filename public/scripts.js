const SelfServiceMachine = {
    data() {
        return {
            products: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                this.products = data.map(product => ({
                    ...product,
                    active: false,
                    quantity: 1
                }));
            });
    },

    methods: {
        total: function() {
            var total = 0;

            this.products.forEach(function(item){
                if (item.active) {
                    total += item.price * item.quantity;
                }
            });

            return total.toFixed(2);
        }
    }
};



Vue.createApp(SelfServiceMachine).mount('#app');
