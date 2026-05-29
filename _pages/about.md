---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>

I am a Ph.D. student at Nanjing University. My research interests include generative world models, controllable video generation, 4D spatial memory, radar simulation, and visual scene understanding.

Before joining Nanjing University, I received my M.S. and B.S. degrees from Beihang University. My previous research covered stereo matching, autonomous driving perception, radar cube simulation, video relighting, and neural rendering.

[[CV]](files/cv.pdf) [[GitHub]](https://github.com/zhuxing0)

# 🔥 News

- *2026*: Relit-LiVE and UniVidX were accepted to SIGGRAPH 2026.
- *2026*: Ctrl-RS was accepted to CVPR 2026 Findings, and NeAR was selected as a CVPR 2026 Highlight.
- *2025*: Bilateral-Driving was accepted to NeurIPS 2025 before my Ph.D. study.
- *2025*: Started Ph.D. study at Nanjing University.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SIGGRAPH 2026</div><video src='images/relit-live.mp4' autoplay muted loop playsinline controls width="100%"></video></div></div>
<div class='paper-box-text' markdown="1">

[Relit-LiVE: Relight Video by Jointly Learning Environment Video](https://zhuxing0.github.io/projects/Relit-LiVE/)

**Weiqing Xiao**\*, Hong Li\*, Xiuyu Yang\*, Houyuan Chen, Wenyi Li, Tianqi Liu, Shaocong Xu, Chongjie Ye, Hao Zhao, Beibei Wang

[[Paper]](papers/Relit-LiVE.pdf) [[Project]](https://zhuxing0.github.io/projects/Relit-LiVE/) [[Code]](https://github.com/zhuxing0/Relit-LiVE)

- A video relighting framework that jointly predicts relit videos and viewpoint-aligned environment videos.
- Produces physically consistent and temporally stable relighting without requiring prior camera poses.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">SIGGRAPH 2026 / ToG</div><img src='images/UniVid-X.png' alt="UniVidX teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[UniVidX: A Unified Multimodal Framework for Versatile Video Generation via Diffusion Priors](https://houyuanchen111.github.io/UniVidX.github.io/)

Houyuan Chen, Hong Li, Xianghao Kong, Tianrui Zhu, Shaocong Xu, **Weiqing Xiao**, Yuwei Guo, Chongjie Ye, Lvmin Zhang, Hao Zhao, Anyi Rao

[[Paper]](papers/UniVid-X.pdf) [[Project]](https://houyuanchen111.github.io/UniVidX.github.io/)

- A unified multimodal video generation framework that leverages video diffusion priors for flexible conditional generation.
- Supports omni-directional generation across visual modalities with stochastic condition masking, decoupled gated LoRA, and cross-modal self-attention.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026 Findings</div><video src='images/ctrl-rs.mp4' autoplay muted loop playsinline controls width="100%"></video></div></div>
<div class='paper-box-text' markdown="1">

[Simulate Any Radar: Attribute-Controllable Radar Simulation via Waveform Parameter Embedding](https://zhuxing0.github.io/projects/SA-Radar/)

**Weiqing Xiao**\*, Hao Huang\*, Chonghao Zhong\*, Yujie Lin, Nan Wang, Xiaoxue Chen, Zhaoxi Chen, Saining Zhang, Shuocheng Yang, Pierre Merriaux, Lei Lei, Hao Zhao

[[Paper]](papers/Ctrl-RS.pdf) [[Project]](https://zhuxing0.github.io/projects/SA-Radar/) [[Code]](https://github.com/zhuxing0/SA-Radar)

- A controllable radar cube simulation framework conditioned on customizable radar attributes.
- Supports radar attribute editing, actor removal, novel trajectories, and improves downstream perception tasks.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026 Highlight</div><video src='images/NEAR.mp4' autoplay muted loop playsinline controls width="100%"></video></div></div>
<div class='paper-box-text' markdown="1">

[NeAR: Coupled Neural Asset-Renderer Stack](https://near-project.github.io/)

Hong Li\*, Chongjie Ye\*, Houyuan Chen, **Weiqing Xiao**, Ziyang Yan, Lixing Xiao, Zhaoxi Chen, Jianfeng Xiang, Shaocong Xu, Xuhui Liu, Yikai Wang, Baochang Zhang, Xiaoguang Han, Jiaolong Yang, Hao Zhao

[[Paper]](papers/NeAR.pdf) [[Project]](https://near-project.github.io/)

- Couples a lighting-homogenized neural asset representation with a lighting-aware neural renderer.
- Enables single-image relightable 3D generation, novel-view relighting, and material-aware rendering.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/bilateral-driving.png' alt="Bilateral Driving teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Unifying Appearance Codes and Bilateral Grids for Driving Scene Gaussian Splatting](https://bigcileng.github.io/bilateral-driving/)

Nan Wang, Yuantao Chen, Lixing Xiao, **Weiqing Xiao**, Bohan Li, Zhaoxi Chen, Chongjie Ye, Shaocong Xu, Saining Zhang, Ziyang Yan, Pierre Merriaux, Lei Lei, Tianfan Xue, Hao Zhao

[[Paper]](papers/bilateral-driving.pdf) [[Project]](https://bigcileng.github.io/bilateral-driving/)

- Introduces multi-scale bilateral grids that unify appearance codes and bilateral grids.
- Improves geometric accuracy in dynamic driving-scene Gaussian Splatting by reducing photometric-inconsistency artifacts.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME 2025</div><img src='images/UGIA-Stereo.png' alt="UGIA-Stereo teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Uncertainty-Guided Iterative Architecture for Stereo Matching](papers/UGIA-Stereo.pdf)

**Weiqing Xiao**, Fengjun Zhong, Hao Zhao

[[Paper]](papers/UGIA-Stereo.pdf)

- Introduces lightweight cost-volume-based disparity uncertainty estimation for iterative stereo matching.
- Uses uncertainty-guided update control and disparity rectification to improve stability, accuracy, and inference efficiency.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">T-ITS 2025</div><img src='images/sr-stereo.png' alt="SR-Stereo teaser" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SR-Stereo & DAPE: Stepwise Regression and Pre-trained Edges for Practical Stereo Matching](https://github.com/zhuxing0/SR-Stereov1-DAPE)

**Weiqing Xiao**, Wei Zhao

[[Paper]](papers/SR-Stereo.pdf) [[Code]](https://github.com/zhuxing0/SR-Stereov1-DAPE)

- Introduces stepwise regression for robust stereo matching across domains with different disparity distributions.
- Proposes DAPE, a domain adaptation framework using pre-trained edge pseudo-labels to improve fine-tuning with sparse ground truth.
</div>
</div>

# 🎖 Honors and Awards

- *2025*, First-Class Doctoral Scholarship, Nanjing University.
- *2023, 2024*, First-Class Graduate Academic Scholarship, Beihang University.
- *2023*, IEEE/ACM DAC System Design Contest, GPU Track, 1st Place. [[Certificate]](papers/DAC-GPU.png)
- *2023*, IEEE/ACM DAC System Design Contest, FPGA Track, 3rd Place. [[Certificate]](papers/DAC-FPGA.png)
- *2022*, Outstanding Graduate, Beihang University.

# 📖 Educations

- *2025 - Present*, Ph.D. student in Computer Science and Technology, Nanjing University.
- *2022 - 2025*, M.S. in Information and Communication Engineering, School of Electronic and Information Engineering, Beihang University.
- *2018 - 2022*, B.S. in Electronic and Information Engineering, Shenyuan Honors College, Beihang University.

# 💻 Projects

- *2025 - 2026*, Controllable world models, Beijing Academy of Artificial Intelligence.
- *2024 - 2025*, Attribute-controllable radar simulation for autonomous driving scenes, Tsinghua AIR.
- *2023 - 2024*, High-speed train fault detection with visual inspection models.
- *2023*, Lightweight detection model design and deployment acceleration for the DAC System Design Contest. [[GPU Certificate]](papers/DAC-GPU.png) [[FPGA Certificate]](papers/DAC-FPGA.png)
