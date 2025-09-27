---
permalink: /
title: "Yiyuan (Nick) YING -- About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="btn-group" style="margin-bottom: 2em;">
    <button onclick="switchLang('en')" class="btn btn--primary">English</button>
    <button onclick="switchLang('cn')" class="btn btn--primary">中文</button>
</div>

<div id="content-en" style="display:block;">

## About Me

I am currently a first-year master's student in Intelligent Manufacturing and Robotics at [the Department of Mechanical and Energy Engineering](https://mee.sustech.edu.cn/), [Southern University of Science and Technology (SUSTech)](https://www.sustech.edu.cn/), under the supervision of [Assoc. Prof. U Kei CHEANG](http://faculty.sustech.edu.cn/?tagid=zhengyj&lang=en). 

I received my Bachelor of Engineering degree in Mechanical Design, Manufacturing and Automation from [the School of Mechanical and Power Engineering](https://mech.ecust.edu.cn/) at [East China University of Science and Technology (ECUST)](https://www.ecust.edu.cn/).

</div>

<div id="content-cn" style="display:none;">

## 关于我

我目前是[南方科技大学](https://www.sustech.edu.cn/) [机械与能源工程系](https://mee.sustech.edu.cn/)智能制造与机器人方向的一年级硕士研究生，师从[郑裕基副教授](http://faculty.sustech.edu.cn/?tagid=zhengyj&lang=en)。

我本科毕业于[华东理工大学](https://www.ecust.edu.cn/) [机械与动力工程学院](https://mech.ecust.edu.cn/)，获得机械设计制造及其自动化专业工学学士学位。

</div>

<style>
.btn-group {
    margin-bottom: 2em;
}

/* 修改超链接样式 */
a {
    color: inherit;  /* 继承父元素的颜色 */
    text-decoration: none;  /* 移除下划线 */
}

a:hover {
    text-decoration: underline;  /* 鼠标悬停时显示下划线 */
    color: #2266aa;  /* 鼠标悬停时变色 */
}

.btn--primary {
    color: #fff !important;  /* 保持按钮文字颜色为白色 */
}
</style>

<script>
function switchLang(lang) {
    if (lang === 'en') {
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-cn').style.display = 'none';
    } else {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-cn').style.display = 'block';
    }
}
</script>