export default {
  allProduct: {
    type1: {
      typeId: 'type1',
      name: '热销',
      active: 'active',
      productList: {
        pro1: {
          productId: "pro1",
          type:'type1',
          img: 'http://p0.meituan.net/100.100.90/xianfu/80626db6872c50600e183005bf732d8b102400.jpg.webp',
          name: '孜然烤肉拌饭',
          desc: '孜然味',
          contSub: {
            sellCount: 200,
            upvote: 100
          },
          count: 0,
          price: 200
        },
        pro2: {
          productId: "pro2",
          type:'type1',
          img: 'http://p0.meituan.net/100.100.90/xianfu/4fe416d3f986e814f8ca601cbac57b62106496.jpg.webp',
          name: '烤肉拌饭',
          desc: '烧烤味',
          contSub: {
            sellCount: 200,
            upvote: 100
          },
          count: 0,
          price: 200
        }
      }
    },
    type2: {
      typeId: 'type2',
      name: '主食',
      active: '',
      productList: {
        pro3: {
          productId: "pro3",
          type:'type2',
          img: 'http://p0.meituan.net/100.100.90/xianfu/d782f30b1f84dd992b68cc01003dbcc094208.jpg.webp',
          name: '黄金烤肉饭',
          desc: '孜然味',
          contSub: {
            sellCount: 200,
            upvote: 100
          },
          count: 0,
          price: 200
        },
        pro4: {
          productId: "pro4",
          type:'type2',
          img: 'http://p0.meituan.net/100.100.90/xianfu/1428ba3316a7dc4e77c87e9012155e8226624.jpg.webp',
          name: '白米饭',
          desc: '烧烤味',
          contSub: {
            sellCount: 200,
            upvote: 100
          },
          count: 0,
          price: 200
        }
      }
    },
    type3: {
      typeId: 'type3',
      name: '饮料',
      active: '',
      productList: {
        pro5: {
          productId: "pro5",
          type:'type3',
          img: 'http://p0.meituan.net/100.100.90/xianfu/02cd38a0540a2e8eafd5a6827d3f1ee810240.jpg.webp',
          name: '雪碧',
          desc: '柠檬味',
          contSub: {
            sellCount: 200,
            upvote: 100
          },
          count: 0,
          price: 200
        }
      }
    }
  },
  cart: []

  /**
   * cart:{
   *   sumPrice:number,
   *   chooseProduct:[
   *     { 
   *       count:number,
   *       price:number,
   *       name:string
   *     }
   *   ]
   * }
   */
};