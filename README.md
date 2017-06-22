# flexible
一只基于rem可伸缩布局的js库



## 手机端页面适配rem方案


### rem

rem(font size of root Element) 是指相对于根元素的字体大小单位。还有与它相似的em单位，em(font size of Element) 是指相对于父元素的字体大小单位。

默认浏览器根字体大小为16px，即1rem = 16px ; 



常见的html  font-size: 62.5% 相当于font-size: 10px 即1rem = 10px;



根据这一原理, 我们可以动态设置html 的font-size以便达到页面布局自适应。

### 实现方式

根据设计文稿的大小, 动态设置要适配的页面的根字体大小 即`html  font-size` 。



我们可以根据iphone6 设计文稿(750x1334)为例,为了计算方便 ,将根字体font-size:100px;

那么

```
1rem ==100px;
750px ==7.5rem;
```



在iphone6 真机上, 可知设备的宽高为 375 * 667, 根据等比缩放,  求 x 值;

文稿width = 750,  deviceWidth = 375 ,

 $ \frac{deviceWidth}{x}= \frac{文稿Width}{100}$ 



 即 iphone6 真机 html font-size = 50px;



说白了就是 `750` 的文稿要缩成 `375`, `414`  等尺寸, 要想等比缩放, 那就需要一个`因子` 来确定该比例 

即  **文稿width/你想假设的font-size**, 上面的`因子` 为750/100 = 7.5 ;



接下来我们来验证以上说明

假设文稿中有一 div 450px * 500 px, 那么可以用rem方式来代替

```css
.container{
  width: 4.5rem;
  height: 5rem;
}
```

在iphone 6 真机上  html font-size = 50px ; 即 1rem = 50px;  div  大小为

```javascript
 width =  4.5rem * 50 //225px
 height = 5rem * 50 //250px
```



### 如何使用

在文件头部引入`js` 即可,或者使用内联形式(推荐);

### 常见问题

1. 该方案可以通过`transform:scale(0.5)` 解决手机端`1px`像素问题
2. 对于大于`320`且 小于`540`宽度的设备进行等比缩放, 超出范围暂不做缩放处理, 如需处理需自定义边界值。
3. 处理字号问题, 淘宝不推荐用rem作为字号单位 , 需要配合`data-dpr` 属性来区分不同dpr下的字体大小。

