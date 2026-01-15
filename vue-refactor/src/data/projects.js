export const projects = {
    1: {
        titleKey: 'project_1_title',
        descKey: 'project_1_desc',
        detailKey: 'project_1_detail',
        cardImage: '/images/robocon-2025-1.jpg',
        mainImage: '/images/robocon-2025-1.jpg',
        layout: [
            {
                type: 'image-row',
                items: [
                    { src: '/images/robocon-2025-2.jpg', captionKey: 'project_1_img1_caption' },
                    { src: '/images/robocon-2025-3.jpg', captionKey: 'project_1_img2_caption' }
                ]
            },
            {
                type: 'image-row',
                items: [
                    { src: '/images/robocon-2025-4.jpg', captionKey: 'project_1_img3_caption' },
                    { src: '/images/robocon-2025-5.jpg', captionKey: 'project_1_img4_caption' }
                ]
            },
            {
                type: 'image-row',
                items: [
                    { src: '/images/robocon-2025-6.jpg', captionKey: 'project_1_img5_caption' }
                ]
            },
            {
                type: 'buttons',
                items: [
                    { url: 'https://www.bilibili.com/video/BV1nH3vzLEgy/?share_source=copy_web&vd_source=1eb461f6bddf0bc2f2101474c44a8a70', icon: 'fas fa-play-circle', labelKey: 'btn_demo_video_1' },
                    { url: 'https://www.bilibili.com/video/BV1UR3EzmEBr/?share_source=copy_web&vd_source=1eb461f6bddf0bc2f2101474c44a8a70', icon: 'fas fa-play-circle', labelKey: 'btn_demo_video_2' },
                    { url: 'https://pan.baidu.com/s/1Ki5ZXS8XCjCsn4owYrJ4ag?pwd=te4j', icon: 'fas fa-download', labelKey: 'project_open_source' }
                ]
            }
        ]
    },
    2: {
        titleKey: 'project_2_title',
        descKey: 'project_2_desc',
        detailKey: 'project_2_detail',
        cardImage: '/images/robocon-2024-1.jpg',
        mainImage: '/images/robocon-2024-1.jpg',
        layout: [
            {
                type: 'image-row',
                items: [
                    { src: '/images/robocon-2024-2.jpg', captionKey: 'project_2_img1_caption' },
                    { src: '/images/robocon-2024-3.jpg', captionKey: 'project_2_img2_caption' }
                ]
            },
            {
                type: 'image-row',
                items: [
                    { src: '/images/robocon-2024-4.jpg', captionKey: 'project_2_img3_caption' }
                ]
            },
            {
                type: 'buttons',
                items: [
                    { url: 'https://space.bilibili.com/691149606', icon: 'fab fa-bilibili', labelKey: 'btn_training_video' },
                    { url: 'https://www.bilibili.com/video/BV1w142187c4/?share_source=copy_web&vd_source=1eb461f6bddf0bc2f2101474c44a8a70', icon: 'fas fa-play-circle', labelKey: 'btn_demo_video_1' },
                    { url: 'https://www.bilibili.com/video/BV11x4y1t7Ji/?share_source=copy_web&vd_source=1eb461f6bddf0bc2f2101474c44a8a70', icon: 'fas fa-play-circle', labelKey: 'btn_demo_video_2' },
                    { url: 'https://pan.baidu.com/s/1ud0ZduSVzKmUnaYjAMiyBw?pwd=z9if', icon: 'fas fa-download', labelKey: 'btn_open_source_drawings' }
                ]
            }
        ]
    },
    3: {
        titleKey: 'project_3_title',
        descKey: 'project_3_desc',
        detailKey: 'project_3_detail',
        cardImage: '/images/project3-1.jpg',
        mainImage: '/images/project3-1.jpg',
        layout: [
            {
                type: 'image-row',
                items: [
                    { src: '/images/project3-2.jpg', captionKey: 'project_3_img1_caption' }
                ]
            },
            {
                type: 'pdf',
                src: '/files/project3-1.pdf'
            },
            {
                type: 'buttons',
                items: [
                    { url: 'https://github.com/YiyuanYing/robot_lab', icon: 'fab fa-github', labelKey: 'btn_code' }
                ]
            }
        ]
    },
    4: {
        titleKey: 'project_4_title',
        descKey: 'project_4_desc',
        cardImage: '/images/project4-2.jpg',
        detailKey: 'project_4_detail',
        mainImage: null,
        layout: [
             {
                type: 'image-row',
                class: 'column-layout', 
                items: [
                    { src: '/images/project4-1.jpg', captionKey: 'project_4_img1_caption' }
                ]
            },
            {
                type: 'image-row',
                class: 'column-layout',
                items: [
                    { src: '/images/project4-4.jpg', captionKey: 'project_4_img2_caption' }
                ]
            },
            {
                type: 'image-row',
                items: [
                    { src: '/images/project4-2.jpg', captionKey: 'project_4_img3_caption' },
                    { src: '/images/project4-3.jpg', captionKey: 'project_4_img4_caption' }
                ]
            }
        ]
    },
    5: {
        titleKey: 'project_5_title',
        cardImage: '/images/project5-1.jpg',
        descKey: 'project_5_desc',
        detailKey: 'project_5_detail',
        mainImage: '/images/project5-1.jpg',
        layout: [
            {
                type: 'image-row',
                items: [
                    { src: '/images/project5-2.jpg', captionKey: 'project_5_img1_caption' }
                ]
            },
            {
                type: 'image-row',
                items: [
                    { src: '/images/project5-3.jpg', captionKey: 'project_5_img2_caption' }
                ]
            },
            {
                type: 'image-row',
                items: [
                     { src: '/images/project5-4.jpg' }
                ]
            },
            {
                type: 'pdf',
                src: '/files/project5-1.pdf'
            }
        ]
    }
}
