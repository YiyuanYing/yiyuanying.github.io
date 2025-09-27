---
layout: archive
title: "个人简历 | Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## 个人简历 | Curriculum Vitae

<div class="btn-group">
  <button onclick="showPDF('cn')" class="btn btn--primary">中文简历</button>
  <button onclick="showPDF('en')" class="btn btn--primary">English CV</button>
</div>

[📄 下载中文简历](https://raw.githubusercontent.com/YiyuanYing/MyResume/main/resume_cn.pdf){: .btn .btn--primary}
[📄 Download English CV](https://raw.githubusercontent.com/YiyuanYing/MyResume/main/resume_en.pdf){: .btn .btn--primary}

<iframe id="cv-cn" src="https://raw.githubusercontent.com/YiyuanYing/MyResume/main/resume_cn.pdf" width="100%" height="1200px" style="display:block;">
如果无法显示 PDF，请点击上方链接下载
</iframe>

<iframe id="cv-en" src="https://raw.githubusercontent.com/YiyuanYing/MyResume/main/resume_en.pdf" width="100%" height="1200px" style="display:none;">
If PDF cannot be displayed, please click the download link above
</iframe>

<script>
function showPDF(lang) {
    if (lang === 'cn') {
        document.getElementById('cv-cn').style.display = 'block';
        document.getElementById('cv-en').style.display = 'none';
    } else {
        document.getElementById('cv-cn').style.display = 'none';
        document.getElementById('cv-en').style.display = 'block';
    }
}
</script>
<!-- 
Education
======
* Ph.D in Version Control Theory, GitHub University, 2018 (expected)
* M.S. in Jekyll, GitHub University, 2014
* B.S. in GitHub, GitHub University, 2012

Work experience
======
* Spring 2024: Academic Pages Collaborator
  * Github University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
