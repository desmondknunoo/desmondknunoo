import { weekendPhotos, kglPhotos, stanbicPhotos, type StoryImage } from './story-images'

export type ProgrammeArticle = {
    title: string
    publisher: string
    href: string
    date?: string
    dateTime?: string
}

type CoveredTraining = {
    id: string
    title: string
    organization: string
    details: string
    images: StoryImage[]
    coverage: ProgrammeArticle[]
}

export const coveredTrainings: CoveredTraining[] = [
    {
        id: 'emerging-technologies-bootcamp-2026',
        images: stanbicPhotos,
        title: 'Emerging Technologies Bootcamp — second cohort (2026)',
        organization: 'Lancaster University Ghana · In partnership with Stanbic Bank Ghana',
        details:
            'I taught students in the second Emerging Technologies Bootcamp. Across eight weeks, the programme introduced 30 senior high school students to AI, machine learning, coding, robotics, IoT, and 3D printing, culminating in nine capstone projects.',
        coverage: [{
            title: 'Lancaster University Ghana and Stanbic Bank Ghana Celebrate Young Innovators at Second Emerging Technologies Bootcamp',
            publisher: 'Lancaster University Ghana',
            date: '8 September 2026',
            dateTime: '2026-09-08',
            href: 'https://lancaster.edu.gh/news/lancaster-university-ghana-and-stanbic-bank-ghana-celebrate-young-innovators-at-second-emerging-technologies-bootcamp/',
        }],
    },
    {
        id: 'emerging-technologies-bootcamp-kgl',
        images: kglPhotos,
        title: 'Emerging Technologies Bootcamp — KGL Foundation',
        organization: 'Lancaster University Ghana · Supported by KGL Foundation',
        details:
            'I taught students in the eight-week Emerging Technologies Bootcamp supported by KGL Foundation. I introduced high school students to machine learning, microcontroller programming, 3D modelling for printing, and agentic coding. The programme brought together more than 30 students from 10 schools for hands-on learning in AI, robotics, coding, microcontrollers, smart systems, and 3D printing.',
        coverage: [
            {
                title: 'Lancaster University Ghana and KGL Foundation support students to acquire tech experience',
                publisher: 'Ghana News Agency',
                date: '29 January 2026',
                dateTime: '2026-01-29',
                href: 'https://gna.org.gh/2026/01/lancaster-university-ghana-and-kgl-foundation-support-students-to-acquire-tech-experience/',
            },
            {
                title: 'LUG, KGL Foundation bootcamp to showcase next generation of tech innovators ends',
                publisher: 'Ghanaian Times',
                date: '29 January 2026',
                dateTime: '2026-01-29',
                href: 'https://ghanaiantimes.com.gh/lug-kgl-foundation-bootcamp-to-showcase-next-generation-of-tech-innovators-ends/',
            },
            {
                title: 'Lancaster University Ghana Launches Emerging Technologies Bootcamp with Support from KGL Foundation',
                publisher: 'Lancaster University Ghana',
                href: 'https://lancaster.edu.gh/news/lancaster-university-ghana-launches-emerging-technologies-bootcamp-with-support-from-kgl-foundation/',
            },
            {
                title: 'LUG and KGL Foundation Conclude ETC Bootcamp, Showcasing Ghana’s Next Generation of Tech Innovators',
                publisher: 'Lancaster University Ghana',
                href: 'https://lancaster.edu.gh/news/lug-and-kgl-foundation-conclude-etc-bootcamp-showcasing-ghanas-next-generation-of-tech-innovators/',
            },
        ],
    },
    {
        id: 'emerging-technologies-weekend-programme-2025',
        images: weekendPhotos,
        title: 'Emerging Technologies Weekend Programme (2025)',
        organization: 'Lancaster University Ghana',
        details:
            'I taught students in the first cohort of the Emerging Technologies Weekend Programme. Over four Saturdays, 22 senior high school students explored robotics, microcontrollers, and smart systems, developing team projects addressing practical challenges.',
        coverage: [{
            title: 'Lancaster University Ghana empowers future tech leaders through Emerging Technologies Weekend Programme',
            publisher: 'Citi Newsroom',
            date: '30 July 2025',
            dateTime: '2025-07-30',
            href: 'https://www.citinewsroom.com/2025/07/lancaster-university-ghana-empowers-future-tech-leaders-through-emerging-technologies-weekend-programme/',
        }, {
            title: 'Lancaster University Ghana Empowers Future Tech Leaders Through Emerging Technologies Weekend Programme',
            publisher: 'Lancaster University Ghana',
            date: '30 July 2025',
            dateTime: '2025-07-30',
            href: 'https://lancaster.edu.gh/news/lancaster-university-ghana-empowers-future-tech-leaders-through-emerging-technologies-weekend-programme/',
        }],
    },
]

export const etcOpeningCoverage = {
    title: 'Emerging Technologies Centre opening and guided tour',
    details:
        'At the opening of Lancaster University Ghana’s Emerging Technologies Centre, I took visitors on a tour of the new facility with Dr. Pius Gadosey. The university’s article covers the unveiling, the guided tour, and the centre’s robotics, VR, IoT, and other emerging technology facilities.',
    coverage: {
        title: 'Lancaster University Ghana Unveils Cutting-Edge Emerging Technologies Centre',
        publisher: 'Lancaster University Ghana',
        href: 'https://lancaster.edu.gh/news/lancaster-university-ghana-unveils-cutting-edge-emerging-technologies-centre/',
    },
}
