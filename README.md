### flex 布局
### flex-direction  决定主轴的方向
row | row-reverse | column | column-reverse;
### flex-wrap  如果一条轴线排不下，如何换行
### flex-flow <flex-direction> || <flex-wrap>
### justify-content  项目在主轴上的对齐方式
flex-start | flex-end | center | space-between | space-around;

### align-items  定义项目在交叉轴上如何对齐
flex-start | flex-end | center | baseline | stretch
### align-content  属性定义了多根轴线的对齐方式

#### item 属性
##### order  顺序
##### flex-grow  定义项目的放大比例
##### flex-shrink  项目的缩小比例
##### flex-basis 定义了在分配多余空间之前，项目占据的主轴空间（main size）
##### flex  [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
##### align-self 单个项目有与其他项目不一样的对齐方式 
auto | flex-start | flex-end | center | baseline | stretch;