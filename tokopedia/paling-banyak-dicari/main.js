Vue.component('product', {
    props: [
        'img_url',
        'name',
        'desc'
    ],
    template: `
        <div class="column">
            <div class="card p12">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-96x96">
                            <img :src="img_url" alt="Phone">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-6">{{ name }}</p>
                        <p class="subtitle is-7">{{ desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    `
})

new Vue({
    el: "#app",
    data: {
        isClicked: false,
        products: [
            {
                id: 1,
                img_url: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/2/25/668336273/668336273_ad99091e-e51d-444e-9e6e-f07d88528bf0_1074_1074.jpg',
                name: 'Samsung Galaxy A51',
                desc: '4rb produk'
            },
            {
                id: 2,
                img_url: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2019/5/24/6088338/6088338_b04b99f6-51a5-4460-9574-382b7ea3cf73_1079_1079.jpg',
                name: 'Celana Pendek',
                desc: '689rb produk'
            },
            {
                id: 3,
                img_url: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/5/19/3542427/3542427_64f81de9-a1d2-4f78-bacb-237c1d01a344_2048_1366.jpg',
                name: 'Sandal Wanita',
                desc: '737rb produk'
            },
            {
                id: 4,
                img_url: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2020/1/26/batch-upload/batch-upload_6f65d728-2774-44b4-ad4b-92e32ca2507b.jpg',
                name: 'Headset Promate',
                desc: '185rb produk'
            }
        ]
    },
    methods: {
        animateIcon() {
            document.querySelector("#animating-icon").classList.add('animated')
            document.querySelector("#animating-icon").classList.add('rollIn')
            console.log('test aja')
        }
    }
})