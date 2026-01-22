---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D Candidate in Biology (Computional Biology) at the School of Life Sciences, Westlake University, advised by [Prof Weike Pei](https://www.westlake.edu.cn/faculty/weike-pei.html) & [Prof Yanxiao Zhang](https://www.westlake.edu.cn/faculty/yanxiao-zhang.html). My research focuses on decoding cell fate decision processes by integrating single-cell and spatial genomics with machine learning. Before joining Westlake, I developed algorithms for single-cell multi-omics data analysis and network inference at [Jie Wang's lab](https://jiewanglab.github.io/us/news.html) in GIBH-CAS.

I am also an amateur bodybuilder with 130KG maximal weight for bench press, 185KG maximal weight for Deadlift, and 170KG maximal weight for Squat.

# 🔈 Seeking Postdoc Opportunities

- I am actively seeking a postdoctoral position in **computational single-cell and spatial genomics** outside mainland China. I would greatly appreciate it if you could share any relevant opportunities (Please email me at jiangjunyao@westlake.edu.cn).


# 🔥 Summary of Main Research Topic

<p align="center">
  <img src="images/research.png" alt="Research Image" width="400"/>
</p>

- Cell fate decisions are crucial for understanding how pluripotent cells develop into diverse tissues, with disruptions leading to congenital abnormalities. 
- Through in vivo single-cell multiomics lineage tracing, such as DeepTrack barcoding, we have uncovered early lineage priming in the mouse embryo and reconstructed fate-resolved GRNs, identifying key regulator of mesoderm development. 
- However, direct genetic barcoding is ethically and technically unfeasible in human embryos, necessitating the development of non-invasive approaches. To address this challenge, we have developed transfer learning-based methods for in silico fate mapping, enabling the discovery of spatiotemporal fate biases through data derived from 3D human embryo.

# 📝 Publications 

†: co-first, #: correspondence

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Nature genetics (under review)</div><img src='images/fateGRN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[In vivo multimodal lineage tracing of mammalian development by DeepTrack barcoding]()

Chenyu Guo†, **Junyao Jiang†**, Xiaomin Wang†, Xinghuai Huang, Shenghu Zhang, Chenyang Shao, Mingyuan Zhang, Xiwen Hu, Wenqian Yang, Fuwei Shang, Xi Wang, Hongbo Zhai, Quan Du, Fang Liu, Danyang He, Xiaodong Liu, Guangdun Peng, Saifeng Cheng, Yanxiao Zhang#, Duanqing Pei#, Weike Pei#

Keywords: Single-cell multi-omics Lineage tracing, Mouse embryogenesis, Fate resolved GRN, Cell atlas
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Nucleic Acids Research 2024</div><img src='images/scltdb.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[scLTdb: a comprehensive single cell lineage tracing database](https://academic.oup.com/nar/article/53/D1/D1173/7848853)

**Junyao Jiang†**, Xing Ye†, Yunhui Kong†, Chenyu Guo, Mingyuan Zhang, Fang Cao, Yanxiao Zhang#, Weike Pei#

Keywords: Single-cell and spatial genomics, Lineage tracing, Online resource
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Briefing in Bioinformatics 2024</div><img src='images/cacimar.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CACIMAR: cross-species analysis of cell identities, markers, regulations, and interactions using single-cell RNA sequencing data](https://academic.oup.com/bib/article/25/4/bbae283/7690342)

**Junyao Jiang†**, Jinlian Li†, Sunan Huang, Fan Jiang, Yanran Liang, Xueli Xu#, Jie Wang#

Keywords: scRNA, Cross-species comparison, Conserved regulatory programs
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">iScience 2022</div><img src='images/irena.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[IReNA: Integrated Regulatory Network Analysis of Single-Cell Transcriptomes and Chromatin Accessibility Profiles](https://www.cell.com/iscience/fulltext/S2589-0042(22)01631-5)

**Junyao Jiang†**, Pin Lyu†, Sunan Huang, Jiawang Tao, Seth Blackshaw, Qian Jiang, Jie Wang

Keywords: Single-cell multiomics, Gene regulatory netowrk, Inter celltype regulations
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Cell Research 2025</div><img src='images/cr2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Targeting necrotic lipid release in tumors enhances immunosurveillance and cancer immunotherapy of glioblastoma](https://www.nature.com/articles/s41422-025-01155-y)

Yapeng Ji, **Junyao Jiang**, Lei Hu, Peng Lin, Mingshan Zhou, Song Hu, Minkai Wang, Yuchen Ji, Xianzhi Liu, Dongming Yan, Yang Guo, Adwait Amod Sathe, Bret M. Evers, Chao Xing, Xuelian Luo, Qi Xie, Weike Pei, Zhenyu Zhang#, Hongtao Yu#


Keywords: scRNA, Cell atlas, Glioblastoma, Cancer immunotherapy
</div>
</div>

- Yunhui Kong†, **Junyao Jiang†,#**, Weikang Kong, Sheng Qin#. DRCTdb: disease-related cell type analysis to decode cell type effect and underlying regulatory mechanisms. ***Communications Biology***, Sep 2024 (Co-first & Co-correspondence)
- Ying Xin, Pin Lyu, **Junyao Jiang**, Fengquan Zhou, Jie Wang, Seth Blackshaw, Jiang Qian. LRLoop: Feedback loops as a design principle of cell-cell communication. ***Bioinformatics***, July 2022
- Dapeng Sun†, Xiaojie Gan†, Lei Liu†, Yuan Yang†, Dongyang Ding, Wen Li, **Junyao Jiang**, et al. DNA hypermethylation modification promotes the development of hepatocellular carcinoma by depressing the tumor suppressor gene ZNF334. ***Cell Death & Disease***, May 2022

# 🎖 Awards
- *2024.10* Doctoral National Scholarship (Top 1% PhD student in China, ~4500 USD)


# 🚩 Professional Experience in Computional Biology
- *2022.08 - 2026.06*, Ph.D Candidate in **Biology (Computional Biology)** at [Westlake University](https://www.westlake.edu.cn)
- *2021.03 - 2022.06*, Research Assistant at [Guangzhou Institutes of Biomedicine and Health, Chinese Academy of Sciences](http://english.gibh.cas.cn/)
- *2020.12 - 2021.02*, Bioinformatician Intern at [Singleron Biotech](https://singleron.bio/)
- *2020.12 - 2021.02*, Master of Science in **Genomics & Bioinformatics** at [Chinese University of Hong Kong](https://www.cuhk.edu.hk/chinese/index.html)

# 📛 Mentorship
- **Xing Ye**: Undergraduate from University of Science and Technology of China, 2023.11-2024.06. (Co-first author at scLTdb project)
- **Zhi Chen**: Undergraduate from Tsinghua University, 2025.07-2025.08. (Summer research programe)
- **Jiayi Liu**: Research Assistant from Imperial College London, 2025.10-Present.

# 📞 Peer Review Service
- Nature
- Communications Biology
- Archives of Computational Methods in Engineering
- BMC Bioinformatics
- BMC Genomics
- Scientific Reports

# 💻 Maintained Software
- [IReNA](https://github.com/jiang-junyao/IReNA) Consturct gene regualtory networks based on single cell multiomics data
- [CACIMAR](https://github.com/jiang-junyao/CACIMAR) scRNA-seq based cross-species data analysis
- [FateMapper](https://github.com/jiang-junyao/FateMapper) single cell lineage tracing data analysis and visualization
- [scLTdb](https://scltdb.com) Database for single cell lineage tracing
- [FateExplorer](https://github.com/jiang-junyao/FateExplorer) Machine learning method to generate clone embedding and perform fate analysis




<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=080808&w=300&t=tt&d=Xx1pOrvX0LuT6vN5CTkSecSQdyAAcavIfDd6TYnNxkc&co=ffffff&cmo=2c89e1&cmn=ff5353&ct=808080'></script>
