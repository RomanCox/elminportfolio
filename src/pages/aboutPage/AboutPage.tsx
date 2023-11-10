import {useState} from 'react';
import {Modal} from '../../components/modal';
import {AboutContentContainer} from './AboutContent.container.tsx';
import {AboutNavigation} from './AboutNavigation.component.tsx';
import {DownloadCV} from './DownloadCV.component.tsx';

import {AboutPageContainerStyled} from './AboutPage.styled.ts';

const AboutPage = () => {
	const [activeChapter, setActiveChapter] = useState<string>('Education');
	const [modalIsShow, setModalIsShow] = useState<boolean>(false);

	const chapters = [
		{
			id: 0,
			label: 'Education',
			items: [
				{
					id: 0,
					year: '2004-2008',
					title: 'College of Architecture and Civil Engineering as part of the Interstate Educational Institution of Higher Education "Belarusian-Russian University"',
					description: ['Faculty of Industrial and Civil Engineering'],
				},
				{
					id: 1,
					year: '2021',
					title: '3D School GRIPINSKY',
					description: ['3d Modeling and Visualisation Course (3ds Max + Corona , V-Ray)'],
				},
				{
					id: 2,
					year: '2021',
					title: 'School Artem Gogolov',
					description: ['3d Modeling and Visualisation. Creation of highly detailed models of soft  shapes (folds, sofas, beds, etc.). Studying 3ds Max  + Marvelous Designer'],
				},
				{
					id: 3,
					year: '2021-2022',
					title: 'School of Architecture, Design and Graphics ARHI.TEACH',
					description: ['Developing projects in Unreal Engine. Creating  animations and architectural walkthroughs.'],
				},
				{
					id: 4,
					year: '2021-2022',
					title: 'School Dviz',
					description: [
						'Online Course "Unreal Engine 4 For Archviz"',
						'Online Course "Unreal Engine 5 For Archviz"',
						'Online Course "Essential Blueprints for Archviz"',
						'Online Course "Marvelous designer for Archviz"',
						'Developing projects in Unreal Engine. Creating animations and architectural walkthroughs',
					],
				},
				{
					id: 5,
					year: '2021-2022',
					title: 'School RENDER.CAMP',
					description: ['Professional visualisation of interiors and exteriors in 3ds Max (Corona, VRay,  FStorm)'],
				},
			],
		},
		{
			id: 1,
			label: 'Experience',
			items: [
				{
					id: 0,
					year: '2020-now',
					title: 'Freelance, CG-Artist',
					description: [
						'3D Modeling and visualisation:',
						'- furniture catalog',
						'- architectural projects on autocad drawings, diagrams, photos',
						'- interiors in 3ds Max + Corona/Vray, Marvelous Designer',
						'Architectural rendering  in Unreal Engine 4/5:',
						'- optimization, light baking, RTX / path tracing / Lumen technologies',
						'- animation of interiors and exteriors',
						'- interactive projects',
						'- VR/AR',
						'Performed one-time and long-term projects for studious in CIS, Europe, America & Africa',
					],
				},
			],
		},
		{
			id: 2,
			label: 'Skills',
			items: [
				{
					id: 0,
					year: '',
					title: '3D modeling 3ds Max',
					description: [],
				},
				{
					id: 1,
					year: '',
					title: 'UV unfold',
					description: [],
				},
				{
					id: 2,
					year: '',
					title: 'Corona/Vray visualization',
					description: [],
				},
				{
					id: 3,
					year: '',
					title: 'Photoshop post-processing',
					description: [],
				},
				{
					id: 4,
					year: '',
					title: '3d modeling Marvelous Designer',
					description: [],
				},
				{
					id: 5,
					year: '',
					title: 'Visualization in Unreal Engine',
					description: [],
				},
				{
					id: 6,
					year: '',
					title: 'Unreal Engine animation',
					description: [],
				},
				{
					id: 7,
					year: '',
					title: 'Creating interactive projects in UE 4/5',
					description: [],
				},
				{
					id: 8,
					year: '',
					title: 'Setting up blueprints',
					description: [],
				},
				{
					id: 9,
					year: '',
					title: 'Creating VR projects',
					description: [],
				},
				{
					id: 10,
					year: '',
					title: 'Montage and color grading in DaVinci Resolve',
					description: [],
				},
			],
		},
		{
			id: 4,
			label: 'Awards',
			items: [
				{
					id: 0,
					year: 'Aug 5 2022',
					title: 'Dviz Awards',
					description: [],
				},
			],
		},
	]

	const chooseChapter = (value: string) => {
		setActiveChapter(value);
	};

	const openModal = () => {
		setModalIsShow(true);
	};

	const closeModal = () => {
		setModalIsShow(false);
	};

	return (
		<AboutPageContainerStyled>
			{modalIsShow && <Modal closeModal={closeModal} modalActive={modalIsShow}> <DownloadCV/> </Modal>}
			<AboutNavigation activeChapter={activeChapter} chooseChapter={chooseChapter} openModal={openModal} chapters={chapters}/>
			<AboutContentContainer activeChapter={activeChapter} chapters={chapters}/>
		</AboutPageContainerStyled>
	);
};

export default AboutPage;
