const translations = {
    "en": {
        "page_title_home": "Yiyuan Ying | Personal Homepage",
        "page_title_project1": "ROBOCON2025 - Robot Basketball",
        "page_title_project2": "ROBOCON2024 - Harvest Day",
        "page_title_project3": "Multimodal Robot Perception & Interaction",
        "page_title_project4": "Research on Space Target Situational Awareness and Evaluation",
        "page_title_project5": "Development of Intelligent Charging System for Future Parking Lots",
        "page_title_cv": "CV | Yiyuan Ying",
        "name": "Yiyuan Ying",
        // "role": "Master Student",
        // "university": "<p>SUSTech</p><p>(Southern University of Science and Technology)</p>",
        "university": "SUSTech",
        "nav_about": "About",
        "nav_projects": "Projects",
        "nav_timeline": "Timeline",
        "nav_summary": "Summary",
        "nav_cv": "CV",
        "back_home": "Back to Home",
        "download_cv": "Download PDF",
        "intro_title": "About Me",
        "intro_text": `<p>I am currently a first-year master's student at the Department of Mechanical and Energy Engineering, Southern University of Science and Technology (SUSTech), under the supervision of <a href="https://faculty.sustech.edu.cn/?tagid=zhengyj&go=2&lang=en" target="_blank">Assoc. Prof. U Kei CHEANG</a>.</p>
        <p>I received my Bachelor of Engineering degree in Mechanical Design, Manufacturing and Automation from the School of Mechanical and Power Engineering at East China University of Science and Technology (ECUST).</p>
        <p>Through several years of competition experience and project practice, I have primarily focused on mechanical structure design, developing a solid foundation in mechanical system modeling and engineering implementation. In addition, I have participated in projects related to reinforcement-learning-based intelligent control and visual perception, gaining practical experience at the algorithmic level.</p>
        `,

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
        "project_3_detail": `
            <p><strong>Project Background:</strong> This project is a collaboration with the Shanghai Xiaoyuan Innovation Center, supervised by Prof. Jianjun Yi and Dr. Liwei Chen. It aims to address the challenges of autonomous attachment and stable crawling for space robots on complex spacecraft surfaces, such as satellite solar panels.</p>
            <h4>Key Achievements and Technical Innovations:</h4>
            
            <div class="feature-list">
                <h4>1. Innovative Design of Multi-Modal Robot Mechanism</h4>
                <ul>
                    <li><strong>6-DOF Bio-Inspired Leg Structure:</strong> Designed a 6-degree-of-freedom leg structure specifically for spacecraft surface environments, functioning as both a "manipulator arm" and a "walking leg," supporting switching between bipedal and multi-pedal configurations.</li>
                    <li><strong>Lightweight and Modular Design:</strong> Utilized topology optimization with 3D-printed materials, integrated with DM-Joint motors; the end-effector supports rapid switching between wheeled, footed, and gripper modules to adapt to various tasks.</li>
                </ul>

                <h4>2. Reinforcement Learning Control Framework Fused with Imitation Learning (RL + IL)</h4>
                <ul>
                    <li><strong>Teacher-Student Policy:</strong> Constructed a hybrid control architecture based on PPO and SAC algorithms. The <em>Teacher Policy</em> collects demonstration data in a noise-free environment to generate high-quality trajectories and optimal action sequences; the <em>Student Policy</em> aligns with teacher trajectories while incorporating noisy environmental observations, learning a policy model with strong transferability and generalization capabilities.</li>
                    <li><strong>Reward Fusion Mechanism (RFM):</strong> The core algorithm integrates Proximal Policy Optimization (PPO) and Soft Actor-Critic (SAC) with a Reward Fusion Mechanism (RFM). This dynamically balances foot-end stability, whole-body posture, energy consumption, and trajectory tracking accuracy within the reward function.</li>
                    <li>Verified that the robot can achieve stable autonomous crawling along the edges of solar panels relying solely on proprioception and noisy observations.</li>
                </ul>
            </div>
            
            <p>The robot successfully learned stable crawling gaits for flexible solar panels in both simulation and physical emulation environments, demonstrating the effectiveness of this embodied intelligence framework in complex extraterrestrial environments such as microgravity.</p>
        `,
        "project_3_img1_caption": "Robot Algorithm Framework",
        "project_3_img2_caption": "Autonomous Crawling Simulation",
        "btn_code": "Code",
        "project_4_title": "Research on Space Target Situational Awareness and Evaluation",
        "project_4_desc": "Integrated vision algorithms with LLM reasoning to enable space target tracking, as well as active perception and manipulation by a robotic arm under constrained field-of-view conditions.",
        "project_4_detail": `
        <p><strong>Project Background:</strong> With the deepening of space exploration, the capture and on-orbit servicing of non-cooperative spacecraft (such as uncontrolled satellites and space debris) have become critical challenges. Traditional methods rely on prior models of the target and pre-defined keypoints, making it difficult to cope with unknown targets lacking cooperative markers. This project aims to establish a complete solution ranging from visual perception to robotic arm manipulation.</p>

        <p><strong>Core Technologies and Methods:</strong></p>
        <div class="feature-list">
        <h4>1. Multi-scale Visual Perception System</h4>
            <ul>
                <li><strong>Long-range Dim Target Tracking:</strong> Targeting dim objects against deep space backgrounds, background subtraction and kinematic screening algorithms are utilized to efficiently achieve continuous detection and trajectory locking of pixel-level point targets.</li>
                <li><strong>Simulation Environment for Dataset Generation:</strong> Addressing the pain point of space data scarcity, a dual-source data platform combining "Unity3D Virtual Simulation + 3D-Printed Darkroom Physical Simulation" was constructed. By simulating real orbital lighting and camera imaging parameters, high-fidelity large-scale training datasets were generated, effectively narrowing the gap between simulation and reality.</li>
            </ul>

            <h4>2. LLM-based Embodied Intelligent Game</h4>
            <ul>
                <li><strong>Heuristic Task Planning:</strong> To address the challenges of "limited field of view" and "component occlusion" during close-range operations, a heuristic planning framework based on Large Language Models (LLMs) was innovatively proposed. The system converts visual observations (YOLO) into semantic descriptions and leverages the LLM's intrinsic prior knowledge of spacecraft structures (e.g., "engines are usually located on the face opposite the solar panels") to infer the location of invisible components.</li>
                <li><strong>Active Perception Closed-Loop:</strong> An "Observation-Reasoning-Action" closed-loop mechanism was established. The robotic arm avoids blind searching and instead actively adjusts its observation viewpoint based on LLM reasoning results, achieving precise localization and grasping of occluded targets within a local field of view, significantly improving the task success rate.</li>
            </ul>
        </div>

        <p>This project successfully achieved stable identification and tracking of non-cooperative targets under complex lighting and occlusion environments, validated the application potential of LLMs in intelligent decision-making for space robots, and provided a new technical pathway for on-orbit servicing missions.</p>
        `,
        "project_4_img1_caption": "Overall technical scheme for non-cooperative target recognition under large distance span",
        "project_4_img2_caption": "Construction and verification of virtual and real simulation environment for non-cooperative target recognition",
        "project_4_img3_caption": "Algorithm framework for LLM-driven robotic arm task execution",
        "project_4_img4_caption": "Experimental results of LLM-driven robotic arm task execution algorithm",

        "project_5_title": "Development of Intelligent Charging System for Future Parking Lots",
        "project_5_desc": "Designed and developed a novel intelligent charging system based on a two-dimensional mobile mechanism, significantly enhancing charging efficiency.",
        "project_5_detail": `
        <p>Targeting the conflict between the surging number of new energy vehicles and the insufficiency of fixed charging piles, as well as resource wastage issues such as fuel vehicles occupying spots and vehicles remaining after charging caused by the existing "one-pile-per-space" model, this project developed an automated power distribution system based on two-dimensional mobile guide rails, aiming to achieve efficient power scheduling of "one-pile-serving-multiple-spaces".</p>
        <h4>Main Technical Solutions and Innovations:</h4>
        <div class="feature-list">
            <h4>1. Mechanical Structure: 2D Mobile Power Distribution and Functional Modules</h4>
            <ul>
                <li><strong>2D Guide Rail Mobile Mechanism:</strong> Abandoning traditional fixed or 1D mobile solutions, an XY-axis 2D mobile platform based on a belt drive mechanism was designed. This mechanism combines ultrasonic sensor modules for position sensing and controls stepper motors to achieve precise 2D positioning of the power distribution unit at the top of the parking lot, significantly expanding the charging coverage range.</li>
                <li><strong>Power Distribution Module (Gear Relay Structure):</strong> The core distribution unit adopts a mechanical relay structure where gears drive racks. Gear rotation drives two side racks to move in opposite directions, bringing the pantograph into contact with the power grid. Compared to traditional electromagnetic relays, this mechanical structure offers higher stability and safety under high voltage and high power transmission. In non-working states, the pantograph automatically retracts into an insulated enclosure to ensure safety.</li>
                <li><strong>Integrated Cleaning Module:</strong> A scissor-type telescopic structure and a vacuuming device are integrated into the mobile base. Utilizing charging intervals, the system automatically cleans dust from the vehicle chassis by controlling the X-axis via a lead screw and the Y-axis via the scissor structure, achieving composite utilization of functions.</li>
            </ul>
            <h4>2. Control System Architecture</h4>
            <ul>
                <li>Uses Raspberry Pi 4B as the edge server, responsible for communicating with the cloud, receiving user commands, and running scheduling algorithms; uses Arduino Mega 2560 with TB6600 drivers to control stepper motors and execute specific motion logic.</li>
                <li>Low-power long-distance transmission between Arduino and Raspberry Pi is achieved via LoRa modules; the Raspberry Pi interacts with the MySQL cloud database via Wi-Fi to realize real-time data synchronization between the user mini-program end and the hardware end.</li>
            </ul>
            <h4>3. Algorithm Optimization: Priority-Based Time-Domain Scheduling</h4>
            <ul>
                <li>Based on collected real-world parking and charging data (including SOC, stay duration, etc.), cluster analysis and gap assessment of charging demands were conducted.</li>
                <li>Drawing on operating system process scheduling concepts, a time-domain optimization algorithm for the charging process was designed. The system calculates dynamic priorities based on the vehicle's current SOC and estimated departure time.</li>
                <ul>
                    <li>Prioritizes "urgently needed charging" vehicles (priority ≤ 0) and postpones non-urgent demands to achieve intelligent sorting.</li>
                    <li>Simulation results show that the algorithm effectively achieved "peak shaving and valley filling". After application, the station's peak charging power decreased by 55.56%, and the comprehensive utilization rate of charging piles increased by about 2.5 times (from 11.99% to 29.98%).</li>
                </ul>
            </ul>
        </div>
        <p>The project completed the manufacturing and debugging of a complete second-generation prototype involving belt transmission, gear relay power distribution, and cleaning modules, verifying the rationality of the mechanical structure and the stability of the control system. A companion WeChat mini-program was also developed, realizing a complete loop of parking space reservation, charging status monitoring, and fee settlement.</p>
        <p>The project won multiple national, provincial, and university-level awards, including the National Third Prize and Yangtze River Delta Region First Prize in the 2023 Chinese College Students Mechanical Engineering Innovation and Creativity Competition, and the First Prize in the 12th Shanghai College Students Mechanical Engineering Innovation Competition. In addition, the project was recognized by OPmobility (Plastic Omnium) and was invited to participate in "The Future Of Energy for Mobility" innovation challenge showcase hosted by OPmobility and SoScience in Paris, France, in September 2023.</p>
        `,
        "project_5_img1_caption": "Preliminary Data Analysis",
        "project_5_img2_caption": "Mechanical Structure Diagram",

        "btn_training_video": "Training Video",
        "btn_demo_video_1": "Demo Video 1",
        "btn_demo_video_2": "Demo Video 2",
        "btn_open_source_drawings": "Open Source CAD",

        "timeline_title": "Timeline",
        "timeline_sustech_enroll_date": "2025.9",
        "timeline_sustech_enroll_title": "Master's Enrollment at SUSTech",
        "timeline_sustech_enroll_desc": "Enrolled in the Department of Mechanical and Energy Engineering at Southern University of Science and Technology (SUSTech) for a Master's degree, majoring in Intelligent Manufacturing and Robotics.",
        "timeline_ecust_grad_date": "2025.6",
        "timeline_ecust_grad_title": "Bachelor's Graduation from ECUST",
        "timeline_ecust_grad_desc": "Graduated from East China University of Science and Technology (ECUST) with a Bachelor of Engineering degree, and was awarded honors such as Outstanding Graduate of the University.",
        "timeline_ecust_enroll_date": "2021.9",
        "timeline_ecust_enroll_title": "Bachelor's Enrollment at ECUST",
        "timeline_ecust_enroll_desc": "Enrolled in the School of Mechanical and Power Engineering at East China University of Science and Technology (ECUST) for undergraduate studies, majoring in Mechanical Design, Manufacturing and Automation.",
        "timeline_1_date": "2025.7",
        "timeline_1_title": "ROBOCON 2025 'Robot Basketball' National Championship",
        "timeline_1_desc": "Representing ECUST, won the National 3rd Prize in the Main Competition, 2nd Prize in Dribbling, and 3rd Prize in Shooting in the 'Robot Basketball' event. The participating robot subsequently won the National 2nd Prize and Regional 1st Prize in the 2025 China College Students Mechanical Engineering Innovation and Creativity Competition.",
        "timeline_2_date": "2025.5",
        "timeline_2_title": "ROBOCON 2025 'Robot Basketball' National Exchange Competition",
        "timeline_2_desc": "Representing ECUST, won the National 2nd Prize and the Best Technology Award in the 'Robot Basketball' National Exchange Competition.",
        "timeline_3_date": "2024.7",
        "timeline_3_title": "ROBOCON 2024 'Harvest Day' National Championship",
        "timeline_3_desc": "Representing ECUST, won the National 3rd Prize in the Main Competition and 2nd Prize in the Operation Skills Challenge in the 'Harvest Day' event. The participating robot subsequently won the National 3rd Prize and Regional 1st Prize in the 2024 China College Students Mechanical Engineering Innovation and Creativity Competition.",
        "timeline_4_date": "2023.9",
        "timeline_4_title": "'The Future Of Energy for Mobility' Creative Competition",
        "timeline_4_desc": "Invited by OPmobility and SoScience to Paris, France, to showcase the 'Intelligent Charging System for Future Parking' project at 'The Future Of Energy for Mobility'.",
        "timeline_5_date": "2023.8",
        "timeline_5_title": "2023 China College Students Mechanical Engineering Innovation and Creativity Competition",
        "timeline_5_desc": "Won National 3rd Prize, Regional 1st Prize, and Shanghai Municipal 1st Prize, along with multiple other provincial and university-level awards.",
        
        "year_end_summary_title": "Year-end Summary",
        "year_end_summary_2025_caption": "2025 Photography Summary",
        "year_end_summary_caption": "2024 Photography Summary",

        "contact_title": "Contact",
        "toggle_lang": "中文"
    },
    "zh": {
        "page_title_home": "应一源 | 个人主页",
        "page_title_project1": "ROBOCON2025 - 飞身上篮",
        "page_title_project2": "ROBOCON2024 - 颗粒归仓",
        "page_title_project3": "多模态机器人感知与交互",
        "page_title_project4": "空间目标态势感知、博弈与评估方法的研究",
        "page_title_project5": "未来停车场智能充电系统设计开发",
        "page_title_cv": "简历 | 应一源",
        "name": "应一源",
        // "role": "硕士研究生",
        "university": "南方科技大学",
        "nav_about": "个人介绍",
        "nav_projects": "项目经历",
        "nav_timeline": "时间轴",
        "nav_summary": "年终总结",
        "nav_cv": "简历",
        "back_home": "返回主页",
        "download_cv": "下载 PDF",
        "intro_title": "个人介绍",
        "intro_text": `
        <p>我目前是南方科技大学机械与能源工程系的硕士一年级研究生，导师是<a href="https://faculty.sustech.edu.cn/?tagid=zhengyj&go=2&lang=en" target="_blank">郑裕基副教授</a>。</p>
        <p>我本科毕业于华东理工大学机械与动力工程学院，获得机械设计制造及其自动化专业工学学士学位。</p>
        <p>在过去数年的参赛经历与项目实践中，我主要负责机械结构设计，具备较为扎实的机械系统建模与工程实现能力。同时，我也曾参与基于强化学习的智能控制与视觉感知相关项目，在算法层面具备一定的实践经验。</p>
        `,
        
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
        "project_3_detail": `
            <p><strong>项目背景：</strong>本项目为上海霄元创新中心合作项目，由易建军教授与陈李炜博士指导。旨在解决空间机器人在卫星太阳能帆板等复杂星表结构上的自主吸附与稳定爬行难题。</p>
            <h4>主要研究成果与技术创新：</h4>
            
            <div class="feature-list">
                <h4>1. 多模态机器人机构创新设计</h4>
                <ul>
                    <li><strong>6-DOF仿生腿部结构：</strong>针对航天器表面工作环境设计了兼具“机械臂操作”与“足式行走”功能的6自由度腿部，且可支持双足/多足构型切换。</li>
                    <li><strong>轻量化与模块化设计：</strong>采用3D打印材料进行拓扑优化设计，配合达妙关节电机；机械臂末端支持轮式/足式/夹爪等多种末端执行器的快速更换。</li>
                </ul>

                <h4>2. 融合模仿学习的强化学习控制框架 (RL + IL)</h4>
                <ul>
                    <li><strong>教师-学生策略：</strong>构建了基于 PPO 与 SAC 算法的混合控制架构。教师策略通过在无噪声环境中采集示教数据,构建高质量轨迹,获得表现最优的动作序列,用以指导后续策略学习；学生策略通过与教师轨迹对齐并结合实际带噪声环境观测，学习出具有迁移性和泛化能力的策略模型</li>
                    <li><strong>多重奖励融合机制 (RFM)：</strong>算法核心融合了 PPO (Proximal Policy Optimization) 与 SAC (Soft Actor-Critic)，结合多重奖励融合机制（Reward Fusion Mechanism, RFM），在奖励函数中动态平衡了足端稳定性、全身姿态、能耗及轨迹跟踪精度 。</li>
                    <li>验证了机器人能够在仅依赖本体感知（Proprioception）和带噪声观测的情况下，在太阳能帆板边缘实现稳定的自主爬行。</li>
                </ul>
            </div>
            
            <p>机器人成功在仿真及物理模拟环境中习得了针对柔性太阳能帆板的稳定爬行步态，证明了该具身智能框架在微重力等复杂地外环境下的有效性。</p>
        `,
        "project_3_img1_caption": "机器人算法框架",
        "project_3_img2_caption": "自主爬行仿真",
        "btn_code": "Code",
        "project_4_title": "空间目标态势感知、博弈与评估方法的研究",
        "project_4_desc": "融合视觉算法与LLM推理，实现空间目标跟踪及受限视野下的机械臂主动感知与操作。",
        "project_4_detail": `
        <p><strong>项目背景：</strong> 随着太空探索的深入，非合作航天器（如失控卫星、太空垃圾）的捕获与在轨服务成为亟待解决的难题。传统方法依赖目标先验模型与预定义关键点，难以应对无合作标识的未知目标。本项目旨在建立一套从视觉感知到机械臂操作的完整解决方案。</p>

        <p><strong>核心技术与方法：</strong></p>
        <div class="feature-list">
        <h4>1. 多尺度视觉感知系统</h4>
            <ul>
                <li><strong>远距离弱小目标追踪：</strong> 针对深空背景下的微弱目标，利用背景差分法与运动学筛选算法，可以高效实现对像素级点目标的连续侦测与轨迹锁定。</li>
                <li><strong>搭建仿真环境生成数据集：</strong> 针对太空数据稀缺痛点，搭建了“Unity3D 虚拟仿真 + 3D 打印暗室物理仿真”的双源数据平台。通过模拟真实轨道光照与相机成像参数，生成了高保真的大规模训练数据集，有效缩小了仿真与现实的差距。</li>
            </ul>

            <h4>2. 基于 LLM 的具身智能博弈</h4>
            <ul>
                <li><strong>启发式任务规划：</strong> 针对近距离操作中“视野受限”与“部件遮挡”的难题，创新性提出基于大语言模型（LLM）的启发式规划框架。系统将视觉观测（YOLO）转化为语义描述，利用 LLM 内置的航天器结构先验知识（如“发动机通常位于背离帆板面”），推理不可见部件的方位。</li>
                <li><strong>主动感知闭环：</strong> 建立了“观测-推理-行动”的闭环机制。机械臂不再盲目搜索，而是根据 LLM 的推理结果主动调整观测视角，在局部视野下实现了对遮挡目标的精准定位与抓取，显著提升了任务成功率。</li>
            </ul>
        </div>

        <p>本项目成功实现了在复杂光照及遮挡环境下对非合作目标的稳定识别与追踪，验证了 LLM 在空间机器人智能决策中的应用潜力，为在轨服务任务提供了新的技术路径。</p>
        `,
        "project_4_img1_caption": "大距离跨度下对非合作目标识别的整体技术方案",
        "project_4_img2_caption": "非合作目标识别虚拟与现实仿真环境搭建与验证",
        "project_4_img3_caption": "LLM驱动机械臂执行任务算法框架",
        "project_4_img4_caption": "LLM驱动机械臂执行任务算法实验结果",
        "project_5_title": "未来停车场智能充电系统设计开发",
        "project_5_desc": "设计开发了一种基于二维移动机构的新型智能充电系统，大幅提升充电效率。",
        "project_5_detail": `
        <p>针对新能源汽车保有量激增与固定充电桩数量不足的矛盾，以及现有“一桩一位”模式导致的燃油车占位、充电完成不挪车等资源浪费问题 ，本项目开发了一套基于二维移动导轨的自动化配电系统，旨在实现“一桩多位”的高效电力调度。</p>
        <h4>主要技术方案与创新点：</h4>
        <div class="feature-list">
            <h4>1. 机械结构：二维移动配电与功能模块</h4>
            <ul>
                <li><strong>二维导轨移动机构：</strong>摒弃了传统的固定式或一维移动方案，设计了基于皮带传动机构的XY轴二维移动平台。该机构结合超声波传感模块进行位置感知，通过控制步进电机实现配电装置在停车场顶部的精准二维定位，大幅扩大了充电覆盖范围。</li>
                <li><strong>配电模块（齿轮继电结构）：</strong>核心配电单元采用齿轮带动齿条的机械继电结构。通过齿轮转动驱动两侧齿条反向移动，带动受电弓与电网接触。相比传统电磁继电器，该机械结构在高电压、大功率传输下具有更高的稳定性和安全性。非工作状态下，受电弓自动回收进入绝缘外壳，确保安全。</li>
                <li><strong>集成清洁模块：</strong>在移动底座集成了剪叉式伸缩结构与吸尘装置。系统利用充电间隙，通过丝杆控制X轴、剪叉结构控制Y轴，自动对车辆底盘进行除尘清洁，实现了功能的复合利用。</li>
            </ul>
            <h4>2. 控制系统架构</h4>
            <ul>
                <li>使用Raspberry Pi 4B作为边缘服务器，负责与云端通信、接收用户指令及运行调度算法；使用Arduino Mega 2560配合TB6600驱动器控制步进电机，执行具体的运动逻辑。</li>
                <li>Arduino与树莓派之间通过LoRa模块进行低功耗远距离传输；树莓派通过Wi-Fi与MySQL云数据库交互，实现用户小程序端与硬件端的实时数据同步。</li>
            </ul>
            <h4>3. 算法优化：基于优先级的时域调度</h4>
            <ul>
                <li>基于采集的真实停车与充电数据（包括SOC、停留时长等），对充电需求进行聚类分析与缺口判断。</li>
                <li>借鉴操作系统进程调度思想，设计了一套充电流程时域优化算法。系统根据车辆当前的SOC、预计离场时间计算动态优先级。</li>
                <ul>
                    <li>优先满足“急需充电”车辆（优先级≤0），对非紧急需求进行延后处理，实现智能排序 。</li>
                    <li>仿真结果显示，该算法有效实现了“削峰填谷”。应用后，场站峰值充电功率降低了 55.56%，充电桩的综合利用率提升了约 2.5 倍（从11.99%提升至29.98%）。</li>
                </ul>
            </ul>
        </div>
        <p>项目完成了包含皮带传动、齿轮继电配电、清洁模块在内的完整二代样机制造与调试，验证了机械结构的合理性与控制系统的稳定性。同时开发了配套的微信小程序，实现了车位预约、充电状态监控及费用结算的完整闭环。</p>
        <p>项目获得2023年中国大学生机械工程创新创意大赛全国三等奖与长三角赛区一等奖、第十二届上海市大学生机械工程创新大赛一等奖等多想国家级、省部级与校级奖项。此外，项目还获得彼欧集团认可，受邀参加了2023年9月在法国巴黎由彼欧集团（OPmobility）与SoScience举办的“交通出行能源的未来(The Future Of Energy for Mobility)”创意大赛展示。</p>
        `,

        "project_5_img1_caption": "项目前期数据分析",
        "project_5_img2_caption": "项目机械结构示意图",

        "btn_training_video": "培训视频",
        "btn_demo_video_1": "演示视频1",
        "btn_demo_video_2": "演示视频2",
        "btn_open_source_drawings": "开源图纸",

        "timeline_title": "时间轴",
        "timeline_sustech_enroll_date": "2025.9",
        "timeline_sustech_enroll_title": "南方科技大学硕士入学",
        "timeline_sustech_enroll_desc": "进入南方科技大学机械与能源工程系攻读硕士学位，专业是智能制造与机器人。",
        "timeline_ecust_grad_date": "2025.6",
        "timeline_ecust_grad_title": "华东理工大学本科毕业",
        "timeline_ecust_grad_desc": "从华东理工大学毕业，获得工学学士学位，同时还获得校级优秀毕业生等荣誉。",
        "timeline_ecust_enroll_date": "2021.9",
        "timeline_ecust_enroll_title": "华东理工大学本科入学",
        "timeline_ecust_enroll_desc": "进入华东理工大学机械与动力工程学院开始本科学习，专业为机械设计制造及其自动化。",
        "timeline_1_date": "2025.7",
        "timeline_1_title": "2025年全国大学生机器人大赛ROBOCON“飞身上篮”全国赛",
        "timeline_1_desc": "代表华东理工大学获“飞身上篮”赛项竞技赛全国三等奖，运球赛全国二等奖与投篮赛全国三等奖，参赛机器人后续还获2025年中国大学生机械工程创新创意大赛全国二等奖与长三角赛区一等奖。",
        "timeline_2_date": "2025.5",
        "timeline_2_title": "2025年全国大学生机器人大赛ROBOCON“飞身上篮”全国交流赛",
        "timeline_2_desc": "代表华东理工大学获“飞身上篮”赛项交流赛全国二等奖与最佳技术奖。",
        "timeline_3_date": "2024.7",
        "timeline_3_title": "2024年全国大学生机器人大赛ROBOCON“颗粒归仓”全国赛",
        "timeline_3_desc": "代表华东理工大学获”颗粒归仓“赛项竞技赛全国三等奖，操作技能挑战赛全国二等奖，参赛机器人后续还获2024年中国大学生机械工程创新创意大赛全国三等奖与长三角赛区一等奖。",
        "timeline_4_date": "2023.9",
        "timeline_4_title": "“交通出行能源的未来(The Future Of Energy for Mobility)”创意大赛",
        "timeline_4_desc": "设计的“未来停车场智能充电系统”项目受彼欧集团(OPmobility)和SoScience邀请赴法国巴黎参加“交通出行能源的未来(The Future Of Energy for Mobility)”创意大赛展示。",
        "timeline_5_date": "2023.8",
        "timeline_5_title": "2023年中国大学生机械工程创新创意大赛",
        "timeline_5_desc": "设计的“未来停车场智能充电系统”项目获得全国三等奖与长三角赛区一等奖，此前还获得第十二届上海市大学生机械工程创新大赛一等奖等多项省部级与校级奖项。",
        
        "year_end_summary_title": "年终总结",
        "year_end_summary_2025_caption": "2025年摄影总结",
        "year_end_summary_caption": "2024年摄影总结",

        "contact_title": "联系方式",
        "toggle_lang": "English"
    }
};
