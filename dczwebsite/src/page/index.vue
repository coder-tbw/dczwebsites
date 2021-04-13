<template>
  <div>
    <div class="container-fluid">
      <!--定义一行-->
      <div class="row">
<!--        头部-->
        <div class = 'col-xs-12 col-lg-12 boxHead'>
            <div class="col-xs-12  col-lg-12 box-head">
                <div class = 'col-xs-2 col-lg-2 box-head-leftlogo'>
                  <img src="static/imgs/boxlogo.png">
               </div>
              <div class="col-xs-7 col-lg-7 box-headList">
                <ul>
                  <li>首页</li>
                  <li>人资服务</li>
                  <li>智慧校园</li>
                  <li>职业培训</li>
                  <li>集团动态</li>
                  <li>关于我们</li>
                  <li>数据展版</li>
                </ul>
              </div>
            </div>
            <div class = 'col-xs-12 col-lg-12 box-shuffling' >
    <!--          <img  src="static/imgs/logo.png">-->
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="static/imgs/logo.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="static/imgs/logo.png" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="static/imgs/logo.png" class="d-block w-100" alt="...">
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import indexMixin from '/dczWebsite/dczwebsite/static/index/index'
export default {
  mixins: [indexMixin]
}
</script>
<style>
.box-head{
  height: 80px;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.box-head-leftlogo{
  width: 226px;
}
.box-head-leftlogo image{
  width: 100%;
  height: 95%;
}
.box-headList{
  width: 800px;
  margin: 1px 1px 1px;
}
.box-headList ul{
  display: flex;
  flex-direction: row;
}
.box-headList ul li{
  width: 120px;
  line-height: 75px;
  list-style: none;
  color: #777777;
  font-size: 16px;
}
.box-shuffling{
  width: 100%;
  height: 738px;
  margin: 0px;
  padding: 0px;
}
.box-shuffling img{
  width: 100%;
  height: 100%;
}
.boxHead{
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
}

</style>

