const translations = {
    "en": {
        "name": "Yiyuan Ying",
        // "role": "Master Student",
        // "university": "<p>SUSTech</p><p>(Southern University of Science and Technology)</p>",
        "university": "SUSTech",
        "nav_about": "About",
        "nav_projects": "Projects",
        "nav_timeline": "Timeline",
        "nav_cv": "CV",
        "back_home": "Back to Home",
        "download_cv": "Download PDF",
        "intro_title": "About Me",
        "intro_text": `<p>
        I am currently a first-year master's student in Intelligent Manufacturing and Robotics at the Department of Mechanical and Energy Engineering, Southern University of Science and Technology (SUSTech), under the supervision of Assoc. Prof. U Kei CHEANG.
    </p>
    <p>
        I received my Bachelor of Engineering degree in Mechanical Design, Manufacturing and Automation from the School of Mechanical and Power Engineering at East China University of Science and Technology (ECUST).
    </p>`,

        "projects_title": "Projects",
        "project_view_details": "View Details",
        "back_to_projects": "Back",
        "project_open_source": "Open Source CAD",
        "project_1_title": "ROBOCON2025-Robot Basketball",
        "project_1_desc": "As the technical consultant for the ECUST 'Wu Er' team, designed the steering wheel structure and shooting mechanism for the competition robot.",
        "project_1_detail": `
            <p>The theme of the 2025 ROBOCON competition is "Robot Basketball", requiring participating teams to design robots capable of completing dribbling and shooting tasks within a specified time.</p>
            <p>As the technical consultant for the ECUST "Wu Er" team, I was primarily responsible for the mechanical structure design and guidance of the competition robots.</p>
            <p>Key contributions include:</p>
            <ul>
                <li><strong>Steering Wheel Modules:</strong> Iteratively designed two sets of steering wheel solutions during the preparation cycle.
                    <ul>
                        <li><strong>Solution 1:</strong> Adopted DM6220 hollow cup motors for direct drive steering, combined with DJI M3508 motors with custom gearboxes to drive the wheel hubs. Cross-roller bearings were added to the steering motors to improve axial load capacity. Compared to the mecanum wheel chassis used in the previous two years, this solution offered higher response speed and movement velocity.</li>
                        <li><strong>Solution 2:</strong> Based on an internal ring gear transmission structure, utilizing DJI M3508 motors without gearboxes combined with internal ring gears for steering rotation. TMotor U8 Lite disc brushless motors were selected as the hub power source, paired with DM100 drivers and custom steering magnetic encoders for closed-loop drive. This significantly increased the chassis movement speed while effectively reducing weight and improving energy density compared to the DM6220+M3508 solution.</li>
                    </ul>
                </li>
                <li><strong>Friction Launching Mechanism:</strong> Designed and compared two launching mechanisms: "three friction wheels" and "three friction belts". After multiple launch tests and analysis, the friction wheel solution had issues with excessive dispersion and inconsistent acceleration due to the small contact area with the ball. Ultimately, a three-friction-belt launching solution using 5065 motors with VESC drivers was adopted, significantly improving the uniformity of speed and direction during shooting.</li>
                <li><strong>Dribbling Mechanism:</strong> Developed two dribbling mechanisms: pneumatic grippers with Z-axis lifting and friction wheels. Subsequent testing at the competition venue revealed that the pneumatic gripper was less effective due to ground flatness and rebound issues.</li>
            </ul>
            <p>The two robots had clear divisions of labor: one could complete the full process from dribbling to shooting, while the other could quickly swap its upper structure and was equipped with the more powerful U8 steering wheels to fulfill the defensive tasks in the dribbling and competitive matches respectively.</p>
            <p>At the 2025 ROBOCON (Jiangyin), the team won <strong> National 3rd Prize in the main competition, 2nd Prize in Dribbling, and 3rd Prize in Shooting</strong>. Previously, at the National Exchange Competition held at South China University of Technology (May 2025), we secured <strong> National 2nd Prize and the Best Technology Award</strong>. Subsequently, the project 'Intelligent Basketball Training Platform' (derived from one of the robots) won <strong>National 2nd Prize</strong> in the 2025 China College Students Mechanical Engineering Innovation and Creativity Competition</p>
        `,
        "project_1_img1_caption": "DM6220+M3508 Steering Wheel Module",
        "project_1_img2_caption": "M3508+U8 Lite Steering Wheel Module",
        "project_1_img3_caption": "R1 Robot in ROBOCON 2025 Competition",
        "project_1_img4_caption": "R2 Robot in ROBOCON 2025 Competition",
        "project_1_img5_caption": "Group photo of ECUST 'Wu Er' team members in 2025 season",
        "project_2_title": "ROBOCON2024-Harvest Day",
        "project_2_desc": "As the Vice Captain and Mechanical Group Leader of the ECUST 'Wu Er' team, designed the complete vehicle structure for the competition robot.",
        "project_2_detail": `
            <p>The theme of the 2024 ROBOCON competition was "Harvest Day." It required teams to design two robots capable of completing gripping, throwing, and transporting tasks within a limited time. Robot 1 (R1) was tasked with picking and placing seedlings in Zones 1 & 2, as well as gripping and passing grains. Robot 2 (R2) was required to fully autonomously grab specific grains in Zone 3 and deposit them into silos.</p>
            <p>As the <strong>Vice Captain and Mechanical Group Leader</strong> of the ECUST "Wu Er" team, I led the complete vehicle mechanical design of R1 and participated in the structural design of R2. I was also responsible for daily team management and operations, including organizing multiple mechanical training sessions during recruitment to enhance the team's overall technical proficiency and workflow efficiency.</p>
            <p>Key contributions include:</p>
            <ul>
                <li><strong>Chassis Structural Design:</strong> Developed two sets of Mecanum wheel chassis systems driven by DJI M3508 motors. One utilized off-the-shelf wheels directly driven by the motor shaft, offering a simple structure but subjecting the shaft system to significant <strong>bending moment loads</strong>. The other featured <strong>custom Mecanum wheels with an embedded design</strong> to enhance chassis compactness and the stable load-bearing capacity of the shaft system.</li>
                <li><strong>Gripping & Transfer Mechanisms:</strong> Implemented a <strong>gantry-style robotic arm</strong> on R1 for the simultaneous picking and placing of multiple seedlings. Integrated a <strong>2-DOF robotic arm</strong> combined with a <strong>stored-energy ejection mechanism</strong> at the rear of R1 to transfer grains to Zone 3. On R2, deployed a <strong>4-DOF robotic arm</strong> equipped with a <strong>ducted fan</strong> to achieve vacuum suction and placement of grains.</li>
            </ul>
            <p>The team secured <strong>National 3rd Prize in the Main Competition</strong> and <strong>National 2nd Prize in the Operation Skills Challenge</strong> at the 2024 ROBOCON National Championship. Subsequently, the "Autonomous Beverage Delivery Robot" project (based on the R1 platform) won <strong>National 3rd Prize</strong> in the 2024 China College Students Mechanical Engineering Innovation and Creativity Competition and <strong>1st Prize</strong> in the Yangtze River Delta Division.</p>
        `,
        "project_2_img1_caption": "R1 Robot in Competition",
        "project_2_img2_caption": "R2 Robot in Competition",
        "project_2_img3_caption": "Group photo of ECUST 'Wu Er' team members in 2024 season",
        "project_3_title": "Research on Multimodal Robot Perception & Interaction",
        "project_3_desc": "Designed a robotic leg structure tailored for planetary surface environments and achieved stable, efficient autonomous crawling control based on reinforcement learning.",
        "project_4_title": "Research on Space Target Situational Awareness and Evaluation",
        "project_4_desc": "Integrated vision algorithms with LLM reasoning to enable space target tracking, as well as active perception and manipulation by a robotic arm under constrained field-of-view conditions.",
        "project_5_title": "Development of Intelligent Charging System for Future Parking Lots",
        "project_5_desc": "Designed and developed a novel intelligent charging system based on a two-dimensional mobile mechanism, significantly enhancing charging efficiency.",

        "btn_training_video": "Training Video",
        "btn_demo_video_1": "Demo Video 1",
        "btn_demo_video_2": "Demo Video 2",
        "btn_open_source_drawings": "Open Source CAD",

        "timeline_title": "Timeline",
        "timeline_1_date": "2025.7",
        "timeline_1_title": "ROBOCON 2025 'Robot Basketball' National Championship",
        "timeline_1_desc": "Won National 3rd Prize (Main), 2nd (Dribbling), and 3rd (Shooting). Also achieved National 2nd and Regional 1st Prize in the 2025 Mechanical Engineering Innovation Competition.",
        "timeline_2_date": "2025.5",
        "timeline_2_title": "ROBOCON 2025 'Robot Basketball' National Exchange Competition",
        "timeline_2_desc": "Awarded National 2nd Prize and the Best Technology Award.",
        "timeline_3_date": "2024.7",
        "timeline_3_title": "ROBOCON 2024 'Harvest Day' National Championship",
        "timeline_3_desc": "Won National 3rd Prize (Main) and 2nd Prize (Skills Challenge). Also achieved National 3rd and Regional 1st Prize in the 2024 Mechanical Engineering Innovation Competition.",
        "timeline_4_date": "2023.9",
        "timeline_4_title": "'The Future Of Energy for Mobility' Creative Competition",
        "timeline_4_desc": "Invited by OPmobility and SoScience to Paris, France, to showcase the 'Intelligent Charging System for Future Parking' project at 'The Future Of Energy for Mobility'.",
        "timeline_5_date": "2023.8",
        "timeline_5_title": "2023 China College Students Mechanical Engineering Innovation and Creativity Competition",
        "timeline_5_desc": "Won National 3rd Prize, Regional 1st Prize, and Shanghai Municipal 1st Prize, along with multiple other provincial and university-level awards.",
        
        "contact_title": "Contact",
        "toggle_lang": "中文"
    },
    "zh": {
        "name": "应一源",
        // "role": "硕士研究生",
        "university": "南方科技大学",
        "nav_about": "个人介绍",
        "nav_projects": "项目经历",
        "nav_timeline": "时间轴",
        "nav_cv": "简历",
        "back_home": "返回主页",
        "download_cv": "下载 PDF",
        "intro_title": "个人介绍",
        "intro_text": `<p>我目前是南方科技大学机械与能源工程系智能制造与机器人专业的硕士一年级研究生，导师是郑裕基副教授。</p>
        <p>我本科毕业于华东理工大学机械与动力工程学院，获得机械设计制造及其自动化专业工学学士学位。</p>`,
        
        "projects_title": "项目经历",
        "project_view_details": "查看详情",
        "back_to_projects": "返回",
        "project_open_source": "开源图纸",
        "project_1_title": "ROBOCON2025-飞身上篮",
        "project_1_desc": "作为华东理工大学“无贰”战队的技术顾问，设计了用于参赛机器人的舵轮结构与投篮机构。",
        "project_1_detail": `
            <p>2025年的ROBOCON赛事的主题为“飞身上篮”，要求参赛队设计能够在规定时间内完成运球与投篮任务的机器人。</p>
            <p>作为华东理工大学“无贰”战队的技术顾问，我主要负责参赛机器人的机械结构设计与指导工作。</p>
            <p>主要贡献包括：</p>
            <ul>
                <li><strong>舵轮模组：</strong>在备赛周期中迭代设计了两套舵轮轮组方案。
                    <ul>
                        <li><strong>方案一：</strong>采用DM6220中空电机实现直驱转向，配合定制减速箱的DJI M3508电机驱动轮毂，同时在舵向电机处加入交叉滚子轴承以提高轴向受力能力，相较于前两年参赛机器人中使用的麦轮底盘具备较高响应速度与运动速度；</li>
                        <li><strong>方案二：</strong>基于内齿圈传动结构，利用无减速箱的DJI M3508配合内齿圈实现舵向转动，选用TMotor U8 Lite盘式无刷电机作为轮毂动力源，并配合DM100驱动与自制舵向磁编码器以完成闭环驱动，大幅提升了底盘移动速度，同时相较于DM6220+M3508舵轮方案能有效减重与提高能量密度。</li>
                    </ul>
                </li>
                <li><strong>摩擦发射机构：</strong>设计并对比了“三摩擦轮”与“三摩擦带”两种发射机构。经多次发射测试分析，摩擦轮方案存在球体接触面积小导致的散布过大与加速不一致问题，最终采用了使用5065电机配合VESC驱动的三摩擦带发射方案，显著提升了投篮时出射的速度与方向均一性。</li>
                <li><strong>运球机构：</strong>开发了配合Z轴升降的气动夹爪与摩擦轮两套运球机构。后续在赛场时的测试发现，由于场地地面平整度与回弹的原因，气缸夹爪的效果并不理想。</li>
            </ul>
            <p>两台机器人有着较为明确的分工：一台可完整运球到投篮的全流程，另一台则可快速更换上部结构，并配合动力更强的U8舵轮，以分别完成运球赛与竞技赛中防守的任务需求。</p>
            <p>团队在2025年ROBOCON江阴赛区中获“飞身上篮”赛项<strong>竞技赛全国三等奖，运球赛全国二等奖与投篮赛全国三等奖</strong>。此前参加了2025年5月于华南理工大学举办的2025年ROBOCON全国交流赛并获得“飞身上篮”赛项交流赛<strong>全国二等奖与最佳技术奖</strong>。此后以其中一台机器人为主体的“青出于篮——智能化篮球训练平台”项目获得2025年中国大学生机械工程创新创意大赛<strong>全国二等奖与长三角赛区一等奖</strong>。</p>
        `,
        "project_1_img1_caption": "DM6220+M3508舵轮轮组",
        "project_1_img2_caption": "M3508+U8 Lite舵轮轮组",
        "project_1_img3_caption": "比赛中的R1机器人",
        "project_1_img4_caption": "比赛中的R2机器人",
        "project_1_img5_caption": "2025赛季华东理工大学”无贰“战队队员合影",
        "project_2_title": "ROBOCON2024-颗粒归仓",
        "project_2_desc": "作为华东理工大学“无贰”战队的副队长与机械组组长，设计了一台参赛机器人的整车结构。",
        "project_2_detail": `
            <p>2024年的ROBOCON赛事的主题为“颗粒归仓”，要求参赛队设计两台能够在规定时间内完成抓取、投掷与搬运任务的机器人，其中一台（R1）要求能在一区与二区完成夹取放置秧苗、夹取并传递谷物的任务；另一台（R2）要求能在三区全自动地抓取特定的谷物并放置入筒仓之中。</p>
            <p>作为华东理工大学“无贰”战队的副队长与机械组组长，我主要负责R1的整车机械结构设计工作，同时也参与了R2的结构设计工作。此外还负责战队的日常管理与运营工作，包括在招新期间组织多次机械组培训，提高团队整体的技术水平和工作效率。</p>
            <p>主要贡献包括：</p>
            <ul>
                <li><strong>底盘结构设计：</strong>设计了两套使用DJI M3508电机驱动的麦轮底盘，其中一套使用成品麦轮并通过M3508的电机轴输出，结构简单但对电机轴系有较大的弯矩载荷；另一套则使用内嵌结构设计的定制麦轮以提升底盘的紧凑性与轴系的稳定承载能力。</li>
                <li><strong>夹取与传递机构：</strong>在R1上使用了龙门架构型的机械臂完成多个秧苗的同时夹取与放置，在R1后部采用了一组双自由度机械臂配合蓄能弹射机构用于将谷物传递至三区。在R2上使用了一个四自由度机械臂并配合涵道风扇完成对谷物的吸取与放置。</li>
            </ul>
            <p>团队在2024年ROBOCON全国赛中获“颗粒归仓”赛项<strong>竞技赛全国三等奖与操作技能挑战赛全国二等奖</strong>。此后以R1机器人为主体的“自主饮料配送机器人”项目获得2024年中国大学生机械工程创新创意大赛<strong>全国三等奖与长三角赛区一等奖</strong>。</p>
        `,
        "project_2_img1_caption": "比赛中的R1机器人",
        "project_2_img2_caption": "比赛中的R2机器人",
        "project_2_img3_caption": "2024赛季华东理工大学”无贰“战队队员合影",
        "project_3_title": "多模态机器人感知与交互系统的研究",
        "project_3_desc": "设计了面向星表环境的机器人腿部结构，并基于强化学习实现了稳定高效的自主爬行控制。",
        "project_4_title": "空间目标态势感知、博弈与评估方法的研究",
        "project_4_desc": "融合视觉算法与LLM推理，实现空间目标跟踪及受限视野下的机械臂主动感知与操作。",
        "project_5_title": "未来停车场智能充电系统设计开发",
        "project_5_desc": "设计开发了一种基于二维移动机构的新型智能充电系统，大幅提升充电效率。",

        "btn_training_video": "培训视频",
        "btn_demo_video_1": "演示视频1",
        "btn_demo_video_2": "演示视频2",
        "btn_open_source_drawings": "开源图纸",

        "timeline_title": "时间轴",
        "timeline_1_date": "2025.7",
        "timeline_1_title": "2025年全国大学生机器人大赛ROBOCON“飞身上篮”全国赛",
        "timeline_1_desc": "获“飞身上篮”赛项竞技赛全国三等奖，运球赛全国二等奖与投篮赛全国三等奖，参赛机器人后续还获2025年中国大学生机械工程创新创意大赛全国二等奖与长三角赛区一等奖。",
        "timeline_2_date": "2025.5",
        "timeline_2_title": "2025年全国大学生机器人大赛ROBOCON“飞身上篮”全国交流赛",
        "timeline_2_desc": "获“飞身上篮”赛项交流赛全国二等奖与最佳技术奖。",
        "timeline_3_date": "2024.7",
        "timeline_3_title": "2024年全国大学生机器人大赛ROBOCON“颗粒归仓”全国赛",
        "timeline_3_desc": "获”颗粒归仓“赛项竞技赛全国三等奖，操作技能挑战赛全国二等奖，参赛机器人后续还获2024年中国大学生机械工程创新创意大赛全国三等奖与长三角赛区一等奖。",
        "timeline_4_date": "2023.9",
        "timeline_4_title": "“交通出行能源的未来(The Future Of Energy for Mobility)”创意大赛",
        "timeline_4_desc": "设计的“未来停车场智能充电系统”项目受彼欧集团(OPmobility)和SoScience邀请赴法国巴黎参加“交通出行能源的未来(The Future Of Energy for Mobility)”创意大赛展示。",
        "timeline_5_date": "2023.8",
        "timeline_5_title": "2023年中国大学生机械工程创新创意大赛",
        "timeline_5_desc": "设计的“未来停车场智能充电系统”项目获得全国三等奖与长三角赛区一等奖，此前还获得第十二届上海市大学生机械工程创新大赛一等奖等多项省部级与校级奖项。",
        
        "contact_title": "联系方式",
        "toggle_lang": "English"
    }
};
