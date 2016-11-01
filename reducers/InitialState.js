export default {
  allProduct:[{
        name:'热销',
        active:'active',
        productList:[{
          img:'http://p0.meituan.net/100.100.90/xianfu/80626db6872c50600e183005bf732d8b102400.jpg.webp',
          name:'孜然烤肉拌饭',
          desc:'孜然味',
          contSub:{sellCount:200,upvote:100},
          count:0,
          price:200
        },{
          img:'http://p0.meituan.net/100.100.90/xianfu/4fe416d3f986e814f8ca601cbac57b62106496.jpg.webp',
          name:'烤肉拌饭',
          desc:'烧烤味',
          contSub:{sellCount:200,upvote:100},
          count:0,
          price:200
        }]
      },{
        name:'主食',
        active:'',
        productList:[{
            img:'http://p0.meituan.net/100.100.90/xianfu/d782f30b1f84dd992b68cc01003dbcc094208.jpg.webp',
            name:'黄金烤肉饭',
            desc:'孜然味',
            contSub:{sellCount:200,upvote:100},
            count:0,
            price:200
          },{
            img:'http://p0.meituan.net/100.100.90/xianfu/1428ba3316a7dc4e77c87e9012155e8226624.jpg.webp',
            name:'白米饭',
            desc:'烧烤味',
            contSub:{sellCount:200,upvote:100},
            count:0,
            price:200
          }]
      },
      {
        name:'饮料',
        active:'',
        productList:[{
            img:'http://p0.meituan.net/100.100.90/xianfu/d782f30b1f84dd992b68cc01003dbcc094208.jpg.webp',
            name:'黄金烤肉饭',
            desc:'孜然味',
            contSub:{sellCount:200,upvote:100},
            count:0,
            price:200
          },{
            img:'http://p0.meituan.net/100.100.90/xianfu/1428ba3316a7dc4e77c87e9012155e8226624.jpg.webp',
            name:'白米饭',
            desc:'烧烤味',
            contSub:{sellCount:200,upvote:100},
            count:0,
            price:200
          }]
      }
    ],
    cart:{
      sumPrice:0,
      chooseProduct:[]
    }
    /**
     * {
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